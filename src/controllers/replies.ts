import { Request, Response } from 'express';
import { Schema, Mongoose } from 'mongoose';
import { Reply } from '../modals/replyModal';
import { Thread } from '../modals/threadModel';

import mongoose = require('mongoose');

export let getReplies = (req: Request, res: Response) => {
    // saveSampleReplies();
    // testTrick();
    res.setHeader('Access-Control-Allow-Origin', '*');
    Reply.find((err,replies)=>{
        res.json(replies);
    });
}
 
export let getReplyById = (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    Reply.findById(req.params.id)
        .populate('uId')
        .exec((err,replies)=>{
            res.json(replies);
        });
}

export let getRepliesByThreadId = (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    Thread.findById(req.params.id)
        .populate({
            path:'replies',
            populate:{
                path:'uId'
            }
        })
        .exec((err,data:any)=>{
            res.json(data.replies);
        });
}

export let submitReply = (req: Request, res: Response) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/plain;charset=UTf-8');
    console.log(JSON.stringify(req.body));
    addReply(req.body);
    res.json({success:true});
    // req.
}

function testTrick(){
    Reply.findByIdAndUpdate(1,{$set: { content: 'reply content <br> This is modified content' } }, function(err,reply){
        if(err){
            console.log(err);
            return;
        }
        console.log(reply);
        console.log('update success');
    });
}

function addReply(reply){
    var tempRply=new Reply({
        uId: reply['user'],
        tId: reply['tId'],
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
            "tid":0,
            "user":"gotenks",
            "content":"reply content"
        },
        {
            "tid":0,
            "user":"user2",
            "content":"reply content this is a reply"
        },
        {
            "tid":1,
            "user":"user3",
            "content":"reply content something"
        },
        {
            "tid":1,
            "user":"user2",
            "content":"reply content by user 2"
        },

        {
            "tid":2,
            "user":"user2",
            "content":"reply content something else"
        },
        {
            "tid":2,
            "user":"gotenks",
            "content":"reply content by admin"
        },

        {
            "tid":3,
            "user":"gotenks",
            "content":"reply content for thread 4"
        },
        {
            "tid":3,
            "user":"user2",
            "content":"reply content for thread 5"
        },
        {
            "tid": 0,
            "uid": "user2",
            "content": "reply content this is a reply<p>another para</p><p>one more para<h1>heading</h1></p><a target='_blank' href='https://www.google.com/'>this is link</a>",
            "user": "user2"
        }
    ];

    replies.forEach((reply,index)=>{
        addReply(reply);
    });
}



