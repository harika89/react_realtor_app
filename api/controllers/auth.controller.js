//db operations

import bccrypt from "bcrypt";

export const register = async (req, res) =>{
    const {username, email, password} = req.body;  //console.log(req.body) tested the post req in postman
    //HASH THE PASSWORD

    const hashedPassword = await bccrypt.hash(password,15);
    console.log(hashedPassword);

    //CREATE NEW USER 
    //SAVE IT TO TEH DATABASE

}

export const login = (req, res) =>{
    //db operations
}

export const logout = (req, res) =>{
    //db operations
}