import { Request, Response } from 'express';
import { Schema, Mongoose } from 'mongoose';
import { User } from '../modals/userModel';

import mongoose = require('mongoose');

export let getUsers = (req: Request, res: Response) => {
    //saveSampleUsers()   ;
    
    User.find((err,users)=>{
        res.json(users);
    });
}
 
export let getUserById = (req: Request, res: Response) => {
    
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

function addUser(user){
    var tempUsr=new User({
        _id: user['id'],
        email: user['email'],
        pass: user['pass'],
        dp: user['dp'],
        type: 'admin'
    });
    tempUsr.save((err,product)=>{
        if(err){
            console.log('error',err);
        }else{
            console.log('user saved');
            console.log(product);
        }
    });
}

function saveSampleUsers(){
    var users= [
        {
          "id": "gotenks",
          "email": "sebastian@codingthesmartway.com",
          "pass": "gotenks",
          "dp": "",
          "type":"admin"
        },
        {
          "id": "user2",
          "email": "sebastian@codingthesmartway.com",
          "pass": "user2",
          "dp": "",
          "type":"normal"
        },
        {
          "id": "user3",
          "email": "sebastian@codingthesmartway.com",
          "pass": "user3",
          "dp": "",
          "type":"normal"
        }
      ];

    users.forEach((user,index)=>{
        addUser(user);
    });
}



