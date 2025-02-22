const Service = require("../models/service-model");

//* Logic for fetching all services
const services = async (req, res) => {
    try {
        const response = await Service.find();

        if (!response || response.length === 0) {
            return res.status(404).json({ message: "No services found" });
        }

        res.status(200).json({ services: response });
    } catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = services;
