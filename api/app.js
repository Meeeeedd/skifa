const express=require('express')
const cors=require('cors')
const authRouter=require('./routers/auth.router')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))   
app.use(cors())

app.use('/api/v1/auth',authRouter)

app.use((error,req,res,next)=>{
    res.status(500).json({
        message:'500 Server Error',
        error:error.message
    })
})

module.exports=app;