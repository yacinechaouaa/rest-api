const express = require("express");
const app = express();
const connect = require("./config/key");
const User = require("./modal/users");
// connection to our data base
connect();
const port = 3000;
// listenning to our port
app.listen(port, () => {
  console.log(` 
  is listening at http://localhost:${port}`);
});
// routes
// geting all users :
app.get("/getuser", (req, res) => {
  User.find()
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});
// add new user
app.post("/adduser", (req, res) => {
  const { name, phone, email } = req.body;
  const newUser = new User({
    name,
    phone,
    email,
  });
  newUser
    .save()
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});
// remove user :
app.delete("/deleteuser/:_id", (req, res) => {
  const { _id } = req.params;
  User.deleteOne({ _id })
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});
// update user :
app.put("updateUser/:_id", (req, res) => {
  const { _id } = req.params;
  const { name, phone, email } = req.body;
  User.findByIdAndUpdate({ _id }, { $set: { name, phone, email } })
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});
