import { Schema } from 'mongoose';
import { Counter } from '../modals/counterModel';

export const ThreadsSchema=new Schema({
    _id: Number,
    uId:{type: String, ref: 'user'},
    subject: String,
    content: String,
    replies: [{type: Number, ref: 'reply'}],
    lastReply: {type:Number, ref: 'reply'},
    type: String,
    status: String
},{
    timestamps:true,
    collection:'threads'
});

ThreadsSchema.pre('save', function(next){
    var doc = this;
    Counter.findByIdAndUpdate('threadId',{$inc: { seq: 1 } }, function(err,counter){
        if(err){
            return next(err);
        }
        doc._id=counter['seq'];
        doc['lastReply']=null;
        next();
    });

});