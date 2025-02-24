const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        // console.log(token);
        if (!token) {
            return res.status(401).json({ message: "Unauthorized. Token not provided." });
        }

        // Extract token by removing 'Bearer '
        const jwtToken = token.replace('Bearer ', '').trim();

        // Verify token
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        // Find user in database (exclude password)
        const userData = await User.findOne({ email: isVerified.email }).select({password:0});

        if (!userData) {
            return res.status(404).json({ message: "User not found." });
        }

        req.user = userData;
        req.token = token;
        req.userId = userData._id;

        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Unauthorized. Token has expired." });
        }
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Unauthorized. Invalid token." });
        }

        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = authMiddleware;