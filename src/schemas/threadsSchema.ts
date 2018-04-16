import { Schema } from 'mongoose';

export const ThreadsSchema=new Schema({
    _id: String,
    uId:String,
    subject: String,
    content: String,
    replies: [String],
    type: String,
    status: String
},{
    timestamps:true,
    collection:'threads'
});
