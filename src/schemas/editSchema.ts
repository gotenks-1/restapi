import { Schema } from 'mongoose';
import { Counter } from '../modals/counterModel';
import { Reply } from '../modals/replyModal';

export const EditsSchema=new Schema({
    _id: {type: Number},
    uId:{type: String, ref: 'user'},
    rId: {type: String, ref: 'reply'},
    content: String,
},{
    timestamps:true,
    collection:'edits'
});

EditsSchema.pre('save', function(next){
    console.log('I will try to run');
    var doc = this;
    if(doc._id){
        next();
        return;
    }
    console.log('oh i ran');
    Counter.findByIdAndUpdate('editId',{$inc: { seq: 1 } }, function(err,counter){
        if(err){
            return next(err);
        }
        doc._id=counter['seq'];
        Reply.findByIdAndUpdate(doc['rId'],{
            $push:{
                edits: {
                    $each : [counter['seq']]
                }
            }
        },function(err,reply){
            if(err){
                return next(err);
            }
            next();
        });
        
    });

});


// EditsSchema.pre('save', function(next){
//     console.log('I will run anyways');
// });