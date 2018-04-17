import { UserSchema } from '../schemas/userSchema';
import { Mongoose, model } from 'mongoose';

var userModel = model('user',UserSchema);

export const User=userModel;