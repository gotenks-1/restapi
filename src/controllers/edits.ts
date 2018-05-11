import { Request, Response } from 'express';
import { Schema, Mongoose } from 'mongoose';
import { Edit } from '../modals/editModel';
import { Thread } from '../modals/threadModel';
import { Reply } from '../modals/replyModal';

import mongoose = require('mongoose');

export let getEdits = (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // addSampleEdit();
    Edit.find((err,replies)=>{

        res.json(replies);
    });
}
 
export let getEditsById = (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    Edit.findById(req.params.id)
        .populate('uId')
        .exec((err,replies)=>{
            res.json(replies);
        });
}

export let getEditsByReplyId = (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    Reply.findById(req.params.id)
        .populate({
            path: 'edits',
            populate: {
                path: 'uId'
            }
        })
        .exec((err,reply:any)=>{
            res.json({edits:reply.edits});
        });
}

function addEdit(edit){
    var tempEdit=new Edit({
        uId: edit['user'],
        rId: edit['rId'],
        content: edit['content'],
    });
    tempEdit.save((err,edit)=>{
        if(err){
            console.log('error',err);
        }else{
            console.log('edit saved');
            console.log(edit);
        }
    });
}

function addSampleEdit(){
    var sampleEdit={
        user: "user3",
        rId: "2",
        content: "edit sample content"
    };
    addEdit(sampleEdit);
}

