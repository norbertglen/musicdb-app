var DeezerAPI = require('../deezer');
const test = require("unit.js")
var deezer = new DeezerAPI();

describe('Search feature', function () {

    it('should return tracks based on search text', (done) => {
        deezer.findTracks('eminem').then(({data}) => {
            console.log("found...", Object.keys(data).toString())
            data.data.forEach((d) => {
                test
                    .object(d)
                    .hasProperty('id')
                    .hasProperty('readable')
                    .hasProperty('title')
                    .hasProperty('title_short')
                    .hasProperty('title_version')
                    .hasProperty('link')
                    .hasProperty('duration')
                    .hasProperty('rank')
                    .hasProperty('explicit_lyrics')
                    .hasProperty('preview')
                    .hasProperty('artist')
                    .hasProperty('album');
            });
        })
            .catch(e => console.error(e))
            .finally(done);
    });

    it('should return tracks by artist name', (done) => {
        deezer.findTracks({ artist: 'eminem' }).then(({data}) => {
            data.data.forEach((d) => {
                test
                    .object(d)
                    .hasProperty('id')
                    .hasProperty('title')
                    .hasProperty('link')
                    .hasProperty('duration')
                    .hasProperty('rank')
                    .hasProperty('preview')
                    .hasProperty('artist')
                    .hasProperty('album');
            });
        })
            .catch(e => console.error(e))
            .finally(done);
    });

    it('should return tracks by album', (done) => {
        deezer.findTracks({ album: 'good things' }).then(({data}) => {
            data.data.forEach(function (d) {
                test
                    .object(d)
                    .hasProperty('id')
                    .hasProperty('readable')
                    .hasProperty('title')
                    .hasProperty('duration')
                    .hasProperty('rank')
                    .hasProperty('artist')
                    .hasProperty('album');
            });
        })
            .catch(e => console.error(e))
            .finally(done);
    });

    it('should return tracks by track name',  (done) => {
        deezer.findTracks({ track: 'i need a dollar' }).then( ({data}) => {
            data.data.forEach((d) => {
                test
                    .object(d)
                    .hasProperty('id')
                    .hasProperty('readable')
                    .hasProperty('title')
                    .hasProperty('duration')
                    .hasProperty('rank')
                    .hasProperty('artist')
                    .hasProperty('album');
            });
        })
            .catch(e => console.error(e))
            .finally(done);
    });

    it('should return tracks by label', (done) => {
        deezer.findTracks({ label: 'because music' }).then(({data}) => {
            data.data.forEach((d) => {
                test
                    .object(d)
                    .hasProperty('id')
                    .hasProperty('readable')
                    .hasProperty('title')
                    .hasProperty('duration')
                    .hasProperty('rank')
                    .hasProperty('artist')
                    .hasProperty('album');
            });
        })
            .catch(e => console.error(e))
            .finally(done);
    });

    it('should return albums', (done) => {
        deezer.findAlbums('Good Thing').then(({data}) => {
            data.data.forEach((d) => {
                test
                    .object(d)
                    .hasProperty('id')
                    .hasProperty('title')
                    .hasProperty('link')
                    .hasProperty('cover')
                    .hasProperty('tracklist')
                    .hasProperty('artist')
                    .hasProperty('type', 'album');
            });
        })
            .catch(e => console.error(e))
            .finally(done);
    });

    it('should query artists based on search text', (done) => {
        deezer.findArtists('Eminem').then(({data}) => {
            data.data.forEach((d) => {
                test
                    .object(d)
                    .hasProperty('id')
                    .hasProperty('name')
                    .hasProperty('link')
                    .hasProperty('picture')
                    .hasProperty('tracklist')
                    .hasProperty('type', 'artist');
            });
        })
            .catch(e => console.error(e))
            .finally(done);
    });
});

describe('Album', () => {
    it('Should get single album by id', (done) => {
        deezer.getAlbum(302127).then((res) => {
            const album = res.data
            test
                .object(album)
                .hasProperty('id', 302127)
                .hasProperty('title')

        })
            .catch(e => console.error(e))
            .finally(done);
    });
});

describe('Artist', () => {
    it('should get artist', (done) => {
        deezer.getArtist(27).then((res) => {
            const album = res.data
            test
                .object(album)
                .hasProperty('id', 27)
                .hasProperty('name')
                .hasProperty('link')
                .hasProperty('share')
                .hasProperty('picture')
                .hasProperty('nb_album')
                .hasProperty('nb_fan')
                .hasProperty('radio');
        })
            .catch(e => console.error(e))
            .finally(done);
    });
});
