import { EditsSchema } from '../schemas/editSchema';
import { Mongoose, model } from 'mongoose';

var editModel = model('edit',EditsSchema);

export const Edit=editModel;