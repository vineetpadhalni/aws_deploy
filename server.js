const express=require("express")
const app=express()
app.get("/",(req,res)=>{
        res.send({message:"welcome to demo server"})
})
let port=process.env.PORT || 8085
app.listen(port,()=>{
    console.log("server started on port ", port)
})
