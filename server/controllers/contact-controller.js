const Contact = require("../models/contact-model")


//*````````````````````````````````
//Logic for Contact Form
//*````````````````````````````````
const contactForm = async (req, res) => {
    console.log("Hello from contact")
    try {
        console.log(req.body)
        const { name, email, message } = req.body;

        // Save contact data to database
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ message: "Your message has been received. We'll get back to you soon!" });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
        // next(error)
    }

}

module.exports = contactForm;