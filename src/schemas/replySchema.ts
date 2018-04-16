import { Schema } from 'mongoose';

export const replySchema=new Schema({
    _id: String,
    uId:String,
    tId: String,
    content: String,
},{
    timestamps:true,
    collection:'replies'
});