//importing dependicie
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


//Exporting Database functions
const {
    createTable,
    addNewVisitor,
    listVisitors,
    viewVisitor,
    updateVisitor,
    deleteVisitor
} = require("./db");

//defining the express app
const app = express();

//read json files
app.use(express.json());

//serving a static file
app.use(express.static('/'));

//body parser
app.use(bodyParser.urlencoded({ extended: false }));


//Set static folder
app.get("/single-page-app", function (req, res) {
    res.sendFile(path.join(__dirname + "./../public/index.html"));
});

createTable();
// addNewVisitor();

app.post("/addNewVisitor", async function (req, res) {
    let name = req.body.visitor_name;
    let ass_name = req.body.assistant_name;
    let age = req.body.visitor_age;
    let date = req.body.date;
    let time = req.body.time;
    let comment = req.body.comment;

    const visitor = await addNewVisitor(name, ass_name, age, date, time, comment);
    res.status(200).send({
        status: 'ok',
        message: 'Visitor Added',
        visitor: visitor[0]
    });
    res.end();
});

// View(GET) all visitors
app.get("/view", async function (req, res) {
    res.send(await listVisitors());

    res.end();
});

// View(GET) of a specific object using a param in our path for the
app.get("/viewVisitor:id", async function (req, res) {

    let id = req.params.id;
    res.send(await viewVisitor(id));
    res.end;
});

// Update(PATCH) a visitor using using a param in our path for the
app.patch("/updateVisitor:id", async function (req, res) {
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
app.delete("/delete:id", async function (req, res) {
    res.send(await deleteVisitor(req.params.id));

    res.end();
});

const port = 3005;
app.listen(port);

console.log(`Server connected to port: ${port}`);


module.exports = port;