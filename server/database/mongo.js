const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
const dbName = process.env.DB_NAME;

exports.connectMongoDB = async () => {

    await mongoose.connect(`${dbUrl}${dbName}`, () => {
    console.log("Connected to the database")
    },
    e => {
        console.log("Some error : ", e)
    });

}

