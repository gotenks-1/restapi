import * as express from 'express';
import * as bodyParser from 'body-parser';

import * as homeController from './controllers/home';

export const app = express();

app.set('port', 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', homeController.index);

app.listen(app.get('port'), (err) => {
    if(err){
        console.log(err);
    }
  console.log(('App is running at 3000'));
  console.log('Press CTRL-C to stop\n');
});

