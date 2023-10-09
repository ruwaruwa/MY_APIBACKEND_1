const express=require('express');
const contact=express.Router();
const contacmodel= require('../models/Contactmodel');



const joi=require('joi')
contact.get('/',async(req,res)=>{
  try {
    const custget= await contacmodel.find();
    res.status(200).send(custget)
  } catch (error) {
 res.status(400).send(error.message)
  }
})
//getbone
contact.get('/:id',async(req,res)=>{
    try {
        const{id}=req.params
      const custget= await contacmodel.findById(id);
      res.status(200).send(custget)
    } catch (error) {
   res.status(400).send(error.message)
    }
  })

  //validaions
  //validaions
  const validation=(valid)=>{
    const val=joi.object({
        name:joi.string().required(),
        phone:joi.string().required(),
        
    })
  return  val.validate(valid);
  }
  //const validation=
//post
contact.post('/',async(req,res)=>{
    const{err}=validation(req.body)
    if(err){
      res.status(400).send(err.message)
    }
    try {
        const cuspo=await new contacmodel(req.body)
        await cuspo.save()
        res.status(200).send('successfuly added !')
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//
contact.put('/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const cuspo=await  contacmodel.findByIdAndUpdate(id,req.body,{new:true})
        await cuspo.save()
        res.status(200).send('successfuly updated !')
    } catch (error) {
        res.status(400).send(error.message)
    }
})
//
contact.delete('/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const cuspo=await  contacmodel.findByIdAndDelete(id)
        //await cuspo.save()
        res.status(200).send('successfuly deleted !')
    } catch (error) {
        res.status(400).send(error.message)
    }
})
module.exports=contact