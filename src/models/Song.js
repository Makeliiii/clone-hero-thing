import mongoose from 'mongoose'
const Schema = mongoose.Schema

const diffRegEx = /\bExpert\b|\bHard\b|\bNormal\b|\bEasy\b/g

const SongSchema = new Schema({
    Name: String,
    Artist: String,
    Album: String,
    Genre: String,
    Charter: String,
    Year: String,
    Playlist: String,
    lyrics: Boolean,
    modchart: Boolean,
    songlength: Number,
    favorite: {
        type: Boolean,
        default: false
    },
    highscore: {
        difficulty: {
            type: String,
            validate: {
                validator: (v) => {
                    return diffRegEx.test(v)
                },
                message: () => 'Difficulty can only be Expert, Hard, Normal, or Easy'
            }
        },
        score: Number,
        stars: {
            type: Number,
            validate: {
                validator: (v) => {
                    return v > -1 && v < 8
                }
            },
            message: () => 'The amount of stars can only be between 0 and 7'
        },
        accuracy: {
            type: Number,
            validate: {
                validator: (v) => {
                    return v > -1 && v < 100
                }
            },
            message: () => 'Accuracy can only be between 0% and 100%'
        },
        higheststreak: Number
    }
})

export default mongoose.model('Song', SongSchema, 'songs') 