const shortid = require('shortid');
const URL =require('../models/url');



async function handleGenerateNewShortURL(req,res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required"})
     const shortID = shortid.generate();
     await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory:[],
     })
     return res.render("home",{ id: shortID});

}
async function handleGetURL(req,res) {
    const shortId = req.params.shortId
    const redirectURL = await URL.findOneAndUpdate({shortId},{
        $push:{
            visitHistory:{
                timestamp : Date.now()
            }
        }
    });
    res.redirect(redirectURL.redirectURL)
}

module.exports = {
    handleGenerateNewShortURL,handleGetURL 
};
