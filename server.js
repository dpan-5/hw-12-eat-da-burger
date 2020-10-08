const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", (req, res) => {
    res.render("index");
})


app.get("/api/config", (req, res) => {
    res.json({success: true});
})

app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT);
});