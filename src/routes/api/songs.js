import express from 'express'
const router = express.Router()

// song model
import Song from '../../models/Song'

// ROUTE GET /api/songs
// get all songs in the database
router.get('/', (req, res) => {
    Song.find()
        .then(songs => {
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

// ROUTE GET /api/songs/:name
// get song by song name
router.get('/:name', (req, res) => {
    Song.find({ Name: req.params.name })
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

export default router