const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/empl_model.js')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/employee"

mongoose.connect(mongoURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', (req, res)=> {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/login', (req, res)=> {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user =>{
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("Password Incorrect")
            }
        } else {
            res.json("No Record Existed !!")
        }
    })
})

app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.listen(3001, '0.0.0.0', () =>{
    console.log("Server Is Running");
})
