const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/UmarUser")
.then(()=>{
    console.log("mongoose connnect....");
}).catch((err)=>{
    console.log(err);
})