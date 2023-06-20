const register = require('./register');
const express = require('express');
const pool = require('./dbConfig');
const bcrypt = require("bcrypt");

const hostname = '127.0.0.1';
const port = process.env.PORT||5000;
const cors=require("cors");
const app = express();
app.use(cors());
app.use(express.json());

//Here register is acting as modules...
app.post('/register',async(req,res) => {register.Register(req,res) });

app.listen(port,hostname, () => {
    console.log(`Here we go, Engines started at ${port}.`);

})


