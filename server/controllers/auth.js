import  jwt  from "jsonwebtoken"
import users from '../models/auth.js'

export const signup = async(req, res) => {
    const { name, DOB, email, phones } = req.body;
    try{
        const existinguserEmail = await users.findOne({ email })
        if(existinguserEmail){
            return res.status(404).json({ message: 'User already exist.'})
        }

        const existinguserPhone = await users.findOne({ phones })
        if(existinguserPhone){
            return res.status(404).json({ message: 'User already exist.'})
        }

        const newUser = await users.create({ name, DOB, email, phones})
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1hr'})
        res.status(200).json({ result: newUser, token})
    }catch(error){
        res.status(500).json('Something went wrong...')
    }
}

export const login = async(req, res) => {
    const { email, phones } = req.body;
    try{
        const existinguser = await users.findOne({ email })
        if(!existinguser){
            return res.status(404).json({ message: "User doesn't exist."})
        }
        

        if(phones === existinguser.phones)
        if(!phones){
            return res.status(400).json({ message: "Invalid Password or User"})
        }
        
        const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, process.env.JWT_SECRET, { expiresIn: '1hr'})
        res.status(200).json({ result: existinguser, token})
        
    }catch(error){
        res.status(500).json('Something went wrong...')
    }
}