import { Schema } from 'mongoose';

export const CounterSchema=new Schema({
    _id: {type: String, required: true},
    seq: {type: Number, default: 0}
},{
    collection:'counter'
});