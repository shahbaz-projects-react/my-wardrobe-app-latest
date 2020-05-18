const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const path = require("path");

const uri = keys.mongoURI;
mongoose.connect(`${uri}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB connection successful..."));

const app = express();

app.use(cors());
app.use(express.json());
app.get("", (req, res) => {
  res.status(200).send({ success: true });
});

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

const userRouter = require("./routes/user");
app.use("/users", userRouter);

//Serve static content if prod
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server is running at : ", port));
