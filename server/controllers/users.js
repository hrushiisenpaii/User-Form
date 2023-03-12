import mongoose from "mongoose";
import User from "../models/auth.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    const allUserDetails = [];
    allUsers.forEach((user) => {
      allUserDetails.push({
        _id: user._id,
        name: user.name,
        email: user.email,
        DOB: user.DOB,
        phones: user.phones,
        joinedOn: user.joinedOn,
      });
    });
    res.status(200).json(allUserDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}