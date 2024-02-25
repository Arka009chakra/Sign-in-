const express = require("express");
var cors=require("cors");
const app = express();
const m = require("./mongodb");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded())
var crypto = require("crypto");//to decrypt the password
const key = "adnan-tech-programming-computers";
const algo = "aes-256-cbc";

app.post('/login',async(req,res )=>{
    const result = await m.findOne({ email: req.body.email });

    if (!result) {
      res.json({ message: 'Email Not Registered!!' });
      return; // Exit early to avoid further processing
    }
    else{
      const password = req.body.password;

        var cipher = crypto.createCipher(algo, key); //encrypt the password
        var encrypted = cipher.update(password, "utf-8", "hex") //with format
            + cipher.final("hex");
    
      if (result.password === encrypted) {
        res.status(201).json({ message: 'Login successfully!' });
      } else {
        res.json({ message: 'Password Incorrect!!' });
      }
    }
}
)

app.listen(5000);
