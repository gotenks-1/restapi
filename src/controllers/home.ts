import { Request, Response } from 'express';
import { Schema, Mongoose } from 'mongoose';

import mongoose = require('mongoose');

export let index = (req: Request, res: Response) => {   
  res.json({
    message: 'Welcome folks!!.'
  });
}

export const sampleSchema=new Schema({
    title: String,
    content: String
},{
    timestamps:true,
});

export const getValues = (req:Request, res:Response)=>{

}

export default mongoose.model('sample',sampleSchema);
