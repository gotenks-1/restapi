import { Schema } from 'mongoose';
import { Counter } from '../modals/counterModel';

export const ReplySchema=new Schema({
    _id: {type: Number},
    uId:{type: String, ref: 'user'},
    tId: {type: String, ref: 'thread'},
    content: String,
    edits:[Number]
},{
    timestamps:true,
    collection:'replies'
});

ReplySchema.pre('save', function(next){
    var doc = this;
    Counter.findByIdAndUpdate('replyId',{$inc: { seq: 1 } }, function(err,counter){
        if(err){
            return next(err);
        }
        doc._id=counter['seq'];
        next();
    });

});