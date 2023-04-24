const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/route");

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/LizInventory')
  .then(() => console.log('Connected!'));

app.use("/api", routes);
app.listen(3001, () => {
  console.log("running at port 3001");
});
