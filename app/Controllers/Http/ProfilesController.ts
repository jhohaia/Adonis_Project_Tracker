// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Profile from "App/Models/Profile";

export default class ProfilesController {
    async index({view}){
        return view.render('profile/profiles')
    }

    public async show({response,params}){
        let p = await Profile.findOrFail(params.id);
        return response.json({profile:p});
    }

    public async create({view}){
        let pageTitle = "Add New Profile";
        let g = await Profile.all();
        // let users = g.reverse();
        return view.render("profile/add", { pageTitle, g });
    }

    public async store({response,request}){
        let postData = request.only(['id','user_id','fullname','avatar'])
        await Profile.create(postData);
        return response.redirect("/users");
    }

    public async edit({view,params}){
        let profile = await Profile.findOrFail(params.id);
        return view.render("user/edit", { profile });
    }
    
    public async update(){}

    public async destroy(){}

}
