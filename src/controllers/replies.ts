import { Request, Response } from 'express';
import { Schema, Mongoose } from 'mongoose';
import { Reply } from '../modals/replyModal';
import { Thread } from '../modals/threadModel';

import mongoose = require('mongoose');

export let getReplies = (req: Request, res: Response) => {

    Reply.find((err,replies)=>{
        res.json(replies);
    });
}
 
export let getReplyById = (req: Request, res: Response) => {
    
    Reply.findById(req.params.id)
        .populate('uId')
        .exec((err,replies)=>{
            res.json(replies);
        });
}

export let getRepliesByThreadId = (req: Request, res: Response) => {
    
    Thread.findById(req.params.id)
        .populate('replies')
        .exec((err,replies)=>{
            res.json(replies);
        });
}

function addReply(reply){
    var tempRply=new Reply({
        uId: reply['user'],
        tId: reply['tid'],
        content: reply['content'],
        edits:[]
    });
    tempRply.save((err,product)=>{
        if(err){
            console.log('error',err);
        }else{
            console.log('user saved');
            console.log(product);
        }
    });
}

function saveSampleReplies(){
    var replies= [
        {
            "tid":1,
            "user":"gotenks",
            "content":"reply content"
        },
        {
            "tid":1,
            "user":"user2",
            "content":"reply content this is a reply"
        },
        {
            "tid":2,
            "user":"user3",
            "content":"reply content something"
        },
        {
            "tid":2,
            "user":"user2",
            "content":"reply content by user 2"
        },

        {
            "tid":3,
            "user":"user2",
            "content":"reply content something else"
        },
        {
            "tid":3,
            "user":"gotenks",
            "content":"reply content by admin"
        },

        {
            "tid":4,
            "user":"gotenks",
            "content":"reply content for thread 4"
        },
        {
            "tid":4,
            "user":"user2",
            "content":"reply content for thread 5"
        },
        {
            "tid": 1,
            "uid": "user2",
            "content": "reply content this is a reply<p>another para</p><p>one more para<h1>heading</h1></p><a target='_blank' href='https://www.google.com/'>this is link</a>",
            "user": "user2"
        }
    ];

    replies.forEach((reply,index)=>{
        addReply(reply);
    });
}



