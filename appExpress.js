const express = require('express');
const path = require('path');
const { QueryError } = require('sequelize');
const parser = require('body-parser');

const app = express();
app.use(parser.urlencoded({extended: false}))
app.use('/static',express.static(path.join(_dirname,static)))

//to confiq midile ware
app.use('/',(req,res,next)=>{
    console.log('request received');
    next();
})
////////////////
app.use('/',(req,res,next)=>{
    console.log('request received in second middleware');
    next();
})

app.get('/employee/create',(req,res)=>{
    //res.send('hi from express app');
    var loc = path.join(__dirname,'views','index.html');
    res.sendFile(loc);
    // res.json({
    //     status: 'success'
    // })
});

// app.listen(80)

app.post('/employee/create',(req,res)=>{
    // res.send("about us page");
    console.log(req.body.name);
    res.json(req.body);
});
app.listen(80);