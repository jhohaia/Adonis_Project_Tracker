import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";

export default class UsersController {
  // async index({ view }) {
  //   let pageTitle = "All Users";
  //   let g = await User.all();
  //   let users = g.reverse();
  //   return view.render("user/users", { pageTitle, users });
  // }

  public async index ({ request, view }: HttpContextContract) {
    let pageTitle = "All Users";
    const page = request.input('users', 1)
    const limit = 3
    const posts = await Database.from('users').paginate(page, limit)
    let g = await User.all();
    let users = g.reverse();
    // Changes the baseURL for the pagination links
    posts.baseUrl("/user/users");
    return view.render('user/users', { users, pageTitle })
  }

  public async show({ view, params }) {
    let user = await User.findOrFail(params.id);
    await user.load("profile");
    console.log(user);
    return view.render("user/user", { user });
  }

  public async create({ view }) {
    let pageTitle = "Add New User";
    let g = await User.all();
    // let users = g.reverse();
    return view.render("user/add", { pageTitle, g });
  }

  public async store({ response, request }) {
    let postData = request.only(["username", "email", "password", "active"]);
    await User.create(postData);
    return response.redirect("/users");
  }

  public async edit({ view, params }) {
    let user = await User.findOrFail(params.id);
    return view.render("user/edit", { user });
  }

  public async update({ request, response, params }) {
    let postData = request.only(["username", "email", "password", "active"]);
    console.log(postData);
    const user = await User.findOrFail(params.id);
    user.username = postData.username;
    user.email = postData.email;
    user.password = postData.password;
    if (!postData.active) {
      user.active = "";
    } else {
      user.active = "on";
    }
    await user.save();
    return response.redirect("/users");
  }

  public async destroy({response,params}) {
      const user = await User.findOrFail(params.id)
      await user.delete();
      return response.redirect('/users')
  }
}
