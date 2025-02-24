const adminMiddleware = async (req, res, next) => {
    try {
        console.log("User Data:", req.user);
        if (!req.user) {
            console.log("Access Denied: No user found in request.");
            return res.status(401).json({ message: "Unauthorized: No user found." });
        }

        // Ensure isAdmin is a boolean
        const isAdmin = req.user.isAdmin === true || req.user.isAdmin === 'true';
        console.log("Is Admin : ",isAdmin);
        if (!isAdmin) {
            console.log("Access Denied: User is not an Admin.");
            return res.status(403).json({ message: "Access Denied: User is not an Admin." });
        }

        // If user is an Admin, proceed to the next middleware
        console.log("Access Granted: User is an Admin.");
        next();
    } catch (error) {
        console.error("Middleware Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = adminMiddleware;
