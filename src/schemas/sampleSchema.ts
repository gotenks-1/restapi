import { Schema } from 'mongoose';

export const SampleSchema=new Schema({
    title: String,
    content: String
},{
    timestamps:true,
});
