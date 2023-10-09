const moongoose=require('mongoose')
const Contactchema= new moongoose.Schema({
    name:{
        type:String,
        required:true
    },
    // type:{
    //     type:String,
    //     required:true
    // },
    phone:{
        type:String,
        required:true
    }
})
const contacmodel= moongoose.model("Contactmodel",Contactchema)
module.exports=contacmodel