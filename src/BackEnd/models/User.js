const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  department: String,
  role: String,
  empId: String,
  firstName: String,
  lastName: String,
  joiningDate: Date,
  mobile: Number,
  email: String,
  userProf: String,
});
const User = mongoose.model("userDetail", UserSchema);

module.exports = User;
