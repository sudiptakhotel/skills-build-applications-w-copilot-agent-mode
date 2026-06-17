import express from 'express'
import mongoose from 'mongoose'
import activityRouter from './routes/activity'

const app = express()
const PORT = 8000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit-tracker'

app.use(express.json())
app.use('/api/activity', activityRouter)

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server listening on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  })
