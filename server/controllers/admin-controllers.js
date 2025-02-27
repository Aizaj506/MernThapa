const Contact = require("../models/contact-model");
const User = require("../models/user-model");

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || !users.length) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        next(error)
    }
}

const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || !contacts.length) {
            return res.status(404).json({ message: "No Contact Found!" });
        }
        res.status(200).json(contacts);
    } catch (error) {
        console.error("Error fetching Contacts:", error);
        next(error);
    }
}

const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;

        const userToDelete = await User.findById(id);

        if (!userToDelete) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if user is an admin 
        if (userToDelete.isAdmin === true) {
            return res.status(403).json({ message: "Admin user cannot be deleted" });
        }

        // Agar admin nahi hai toh delete karo
        await User.findByIdAndDelete(id);

        res.status(200).json({ message: "User deleted successfully", userToDelete });
    } catch (error) {
        next(error)
    }
}

const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id,{password:0});
        console.log("Single User",user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}

const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;
        // console.log(updatedUserData)
        const updatedUser = await User.findByIdAndUpdate(id,{$set:updatedUserData},{new:true, runValidators:true});
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById };