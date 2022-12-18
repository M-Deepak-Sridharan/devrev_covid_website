const express = require("express");
const cors = require("cors");
const userControler = require("./controller/userController");
const vaccinationControler = require("./controller/vaccinationController");
const bookVaccine = require("./controller/bookVaccine");
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
  console.log(`Server is running on port 5000`);
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

app.post("/login", userControler.signUp);
app.post("/addVaccinationCentre", vaccinationControler.createCentre);

app.put("/bookVaccination", bookVaccine.bookVaccination);

app.get("/getDoseDetails", vaccinationControler.getDoseDetails);
