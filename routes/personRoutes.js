const express=require('express')
const router=express.Router();
const Person=require('../models/person');
const { findByIdAndUpdate } = require('../models/menuItem');



router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const person=new Person(data);
        const savedPerson=await person.save();
        res.status(201).send(savedPerson);

    }
    catch(err){
        res.status(500).send(err);
    }
})


//get method to find the person
router.get('/',async(req,res)=>{
    try{
        const data=await Person.find();
        console.log("data fetched");
        res.status(200).send(data);
    }
    catch(err){
        res.status(500).send(err);
    }
})

//to update data

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const updatedPersondata=req.body;

        const response=await Person.findByIdAndUpdate(personId,updatedPersondata,{
            new:true,
            runValidators:true

        })
        if(!response){
            return res.status(404).json({error:"Person not found"}); 
        }
        else{
            console.log("Data updated");
            res.status(200).send(response);
        }

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})

//to delete method
router.delete('/:id',async(req,res)=>{
    try{
        const personid=req.params.id;

        const response=await Person.findByIdAndDelete(personid);
        if(!response){
            return res.status(404).json({error:"Person not found"});
        }
        else{
            console.log("Data deleted");
            res.status(200).send(response);
        }
    }
    catch(err){
        console.log(err);
        res.status(404).json({error:"Internal server error"});
    }
})


//to get data using variables or params
router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
              const response=await Person.find({work:workType});
              console.log('response fetched');
              res.status(200).json(response);  
        }
        else{
            res.status(404).json({
                message:"work type not found"
            })
        }

    }
    catch(err){
        console.log(err);
        res.status(403).json({
            message:"Invalid request"
        })
    }
})

module.exports=router;