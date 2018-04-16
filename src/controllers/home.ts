import { Request, Response } from 'express';
import { Schema, Mongoose } from 'mongoose';
import { aModel } from '../modals/sampleSchemaModel';

import mongoose = require('mongoose');

export let index = (req: Request, res: Response) => {   
  console.log('calling save');
  createModals();
  console.log('save ended');
  res.json({
    message: 'Welcome folks!!.'
  });
}
 

export const getValues = (req:Request, res:Response)=>{

}

function createModals(){
  for(var i=0;i<5;i++){
    var modelInstance=new aModel({
      title:'title'+i,
      content:'content'+0
    });
    modelInstance.save((err,product)=>{
      console.log('saved',product);
    });
  }
}

