const express = require('express');
const router = express.Router();
const path = require('path');
const URL = require('../models/url');

// const home = path.join("..","views","home.ejs");

router.get("/", async(req,res) => {
    const allURLs= await URL.find({})
    return res.render("home",{
        urls : allURLs
    });
});

module.exports = router;