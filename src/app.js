const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path= require('path');
const hbs = require('hbs');
const staticPath = path.join(__dirname,'../public');
const tempPath = path.join(__dirname,'../templates/views');
const parPath=path.join(__dirname,'../templates/partials');
hbs.registerPartials(parPath);
app.set('view engine','hbs');
app.set('views',tempPath);
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
  res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render('404err')
})
app.listen(port,()=>{
    console.log(`listening to port at ${port}`);
})