import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`App listening on port: ${port}`))