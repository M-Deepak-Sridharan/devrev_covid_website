const express = require("express");
const cors = require("cors");

// require('dotenv').config();

const app = express();

// app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server is running on port :${port}");
});

app.post("/post", async (req, res) => {
  console.log(req.body);
  const { data } = req.body;
  try {
    if (req.data == "deepak") {
      res.send({ status: "ok" });
    } else {
      res.send({ status: "Sser not found" });
    }
  } catch (error) {
    res.send({ status: "error" });
  }
});
