import { Request, Response } from 'express';
import { Schema, Mongoose } from 'mongoose';
import { Reply } from '../modals/replyModal';
import { Thread } from '../modals/threadModel';

import mongoose = require('mongoose');

export let getThread = (req: Request, res: Response) => {

    Thread.find()
        .populate('uId')
        .exec((err,threads)=>{
            res.json(threads);
        });

    // Thread.find((err,threads)=>{
    //     threads.forEach((thread)=>{
    //         Thread.findByIdAndUpdate(thread._id,{
    //             $push: {
    //                 replies: {
    //                     $each: [thread._id*2, thread._id*2+1]
    //                 }
    //             }
    //         })
    //     });
    // })
}
 
export let getThreadById = (req: Request, res: Response) => {
    
    Thread.findById(req.params.id)
        .populate('uId')
        .exec((err,thread)=>{
            res.json(thread);
        });
}

export let getThreadsByStatus=(req: Request, res: Response)=>{
    Thread.find({status: req.params.status})
        .populate('uId')
        .exec((err,threads)=>{
            res.json(threads);
        });
}

function addThread(thread){
    var tempThread=new Thread({
        uId: thread['uid'],
        content: thread['content'],
        subject: thread['subject'],
        status: thread['status']
    });
    tempThread.save((err,product)=>{
        if(err){
            console.log('error',err);
        }else{
            console.log('user saved');
            console.log(product);
        }
    });
}

function saveSampleThreads(){
    var threads= [
        {
            "uid":"user2",
            "subject":"test subject",
            "content":"test content",
            "status":"open",
        },
        {
            "uid":"user2",
            "subject":"test subject 1",
            "status":"open",
            "content":"test content this is content",
        },
        {
            "uid":"user3",
            "subject":"test subject 2",
            "content":"test content another content",
            "status":"closed",
        },
        {
            "uid":"user3",
            "subject":"test subject 3",
            "content":"test content something",
            "status":"closed",
        }
    ];

    threads.forEach((thread,index)=>{
        addThread(thread);
    });
}



