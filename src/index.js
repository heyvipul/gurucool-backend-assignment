const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin:"*",
    credentials : true
}))



app.get("/",(req,res) => {
    res.send("server running base endpoint!")
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})