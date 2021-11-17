const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UserSchema = new schema({
  name: { type: String },
  email: { type: String },
  phone: { type: Number },
});

module.exports = User = mongoose.model("user", UserSchema);
