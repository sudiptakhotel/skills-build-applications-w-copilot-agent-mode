import express from 'express'
import { connectDatabase } from './config/database'
import usersRouter from './routes/users'
import teamsRouter from './routes/teams'
import activitiesRouter from './routes/activity'
import leaderboardRouter from './routes/leaderboard'
import workoutsRouter from './routes/workouts'

const app = express()
const PORT = 8000
const CODESPACE_NAME = process.env.CODESPACE_NAME
const apiHost = CODESPACE_NAME ? `https://${CODESPACE_NAME}-8000.githubpreview.dev` : `http://localhost:${PORT}`

app.use(express.json())
app.use('/api/users', usersRouter)
app.use('/api/teams', teamsRouter)
app.use('/api/activities', activitiesRouter)
app.use('/api/leaderboard', leaderboardRouter)
app.use('/api/workouts', workoutsRouter)

connectDatabase()
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server listening on ${apiHost}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  })
