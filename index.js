const express = require("express")
const bodyParser = require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
    // /Users/duygu/OnlineEducation/Youtube/NodeJS/Get_Post_Basic_Calculator/index.html
})

app.post("/",(req,res)=>{
    const num1 = req.body.n1;
    const num2 = req.body.n2;
    const result = num1 * num2;
    res.send("Result "+ result)
})

const server = app.listen(3000,()=>{
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
})