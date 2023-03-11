import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    DOB: {type: Date, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    joinedOn: {type: Date, default: Date.now}
})

export default mongoose.model('User', userSchema)