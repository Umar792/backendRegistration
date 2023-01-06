const express = require("express");
const app = express();
const cors = require("cors")
require("./db/conn");
// ========= bodyParser
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

// = middlewear
const middlewear = (req,res,next)=>{
    console.log("hello i am middlewear");
    next();
}
// =========== router 
app.use(require("./router/router"))



app.listen(5000,()=>{
    console.log("Express server start ho gaya 5000");
})