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
        console.log(req.body);
        res.status(200).json({message: req.body})
    } catch (error) {
        console.error(error)
    }
}

module.exports = { home , register}