import Project from "App/Models/Project";
import User from "App/Models/User";

export default class ProjectsController {
    async index({ view }) {
        let pageTitle = "All Projects";
        let g = await Project.all();
        let projects = g.reverse();
        return view.render("project/projects", { pageTitle, projects });
    }

    public async show({view,params}){
        let project = await Project.findOrFail(params.id);
        return view.render("project/project", { project });
    }

    public async create({view}){
        let pageTitle = "Add New Project";
        let user = await User.all();
        // let users = g.reverse();
        return view.render("project/add", { pageTitle, user });
    }

    public async store({response,request}){
        let postData = request.only(['id','name','description','status_id'])
        await Project.create(postData);
        return response.redirect("/projects");
    }

    public async edit({ view, params }) {
        let pageTitle = 'Edit Project';
        let project = await Project.findOrFail(params.id);
        return view.render("project/edit", { pageTitle,project });
    }
    
    public async update({ request, response, params }) {
        let postData = request.only(["id", "name", "description", "status_id"]);
        console.log(postData);
        const project = await Project.findOrFail(params.id);
        project.name = postData.name;
        project.description = postData.description;
        if (!postData.active) {
          project.status_id = "";
        } else {
          project.status_id = "on";
        }
        await project.save();
        return response.redirect("/projects");
      }

    public async destroy({ response, params }: { response: { redirect: (arg0: string) => any; }; params: { id: any; }; }){
        const project = await Project.findOrFail(params.id)
        await project.delete();
        return response.redirect('/projects')
    }

}
