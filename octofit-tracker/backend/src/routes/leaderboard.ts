import { Router } from 'express'
import Leaderboard from '../models/Leaderboard'

const router = Router()

router.get('/', async (req, res) => {
  const leaderboard = await Leaderboard.find()
    .sort({ rank: 1 })
    .limit(20)
    .populate('user', 'name email')
    .populate('team', 'name')
    .lean()

  res.json(leaderboard)
})

export default router
