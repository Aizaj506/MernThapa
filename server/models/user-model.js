const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    phone: {
        type: Number,
        required: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    isAdmin: {
        type: String,
        default: false,
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
})

// Hash password before saving to DB
userSchema.pre("save", async function (next) {
    const user = this;
    
    //If Password is not modified
    if(!user.isModified("password")){
        return next()
    }

    //If Password is Modified.
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashPassword;
    } catch (error) {
        next(error)
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;