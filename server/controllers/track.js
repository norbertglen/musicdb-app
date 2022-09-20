const { sendSuccessResponse, sendErrorResponse } = require('../utils/sendResponse');
const DeezerApi = require("../services/deezer")

const deezer = new DeezerApi()

const getTrack = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await deezer.getTrack(id)
        if (data) {
            return sendSuccessResponse(res, 200, data)
        }
        sendErrorResponse(res, 404, "Not Found")
    } catch (error) {
        sendErrorResponse(res, 500, "Error retrieving track")
    }

};

const findTracks = async (req, res) => {
    try {
        const {q, label, artist, album, track } = req.query;
        const { data } = await deezer.findTracks(
            q ?? {
                ...(label && { label }),
                ...(artist && { artist }),
                ...(album && { album }),
                ...(track && { track })
            }
        )
        if (data) {
            return sendSuccessResponse(res, 200, data)
        }
        sendErrorResponse(res, 404, "Not Found")

    } catch (error) {
        sendErrorResponse(res, 500, "Error retrieving tracks", error)
    }

};

module.exports = {
    getTrack,
    findTracks,
}
