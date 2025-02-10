const User = require("../models/user-model");

// Home Logic
const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the world best Mern Series by Thapa")
    } catch (error) {
        console.error(error)
    }
}

//Logic for Registration
const register = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        console.log(req.body);

        // Check if user already exists
        let userExists = await User.findOne({email:email});
        if(userExists){
            return res.status(400).json({message: 'User Already Exists'})
        }

        // Hash the password. Step 1
        // const saltRound = 10;
        // const hashPassword = await bcrypt.hash(password, saltRound);
        // console.log(hashPassword)

        // Create new user
        newUser = new User({name, phone, email, password});
        newUser.save();

        res.status(201).json({ message: 'User registered successfully', newUser })
    } catch (error) {
        console.error(error)
    }
}

module.exports = { home, register }