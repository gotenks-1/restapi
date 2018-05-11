import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';

import * as homeController from './controllers/home';
import * as usersController from './controllers/users';
import * as replyController from './controllers/replies';
import * as threadController from  './controllers/threads';
import * as editController from  './controllers/edits';

export const app = express();
app.use(cors())

import mongoose = require('mongoose');
import dbConfig = require('../db.config.js');
mongoose.Promise=global.Promise;

app.set('port', 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());
// app.use(express.urlencoded());

mongoose.connect(dbConfig.url).then(()=>{
  console.log('connected');
}).catch((err)=>{
  console.log('failed');
  console.log(err);
  process.exit();
});


app.get('/', homeController.index);


//users
app.get('/users', usersController.getUsers);
app.get('/users/:id',usersController.getUserById);
app.post('/users', usersController.createUser);


//replies
app.get('/replies', replyController.getReplies);
app.get('/replies/:id', replyController.getReplyById);
app.get('/replies/thread/:id',replyController.getRepliesByThreadId);
app.post('/replies/submit',replyController.submitReply);

//threads
app.get('/threads', threadController.getThread);
app.get('/threads/:id', threadController.getThreadById);
app.get('/threads/status/:status', threadController.getThreadsByStatus);
app.get('/threads/user/:id', threadController.getThreadsByUserId);
app.post('/threads/submit',threadController.createNewThread);

//edits
app.get('/edits', editController.getEdits);
app.get('/edits/:id', editController.getEditsById);
app.get('/edits/reply/:id',editController.getEditsByReplyId);

app.listen(app.get('port'), (err) => {
    if(err){ 
        console.log(err);
    }
  console.log(('App is running at 8000'));
  console.log('Press CTRL-C to stop\n');
});

