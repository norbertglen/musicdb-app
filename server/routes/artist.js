module.exports = app => {
    var router = require("express").Router();
    const ArtistsController = require("../controllers/artist");

    router.get("/", ArtistsController.findArtists);
    router.get("/:id", ArtistsController.getArtist);
    
    app.use('/api/artists', router);
};