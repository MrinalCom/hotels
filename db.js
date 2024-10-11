const mongoose=require('mongoose')
require('dotenv').config();
// const mongodbURL=process.env.MONGODB_URL_LOCAL;
const mongodbURL=process.env.DB_URL;
mongoose.connect(mongodbURL,{
    useNewUrlParser:true, 
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb');
})
db.on('error',()=>{
    console.log('error in mongodb');
})
db.on('disconnected',()=>{
    console.log('disconnected from mongodb');
})

module.exports=db;