const express = require('express');
const app  = express();
const path = require('path');
const fs = require('fs');

app.get('/',(req,res)=>{
  const pathToFile = path.resolve(__dirname,'../dist/index.html');
  const content = fs.readFileSync(pathToFile,'utf-8');
  res.send(content);
});

app.get('/dashboard',(req,res)=>{
    const pathToFile = path.resolve(__dirname,'../dist/dashboard.html');
    const content = fs.readFileSync(pathToFile,'utf-8');
    res.send(content);
  });


app.use('/static',express.static(path.resolve(__dirname,'../dist')));


app.listen(3000,()=>{
    console.log('App listening at 3000');
})