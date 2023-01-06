const User = require("../model/userSchema");
const bscrpt = require("bcrypt")
const jwt = require("jsonwebtoken");

module.exports = {
    create: (req, res) => {
        const { name, email, phone, password } = req.body;
        if (!name || !email || !phone || !password) {
            return res.status(422).json({ Error: "Please fill the data" })
        }
        User.findOne({ email: email }).then((data) => {
            if (data) {
                return res.status(422).json({ error: "Email Already Exist" })
            }
            const newuser = new User(req.body);
            newuser.save().then(data => {
                res.send(data)
            }).catch((err) => {
                res.send(err)
            })
        }).catch((err) => {
            res.status(500).json({ error: "Faild to register" })
        })

    },

    // login 
    loginuser: async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ Error: "Plaese fill the data" })
        }
        const userReult = await User.findOne({ email: email });
        if(userReult){
            const isMatch = await bscrpt.compare(password,userReult.password);
            const token =await userReult.generateAuthToken();
            res.cookie("userJWT", token , {
                expire:new Date(Date.now()+ 253600000),
                httpOnly:true,
            });
        if (!isMatch) {
            res.status(400).json({ Error: "Invalid Deatiles" })
        } else {
            res.status(200).json({ message: "User login successfuly" })
        }
        }else{
            return res.status(400).json({Error : "Invalid Datiles"})
        }
        
    }
}







