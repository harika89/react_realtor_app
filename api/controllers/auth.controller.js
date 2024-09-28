//db operations

import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // HASH THE PASSWORD
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      console.log(hashedPassword);
  
      // CREATE A NEW USER AND SAVE TO DB
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
  
      console.log(newUser);
  
      res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to create user!" });
    }
  };

export const login = async (req, res) =>{
    //db operations
    const {username, password} = req.body;
    try {

    //check if user exists
    const user = await prisma.user.findUnique({
        where:{username}
    })

    if(!user) return res.status(401).json({ message: "invalid credentials"});

    // check if password is correct

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) return res.status(401).json({message:"invalid credentials"});

    // if yes, generate cookie token(JWT) and send it to the user

    //res.setHeader("Set-Cookie", "test=" + "myValue").json("success");
    const age = 1000*60*60*24*7; //milliseconds

    const token = jwt.sign({
        id:user.id
    }, process.env.JWT_SECRET_KEY, {expiresIn:age})
    
    res.cookie("token", token, {
        httpOnly: true, // Helps prevent XSS
        // secure: true, // Only for HTTPS
        maxAge: age,
    }).status(200).json({ message: "Login successful" });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login !!"})   
    }
};

export const logout = (req, res) =>{
    //db operations
    res.clearCookie("token").status(200).json({message: "Logout success"})
};