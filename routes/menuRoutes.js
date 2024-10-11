const express=require('express')
const router=express.Router()
const Menuitem=require('../models/menuItem')


router.post('/',async(req,res)=>{
    try {
        const data=req.body;
        const menuItem=new Menuitem(data);
        const savedMenuItem=await menuItem.save();
        res.status(201).send(data);
        
    } catch (error) {
        res.status.json("Error in saving menu");
    }
})

router.get('/',async(req,res)=>{
    try{
        const data =await Menuitem.find();
        res.status(200).send(data);
    }
    catch(error){
        res.status(500).send(error);
    }
})

router.get('/:taste',async(req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste=='sweet' || taste=='spicy' || taste=='sour'){
            const response=await Menuitem.find({taste:taste});
            console.log(response);
            res.status(200).json(response);
        }
        else{
            res.status(400).json("Invalid taste type");
        }
        
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            message:"Menu test not found"
        })
    }
})

module.exports=router;