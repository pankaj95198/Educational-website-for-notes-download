const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs')

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/content", (req, res) => {
    res.render("content");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/redirect", (req, res) => {
    const {url} = req.query;
    if(url){
        res.redirect(url);
    }else{
        res.redirect("/");
        alert("maybe url is wrong!!");
    }
})

app.get("*", (req, res) => {
    res.render("404page")
})

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})