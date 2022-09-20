const { sendSuccessResponse, sendErrorResponse } = require('../utils/sendResponse');
const DeezerApi = require("../services/deezer")

const deezer = new DeezerApi()

const getArtist = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await deezer.getArtist(id)
        if (data) {
            return sendSuccessResponse(res, 200, data)
        }
        sendErrorResponse(res, 404, "Not Found")
    } catch (error) {
        sendErrorResponse(res, 500, "Error retrieving artist", error)
    }

};

const findArtists = async (req, res) => {
    try {
        const { q } = req.query;
        const {data} = await deezer.findArtists(q)
        if (data) {
            return sendSuccessResponse(res, 200, data)
        }
        sendErrorResponse(res, 404, "Not Found")

    } catch (error) {
        sendErrorResponse(res, 500, "Error retrieving artists", error)
    }

};

module.exports = {
    getArtist,
    findArtists,
}
