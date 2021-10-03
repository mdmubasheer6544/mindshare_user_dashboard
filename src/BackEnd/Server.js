const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./Connection/Connection");
const userRoute = require("./routes/users");

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use("/uploads", express.static("uploads"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/user", userRoute);

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server Listening port ${port}`);
  }
});
