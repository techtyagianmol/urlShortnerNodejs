const express = require('express');
const path = require("path")
const dotenv=require('dotenv');
dotenv.config();
const {connectToMongoDB} = require("./connect");
const urlRoute = require("./routes/url");
const staticRoute = require('./routes/staticRouter')



const  app = express();
const PORT = 8001;

connectToMongoDB(`${process.env.MONGODB_URI}`).then(()=> console.log('mongodb connected'))

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use("/url", urlRoute);


app.use("/", staticRoute);







app.listen(PORT,'0.0.0.0',() => console.log(`server started at PORT:${PORT}`))




