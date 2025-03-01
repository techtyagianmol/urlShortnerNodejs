const express = require('express');
const {handleGenerateNewShortURL, handleGetURL} = require('../controllers/url');
const router = express.Router();


router.post("/", handleGenerateNewShortURL);

router.get("/:shortId", handleGetURL);

module.exports = router;