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

    public async create({response}){
        return response.json({reply:"profile created"});
    }

    public async store({response,request}){
        let postData = request.only(['id','fullname','avatar'])
        let data = await Profile.create(postData)
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

    public async destroy(){}

}
