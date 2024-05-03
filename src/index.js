const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoutes")
const astrologerRoutes = require("./routes/astrologerRoutes")
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//mongoDb connection
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); // Exit the application if unable to connect to MongoDB
});

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin:"*",
    credentials : true
}))



app.get("/",(req,res) => {
    res.send("server running base endpoint!")
})

//Routes
app.use('/api/users', userRoutes);
app.use('/api/astrologers', astrologerRoutes);

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})