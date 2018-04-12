const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.json({
        'message':'first server'
    });
});

app.listen(8000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('active at 8000');
})