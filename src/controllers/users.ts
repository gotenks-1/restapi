import { Request, Response } from 'express';
import { Schema, Mongoose } from 'mongoose';
import { User } from '../modals/userModel';

import mongoose = require('mongoose');

export let getUsers = (req: Request, res: Response) => {
    // saveSampleUsers()   ;
    res.setHeader('Access-Control-Allow-Origin', '*');
    User.find((err,users)=>{
        res.json(users);
    });
}
 
export let getUserById = (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    User.findById(req.params.id,(err,user)=>{
        res.json(user);
        // if(user){
        //     res.json(user);
        // }else{
        //     res.json({
        //         isUserFound:false,
        //         user:null
        //     });
        // }
    });
}

export let createUser = (req : Request, res: Response)=>{
    var user={};
    user['id']=req.body.id;
    user['pass']=req.body.pass;
    user['email']=req.body.email;
    user['dp']=req.body.dp;
    addUser(user).then((data)=>{
        if(data.err){
            res.json({
                status:"failed",
                msg:data.err
            });
        }else{
            res.json({
                status:"success",
                user:data.user
            });
        }
        console.log(data);
    });

}

async function addUser(user){
    var tempUsr=new User({
        _id: user['id'],
        email: user['email'],
        pass: user['pass'],
        dp: user['dp'],
        type: "normal"
    });
    var result:any={};
    await tempUsr.save().then((data)=>{
        console.log('user saved');
        result['user']=data;
        console.log(data);
    }).catch((err)=>{
        result['err']="Username already exists";
        console.log("error in saving");
    });
    return result;

}

function saveSampleUsers(){
    var users= [
        {
          "id": "gotenks",
          "email": "sebastian@codingthesmartway.com",
          "pass": "gotenks",
          "dp": "/react.png",
          "type":"admin"
        },
        {
          "id": "user2",
          "email": "sebastian@codingthesmartway.com",
          "pass": "user2",
          "dp": "/react.png",
          "type":"normal"
        },
        {
          "id": "user3",
          "email": "sebastian@codingthesmartway.com",
          "pass": "user3",
          "dp": "./react.png",
          "type":"normal"
        }
      ];

    users.forEach((user,index)=>{
        addUser(user);
    });
}



