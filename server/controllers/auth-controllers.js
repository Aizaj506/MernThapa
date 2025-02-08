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
        res.status(200).send("Welcome to Register page.")
    } catch (error) {
        console.error(error)
    }
}

module.exports = { home , register}