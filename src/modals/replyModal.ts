import { ReplySchema } from '../schemas/replySchema';
import { Mongoose, model } from 'mongoose';

var replyModel = model('reply',ReplySchema);

export const Reply=replyModel;