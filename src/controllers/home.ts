import { Request, Response } from 'express';
import { Schema, Mongoose } from 'mongoose';
import { Counter } from '../modals/counterModel';

import mongoose = require('mongoose');

export let index = (req: Request, res: Response) => {   
  console.log('calling save');
  // createModals();
  console.log('save ended');
  res.json({
    message: 'Welcome folks!!.'
  });
}
 

export const getValues = (req:Request, res:Response)=>{

}

function createModals(){
  // var c1=new Counter({
  //   _id: "threadId"
  // });
  // var c2=new Counter({
  //   _id: "replyId"
  // });
  var c3=new Counter({
    _id: "editId"
  });
  // c1.save();
  // c2.save();
  c3.save();
}

