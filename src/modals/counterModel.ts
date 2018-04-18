import { CounterSchema } from '../schemas/counterSchema';
import { Mongoose, model } from 'mongoose';

var counterModel = model('counter',CounterSchema);

export const Counter=counterModel;