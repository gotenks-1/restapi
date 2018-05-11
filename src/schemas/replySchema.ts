import { Schema } from 'mongoose';
import { Counter } from '../modals/counterModel';
import { Thread } from '../modals/threadModel';

export const ReplySchema=new Schema({
    _id: {type: Number},
    uId:{type: String, ref: 'user'},
    tId: {type: String, ref: 'thread'},
    content: String,
    edits:[{type: Number, ref: 'edit'}]
},{
    timestamps:true,
    collection:'replies'
});

ReplySchema.pre('save', function(next){
    console.log('I will try to run');
    var doc = this;
    if(doc._id){
        next();
        return;
    }
    console.log('oh i ran');
    Counter.findByIdAndUpdate('replyId',{$inc: { seq: 1 } }, function(err,counter){
        if(err){
            return next(err);
        }
        Thread.findByIdAndUpdate(doc['tId'],{
            $push: {
                replies: counter['seq']
            },
            $set:{
                lastReply: counter['seq']
            }
        },(err,thread)=>{
            if(err){
                return next(err);
            }
        });
        doc._id=counter['seq'];
        next();
    });

});

// ReplySchema.pre('save', function(next){
//     console.log('I will run anyways');
// });