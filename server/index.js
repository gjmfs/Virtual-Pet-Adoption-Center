/* importing necessasary packages */
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

/* importing routes */

const petRouter = require("./routes/petRoutes");

/* initializing app instance */
const app = express();

/* cors setup */
app.use(cors());

/* accepting request from client */
app.use(express.json());

/* test get method */
app.get("/", (req, res) => {
  res.json({ data: "response" });
});

/* using routes */
app.use("/pets", petRouter);

mongoose.connect(process.env.mongoDB).then(() => {
  app.listen(process.env.port, () => {
    console.log(`server listening on port no:${process.env.port}`);
  });
});
