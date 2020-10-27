import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

// env vars
const port = process.env.PORT
const db = process.env.DB

// cors
app.use(cors())

// body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// import routes
import songs from './routes/api/songs'

// serve routes
app.use('/api/songs', songs)

// server and mongodb connection
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('MongoDB connection.'))
app.listen(port, () => console.log(`App listening on port: ${port}`))