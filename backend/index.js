const express = require('express');
const { apiRoute } = require('./src/api');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());


app.use("/api", apiRoute);

const port = process.env.PORT || 8080

mongoose.connect(process.env.MONGO_URL).then( ()  => {
    console.log("DataBase connected");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

).catch( (error) => {
    console.log("DB connection failed", error);
});