//importing dependicie
const {
  createTable,
  addNewVisitor,
  listVisitors,
  viewVisitor,
  updateVisitor,
  deleteVisitor
} = require("../javascript/db");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const pug = require("pug");

//defining the express app
const app = express();

//read json files
app.use(express.json());

//serving a static file
app.use("/", express.static(__dirname + "/"));

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//pug
app.set("view engine", "pug");

//Set static folder
app.get("/addNewVisitor", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

createTable();
// addNewVisitor();

app.post("/addNewVisitor", async function(req, res) {
  console.log(req.body.visitor_name);

  let name = req.body.visitor_name;
  let ass_name = req.body.assistant_name;
  let age = req.body.visitor_age;
  let date = req.body.date;
  let time = req.body.time;
  let comment = req.body.comment;

  res.send(await addNewVisitor(name, ass_name, age, date, time, comment));
  res.end();
});

// View(GET) all visitors
app.get("/view", async function(req, res) {
  res.send(await listVisitors());

  res.end();
});

// View(GET) of a specific object using a param in our path for the
app.get("/viewVisitor:id", async function(req, res) {
  // console.log(req.params.id)

  let id = req.params.id;
  res.send(await viewVisitor(id));
  res.end;
});

// Update(PATCH) a visitor using using a param in our path for the
app.patch("/updateVisitor:id", async function(req, res) {
  let name = req.body.visitor_name;
  let ass_name = req.body.assistant_name;
  let age = req.body.visitor_age;
  let date = req.body.date;
  let time = req.body.time;
  let comment = req.body.comment;

  res.send(
    await updateVisitor(req.params.id, name, ass_name, age, date, time, comment)
  );

  res.end();
});

// Delete a specific object using a param in our path for the
app.delete("/delete:id", async function(req, res) {
  res.send(await deleteVisitor(req.params.id));

  res.end();
});

// Delete all visitors
app.delete("/delete", async function(req, res) {});

const port = 3001;
app.listen(port);

console.log(`Server connected to port: ${port}`);

module.exports = port;
