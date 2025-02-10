const mongoose  = require('mongoose')

const URI = "mongodb+srv://dbAjaj:dbAjaj786@cluster0.slhaw.mongodb.net/";

const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error);
        process.exit(1);
    }
}

module.exports = connectDB;