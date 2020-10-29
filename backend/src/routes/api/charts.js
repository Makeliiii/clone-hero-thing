import express from 'express'
const router = express.Router()

// song model
import Song from '../../models/Song'

// ROUTE GET /api/charts
// get all charts in the database
router.get('/', (req, res) => {
    Song.find()
        .then(songs => {
            if (!songs.length) {
                res.status(404).json({
                    error: 'Couldn\'t find songs',
                    status: 'Songs not found',
                    success: false
                })
            }

            return res.status(200).json({
                songs,
                status: 'Songs found',
                success: true
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(404).json({
                error: err,
                status: 'Songs not found',
                success: false
            })
        })
})

// ROUTE GET /api/charts/:name
// get chart by song name
router.get('/:name', (req, res) => {
    const name = req.params.name

    Song.find({ Name: { $regex: new RegExp(name, 'i') } })
        .then(song => {
            if (!song.length) {
                return res.status(404).json({
                    error: 'Couldn\'t find song',
                    status: 'Song not found',
                    success: false
                })
            }

            return res.status(200).json({
                song,
                status: 'Song found',
                success: true
            })
        })
        .catch(err => {
            return res.status(404).json({
                error: err,
                status: 'Song not found',
                success: false
            })
        })
})

// ROUTE GET /api/charts/albums/:album
// get charts by the album the song is included in
router.get('/albums/:album', (req, res) => {
    const album = req.params.album

    Song.find({ Album: { $regex: new RegExp(album, 'i') } })
        .then(songs => {
            if (!songs.length) {
                return res.status(404).json({
                    error: 'Couldn\'t find song',
                    status: 'Songs not found',
                    success: false
                })
            }

            return res.status(200).json({
                songs,
                status: 'Songs found',
                success: true
            })
        })
        .catch(err => {
            return res.status(404).json({
                error: err,
                status: 'Songs not found',
                success: false
            })
        })
})

// ROUTE GET /api/charts/artists/:artist
// get charts by band
router.get('/artists/:artist', (req, res) => {
    const artist = req.params.artist

    Song.find({ Artist: { $regex: new RegExp(artist, 'i') } })
        .then(songs => {
            if (!songs.length) {
                return res.status(404).json({
                    error: 'Couldn\'t find song',
                    status: 'Songs not found',
                    success: false
                })
            }

            return res.status(200).json({
                songs,
                status: 'Songs found',
                success: true
            })
        })
        .catch(err => {
            return res.status(404).json({
                error: err,
                status: 'Songs not found',
                success: false
            })
        })
})

// ROUTE GET /api/charts/charters/:charter
// get charts by charter
router.get('/charters/:charter', (req, res) => {
    const charter = req.params.charter

    Song.find({ Charter: { $regex: new RegExp(charter, 'i') } })
        .then(songs => {
            if (!songs.length) {
                return res.status(404).json({
                    error: 'Couldn\'t find song',
                    status: 'Songs not found',
                    success: false
                })
            }

            return res.status(200).json({
                songs,
                status: 'Songs found',
                success: true
            })
        })
        .catch(err => {
            return res.status(404).json({
                error: err,
                status: 'Songs not found',
                success: false
            })
        })
})

// ROUTE GET /api/charts/genres/:genre
// get charts by genre
router.get('/genres/:genre', (req, res) => {
    const genre = req.params.genre

    Song.find({ Genre: { $regex: new RegExp(genre, 'i') } })
        .then(songs => {
            if (!songs.length) {
                return res.status(404).json({
                    error: 'Couldn\'t find song',
                    status: 'Songs not found',
                    success: false
                })
            }

            return res.status(200).json({
                songs,
                status: 'Songs found',
                success: true
            })
        })
        .catch(err => {
            return res.status(404).json({
                error: err,
                status: 'Songs not found',
                success: false
            })
        })
})

export default router