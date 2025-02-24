const Contact = require("../models/contact-model");
const User = require("../models/user-model");

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({},{password:0});
        if (!users || !users.length) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        next(error)
    }
}

const getAllContacts = async(req, res, next) => {
    try {
        const contacts = await Contact.find();
        if(!contacts || !contacts.length){
            return res.status(404).json({message:"No Contact Found!"});
        }
        res.status(200).json(contacts);
    } catch (error) {
        console.error("Error fetching Contacts:", error);
        next(error);
    }
}

module.exports = {getAllUsers,getAllContacts};