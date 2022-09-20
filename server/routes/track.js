module.exports = app => {
    var router = require("express").Router();
    const TracksController = require("../controllers/track");

    router.get("/", TracksController.findTracks);
    router.get("/:id", TracksController.getTrack);
    
    app.use('/api/tracks', router);
};