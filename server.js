const express=require('express');
const app=express();
const port=4000;


app.listen(port,()=>{
    console.log(`Server is up and running at ${port}`)
})

app.get('/',(req,res)=>{
    res.send("Hello  Get Api")
})