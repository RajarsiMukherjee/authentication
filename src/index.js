const express = require("express");
const cors = require("cors");

const connect = require("./configs/db")

const dotenv = require("dotenv");
const app = express();
app.use(express.json());

let port = process.env.PORT || 2345;


app.use(cors());

const { register, login } = require("./controllers/user.controller");

// register
app.post("/register", register);
// .login
app.post("/login", login);


app.listen(port, async (req, res) => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});