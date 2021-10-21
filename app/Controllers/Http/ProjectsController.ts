// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Project from "App/Models/Project";

export default class ProjectsController {
    async index({ view }) {
        let pageTitle = "All Projects";
        let g = await Project.all();
        let projects = g.reverse();
        return view.render("project/projects", { pageTitle, projects });
      }

    public async show({response,params}){
        let p = await Project.findOrFail(params.id);
        return response.json({project:p});
    }

    public async create({response}){
        return response.json({reply:"project created"});
    }

    public async store({response,request}){
        let postData = request.only(['id','name','description','status_id'])
        let data = await Project.create(postData)
        return response.json({reply:data});
    }

    public async edit({response}){
        return response.json([
            {user_id: "4"},
            {userName:"admin"},
            {createdAt:"Fri,5 Oct 2011 18:27:50 GMT"},
        ]);
    }
    
    public async update(){}

    public async destroy({ response, params }: { response: { redirect: (arg0: string) => any; }; params: { id: any; }; }){
        const project = await Project.findOrFail(params.id)
        await project.delete();
        return response.redirect('/projects')
    }

}
