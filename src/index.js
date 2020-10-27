import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

// env vars
const port = process.env.PORT || 8000
const db = process.env.DB || 'mongodb://localhost:27017/clonehero'

// cors
app.use(cors)

// body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// server and mongodb connection
app.listen(port, () => console.log(`App listening on port: ${port}`))
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('MongoDB connection.'))