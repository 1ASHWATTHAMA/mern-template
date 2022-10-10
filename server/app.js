require('dotenv').config()
const express = require('express')
const bodyParser = require("body-parser");

const userRoutes = require("./routes/authRoutes.js");

const app = express()
app.use(bodyParser.json());

const port = process.env.PORT

app.use("/user", userRoutes);

app.listen(port, ()=>{
    console.log(`started server on port ${port}`)
})


