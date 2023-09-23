import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

//Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//connection with mysql Database
const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
});

connection.connect(function(err) {
    if (err) {
        console.log("Error in connection");
    } else {
        console.log("Connected");
    }
});

//Port listening
app.listen(8081, () =>(
    console.log("Listening at port: 8081")
));