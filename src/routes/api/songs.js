import express from 'express'
const router = express.Router()

// song model
import Song from '../../models/Song'

// ROUTE GET /api/songs
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

export default router