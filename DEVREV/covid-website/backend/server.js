const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// require('dotenv').config();

const app = express();

// app.use(cors());
app.use(express.json());

const mongoUrl =
  "mongodb+srv://deepak:deepak1234@cluster0.hx0fmph.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.listen(5000, () => {
  console.log("Server is running on port :${port}");
});

app.post("/post", async (req, res) => {
  console.log(req.body);
  const { data } = req.body;
  try {
    if (data == "deepak") {
      res.send({ status: "ok" });
    } else {
      res.send({ status: "User not found" });
    }
  } catch (error) {
    res.send({ status: "Something went wrong try again " });
  }
});
