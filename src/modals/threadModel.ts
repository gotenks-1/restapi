import { ThreadsSchema } from '../schemas/threadsSchema';
import { Mongoose, model } from 'mongoose';

var threadModel = model('thread',ThreadsSchema);

export const Thread=threadModel;