const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());
const minNum = -1000000;
const maxNum = 1000000

// Parse JSON bodies (as sent by API clients)


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.post("/add",(req,res)=>{
    //let num1,num2;
    let firstNum = Number(req.body.num1);
    let secondNum = Number(req.body.num2);
    
    let result = firstNum+secondNum;
    if(firstNum<minNum || secondNum<minNum || result<minNum){
        res.send({
            status:"error",
            message:"Underflow"
        })
    }
    if(firstNum>maxNum  || secondNum>maxNum || result>maxNum){
        res.send({
            status:"error",
            message:"Overflow"
        })
    } 
    if( typeof firstNum==='string' ||  typeof secondNum==='string'){
        res.send({
            status:"error",
            message:"Invalid data type"
        })
    }

    res.send({
        status:"success",
        message:"the sum of two number",
        sum:result
    })
})

app.post("/sub",(req,res)=>{
    let firstNum = Number(req.body.num1);
    let secondNum = Number(req.body.num2);
    let result = firstNum-secondNum;
    if(firstNum<minNum || secondNum<minNum || result<minNum){
        res.send({
           status:"error",
           message:"Underflow"
        })
    }
    if(firstNum>maxNum || secondNum>maxNum || result>maxNum){
        res.send({
            status:"error",
            message:"OverFlow"
        })
    }

    if( typeof firstNum === 'string' ||  typeof secondNum==='string'){
        res.send({
            status:"error",
            message:"Inavlaid data type"
        })
    }

    res.send({
        status:"sucess",
        message:"the difference between two number ",
        difference:result
    })
})

app.post("/multiply",(req,res)=>{
    let firstNum = Number(req.body.num1);
    let secondNum = Number(req.body.num2);
    let result = firstNum*secondNum;
    if(firstNum<minNum || secondNum<minNum || result<minNum){
        res.send({
            status:"error",
            message:"Underflow"
        })
    }

    if(firstNum>maxNum || secondNum>maxNum || result>maxNum){
        res.send({
            status:"error",
         message:"Overflow"
        })
    }

    if( typeof firstNum === 'string' ||  typeof secondNum === 'string'){
        res.send({
            status:'error',
            message:'Invalid data type'
        })
    }

    res.send({
        status:"sucess",
        message:"the product of given number",
        result:result
    })
})

app.post("/divide",(req,res)=>{
    let firstNum = Number(req.body.num1);
    let secondNum = Number(req.body.num2);
    let result = firstNum/secondNum;
    if(secondNum === 0){
        res.send({
            status:"error",
            message:"cannot divide by zero"
        })
    }
    if(firstNum<minNum || secondNum<minNum || result<minNum){
        res.send({
            status:"error",
            message:"Underflow"
        })
    }

    if(firstNum>maxNum || secondNum>maxNum || result>maxNum){
        res.send({
            status:"error",
            message:"Overflow"
        })
    }

    if( typeof firstNum === 'string' ||  typeof secondNum === 'string'){
        res.send({
            status:"error",
            message:"Invalid data type"
        })
    }
    res.send({
        status:"success",
        message:"the division of given number",
        result:result
    })
})



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;