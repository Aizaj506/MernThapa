const User = require("../models/user-model");
const bcrypt = require('bcrypt');


// Home Logic
const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the world best Mern Series by Thapa")
    } catch (error) {
        console.error(error)
    }
}

//*````````````````````````````````
//Logic for Registration
//*````````````````````````````````
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        console.log(req.body);

        // Check if user already exists
        let userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(400).json({ message: 'User Already Exists' })
        }

        // Hash the password. Step 1
        // const saltRound = 10;
        // const hashPassword = await bcrypt.hash(password, saltRound);
        // console.log(hashPassword)

        // Create new user
        const newUser = new User({ username, phone, email, password });
        await newUser.save();

        // Generate JWT Tokens
        const token = await newUser.generateAuthToken();

        res.status(201).json({
            message: 'User registered successfully',
            user: newUser,
            token,
            userId: newUser._id.toString()
        });
    } catch (error) {
        // res.status(500).json({ message: 'Server error', error });
        next(error)
    }
}


//*````````````````````````````````
//Logic for Login
//*````````````````````````````````
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const existsUser = await User.findOne({ email });
        console.log(existsUser)
        if (!existsUser) {
            return res.status(400).json({ message: 'Invalid Email or Password' })
        }

        // Compare password
        // const isMatchPassword = await bcrypt.compare(password, existsUser.password);
        const isMatchPassword = await existsUser.matchPassword(password);
        if (!isMatchPassword) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = await existsUser.generateAuthToken();

        res.status(200).json({
            message: 'User Login successfully',
            user: existsUser,
            token,
            userId: existsUser._id.toString()
        });

    } catch (error) {
        // res.status(500).json({ message: 'Server error', error });
        next(error)
    }
}



module.exports = { home, register, login}