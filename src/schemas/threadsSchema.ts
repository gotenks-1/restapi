import { Schema } from 'mongoose';

export const ThreadsSchema=new Schema({
    _id: Number,
    uId:{type: String, ref: 'user'},
    subject: String,
    content: String,
    replies: [{type: Number, ref: 'reply'}],
    type: String,
    status: String
},{
    timestamps:true,
    collection:'threads'
});
