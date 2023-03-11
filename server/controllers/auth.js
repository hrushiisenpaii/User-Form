import  jwt  from "jsonwebtoken"
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'

export const signup = async(req, res) => {
    const { name, DOB, email, phone } = req.body;
    try{
        const existinguser = await users.findOne({ email })
        if(existinguser){
            return res.status(404).json({ message: 'User already exist.'})
        }

        const newUser = await users.create({ name, DOB, email, phone})
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", { expiresIn: '1hr'})
        res.status(200).json({ result: newUser, token})
    }catch(error){
        res.status(500).json('Something went wrong...')
    }
}

export const login = async(req, res) => {
    const { email, phone } = req.body;
    try{
        const existinguser = await users.findOne({ email })
        if(!existinguser){
            return res.status(404).json({ message: "User doesn't exist."})
        }
        
        var isPhone;

        if(isPhone === existinguser.phone)
        if(!isPhone){
            return res.status(400).json({ message: "Invalid Password or User"})
        }
        
        const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, "test", { expiresIn: '1hr'})
        res.status(200).json({ result: existinguser, token})
        
    }catch(error){
        res.status(500).json('Something went wrong...')
    }
}