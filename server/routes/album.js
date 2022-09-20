module.exports = app => {
    var router = require("express").Router();
    const AlbumsController = require("../controllers/album");

    router.get("/", AlbumsController.findAlbums);
    router.get("/:id", AlbumsController.getAlbum);
    
    app.use('/api/albums', router);
};