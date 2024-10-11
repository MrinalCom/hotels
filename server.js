const express=require('express')
const app=express()
const db=require('./db')
const bodyParser=require('body-parser');
app.use(bodyParser.json()); //req.body
require('dotenv').config(); //for dotenv

const PORT=process.env.PORT ||3000; 

app.get('/',(req,res)=>{
    res.send("Welcome to my hotel");
})

//import the router files
const personRoutes=require('./routes/personRoutes.js')
const menuRoutes=require('./routes/menuRoutes.js')

//use the routers
app.use('/person',personRoutes)
app.use('/menu',menuRoutes)


app.listen(PORT ,()=>{
    console.log('server is running on port 3000')
})

