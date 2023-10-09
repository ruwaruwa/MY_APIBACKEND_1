const express=require('express')
const app= express()
const cors=require('cors')
///last comited
//const moongoose=require('moongoose')
const dbcon=require('./DBconections/dbcon')
dbcon();

////comentsshhshxassnn

const product=require('./routers/productroute')
const customer=require('./routers/customerrote')
const Service=require('./routers/serviceroute')
const contact= require('./routers/Contacts')

app.use(cors());
app.use(express.json())


app.use('/customer',customer);

app.use('/product',product);

app.use('/Service',Service);

app.use('/contact',contact);

app.get('/',(req,res)=>{
res.send('app started')
});

 app.listen(6002,async(req,res)=>{
    console.log('server started at 6002')
 })