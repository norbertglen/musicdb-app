const axios = require('axios')

const DeeverRequest = axios.create({
    baseURL: "https://api.deezer.com",
    timeout: 15000, // 15 seconds,
})

DeeverRequest.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response) {
            return Promise.reject(error.response.data)
        }
        if (error.request) {
            console.log(error.request)
            return Promise.reject(
                new Error('No response was received from the server')
            )
        }
        console.log('Error', error.message)

        return Promise.reject(error)
    }
)

class Deezer {
    constructor() {
    }
    getTrack(id) {
        return DeeverRequest.get(`/track/${id}`);
    }
    getAlbum(id) {
        return DeeverRequest.get(`/album/${id}`);
    }
    getArtist(id) {
        return DeeverRequest.get(`/artist/${id}`);
    }
    findTracks(options, index, order) {
        var url = '/search?q=';
        var query = '';
        if (typeof options === 'object') {
            for (var key in options) {
                query = query + key + ':"' + options[key] + '" ';
            }
        } else {
            query = options;
        }
        url = url + query;

        if (index !== 0)
            url = url + '&index=' + index;
        if (order)
            url = url + '&order=' + order;

        return DeeverRequest.get(url);
    }
    findAlbums(query, index) {
        var url = '/search/album?q=' + query;
        if (index !== 0)
            url = url + '&index=' + index;

        return DeeverRequest.get(url);
    }
    findArtists(query, index) {
        var url = '/search/artist?q=' + query;
        if (index !== 0)
            url = url + '&index=' + index;

        return DeeverRequest.get(url);
    }
}

module.exports = Deezer;