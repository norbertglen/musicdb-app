const { sendSuccessResponse, sendErrorResponse } = require('../utils/sendResponse');
const DeezerApi = require("../services/deezer")

const deezer = new DeezerApi()

const getAlbum = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await deezer.getAlbum(id)
        if (data) {
            return sendSuccessResponse(res, 200, data)
        }
        sendErrorResponse(res, 404, "Not Found")
    } catch (error) {
        sendErrorResponse(res, 500, "Error retrieving album")
    }

};

const findAlbums = async (req, res) => {
    try {
        const { q } = req.query;
        const { data } = await deezer.findAlbums(q)
        if (data) {
            return sendSuccessResponse(res, 200, data)
        }
        sendErrorResponse(res, 404, "Not Found")

    } catch (error) {
        sendErrorResponse(res, 500, "Error retrieving albums", error)
    }

};

module.exports = {
    getAlbum,
    findAlbums,
}
