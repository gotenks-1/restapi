import { SampleSchema } from '../schemas/sampleSchema';
import { Mongoose, model } from 'mongoose';

var sampleModel = model('sample',SampleSchema);

var modelA = model('samplea',SampleSchema);

export const sModel=sampleModel;
export const aModel=modelA;