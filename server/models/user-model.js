const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    username: {
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
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    isAdmin: {
        type: Boolean,
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
    if (!user.isModified("password")) {
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
});

// Compare hashed password for login
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}
// Json Web Token (JWT)
/* 
    Tokens, such JWT's, are typically not stored in the database along woth other details of users. 
    Instead they are issue by the server during the authentication process and then stored ont client side.
    (e.g. in Cookies or Local Storage) for later use.
*/
userSchema.methods.generateAuthToken = async function () {
    try {
        return jwt.sign(
            { userId: this._id.toString(), email: this.email, isAdmin: this.isAdmin },
            process.env.JWT_SECRET_KEY,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )
    } catch (error) {
        console.error(error)
    }
}

const User = mongoose.model("User", userSchema);

module.exports = User;