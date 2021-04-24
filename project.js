var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/',(req,res)=>{
    res.send("in default page")
})




app.post('/sum',(req,res)=>{
    var  x=parseFloat(req.body.a)
    var y=   parseFloat(req.body.b)
    var result=x+y
    res.json({"result": result})
})




app.listen(process.env.port||3000,()=>{
    console.log("server started")
})