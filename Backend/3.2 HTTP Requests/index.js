import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("<h1> Get Request <h1/>");
});
app.get("/contact", (req, res) => {
    res.send("<h1> Contact <h1/><p>No: 9663277575</p>");
});
app.get("/about", (req, res) => {
    res.send("<h1> About me <h1><p> Hi, I am Ritesh</p>");
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});