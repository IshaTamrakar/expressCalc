const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({ extented: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/index.html", function (req, res) {
//   res.send("it is working");
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var num = num1 + num2;
  res.send("The sum of " + num1 + " and " + num2 + " is " + num);
});

app.listen(3000, function (req, res) {
  console.log("Server running on port 3000");
});
