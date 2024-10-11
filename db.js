const mongoose=require('mongoose')

const mongodbURL='mongodb://localhost:27017/hotels';
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