import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';

import * as homeController from './controllers/home';
import * as usersController from './controllers/users';

export const app = express();
import mongoose = require('mongoose');
import dbConfig = require('../db.config.js');
mongoose.Promise=global.Promise;

app.set('port', 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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



app.listen(app.get('port'), (err) => {
    if(err){ 
        console.log(err);
    }
  console.log(('App is running at 8000'));
  console.log('Press CTRL-C to stop\n');
});

