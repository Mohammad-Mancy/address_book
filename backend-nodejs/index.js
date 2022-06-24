require("dotenv").config();
const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")

const userRouter = require('./src/user');

const DB_CONNECT = process.env.DB_CONNECT || "";
mongoose.connect(
  DB_CONNECT,
  () => console.log('connected to db')
);

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);

// app.get('/',(req,res) =>{
//     res.send('hello world 22')
// });

app.listen(3000, () => console.log('Server running'));