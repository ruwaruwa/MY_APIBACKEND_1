const moongoose=require('mongoose');
moongoose.set('strictQuery',false);
dbcon=async()=>{
    try {
        moongoose.connect('mongodb+srv://amiira123:12345@cluster0.xdvvzfc.mongodb.net/Coffe_backend');
        console.log("DB CONNECTED !!")
    } catch (error) {
        console.log(error)
    }
}
module.exports=dbcon