const express = require("express");
const app = express();
app.use(express.json());
const Port = 3000;
app.get("/", (req, res) => {
    res.send({
        status: 200,
        message: "Home page",
        data: []
    });
})

app.get("/news", (req, res) => {
    res.send({
        status: 200,
        message: "news page",
        data: [{
            id: 1,
            title: "news1",
            description: "description1"
        },
        {
            id: 2,
            title: "news2",
            description: "description2"
        },]
    })
})

app.get("/news/:id", (req, res) => {
    console.log(req.params);
    res.send({
        status: res.statusCode,
        message: "news details",
        data: [{
            id: req.params.id,
            title: "news1",
            description: "description1"
        }]
    })
})
app.post("/news", (req, res) => {
    console.log(req.params);
    res.send({
        status: res.statusCode,
        message: "news created",
        data: {
            bodyData:[req.body],
            paramsData: [req.query]
        }
    })
})

app.listen(Port, () => {
    console.log("Server is running on port 3000");
})