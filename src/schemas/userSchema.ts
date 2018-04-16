import { Schema } from 'mongoose';

export const UserSchema=new Schema({
    _id: String,
    eamil: String,
    pass: String,
    dp: String,
    type: String
},{
    collection:'users',
    
});
