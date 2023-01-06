const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
dotenv.config({path : "../config.env"});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
});




userSchema.pre("save", async function (req, res, next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

// == token generate 
userSchema.methods.generateAuthToken = async function () {
    try {
        // let token = jwt.sign({ _id: this._id }, process.env.SECRET_KAY);
        // this.tokens = this.tokens.concat({ token: token });
        // await this.save();
        // return token;
       let SECRET_KAY = "PAKISTNAISMYLOVELYCOUNTERYMUHAMMADUMARYOUSAFWEAREMERNDEVELOPER";
        let token = jwt.sign({_id:this._id},SECRET_KAY);
        this.tokens =await this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }

}
const User = mongoose.model("User", userSchema);

module.exports = User;


