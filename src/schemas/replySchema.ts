import { Schema } from 'mongoose';

export const ReplySchema=new Schema({
    _id: {type: Number},
    uId:{type: String, ref: 'user'},
    tId: {type: String, ref: 'thread'},
    content: String,
},{
    timestamps:true,
    collection:'replies'
});