import { startServer } from './server'

startServer().catch((error) => {
  console.error('MongoDB connection error:', error)
  process.exit(1)
})
