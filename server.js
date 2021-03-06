const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const connection = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// app.get("/", (req, res) => {
//     connection.query('SELECT * FROM burger', (err, data) => {
//         console.table(data);
//     })
//     res.render("index", {name: "David"});
// });

const routes = require("./controllers/burgersController");

app.use(routes);


app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT);
});