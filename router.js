const express = require("express");
const router = express.Router();
const controller = require("../controller/userController")


router.post("/adduser", controller.create);
router.post("/login", controller.loginuser)


router.get("/", (req,res)=>{
    res.status(200).send("Hello World")
});
router.get("/about", (req,res)=>{
    console.log("hello i am about");
    res.status(200).send("Hello World from About")
});
router.get("/contact", (req,res)=>{
    res.status(200).send("Hello World from Contact")
});
router.get("/signup", (req,res)=>{
    res.status(200).send("Hello World from Sign-Up")
});
router.get("/signin", (req,res)=>{
    res.status(200).send("Hello World from Sign-In")
});


module.exports= router;