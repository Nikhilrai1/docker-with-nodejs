const express = require("express");

const app = express();
const port = 5500;


app.get("/",(req,res) => {

    res.status(200).json([
        {
            id: 1,
            name: "Nikhil Rai (v2)",
            age: 20
        },
        {
            id: 2,
            name: "Json Rai (v2)",
            age: 19
        },
        {
            id: 3,
            name: "Jk (v2)",
            age: 19
        },
        {
            id: 4,
            name: "Nikhil Chamling (v2)",
            age: 19
        },
        
    ])
})


app.listen(port,() => {
    console.log(`server started at http://localhost:${port}`)
})
