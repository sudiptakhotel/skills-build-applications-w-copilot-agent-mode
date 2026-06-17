import mongoose from 'mongoose'
import User from '../models/User'
import Team from '../models/Team'
import Activity from '../models/Activity'
import Workout from '../models/Workout'
import Leaderboard from '../models/Leaderboard'

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db'

async function seed() {
  console.log('Seed the octofit_db database with test data')

  await mongoose.connect(MONGO_URI)
  console.log('Connected to MongoDB for seeding')

  await Promise.all([
    Activity.deleteMany({}),
    Workout.deleteMany({}),
    Leaderboard.deleteMany({}),
    Team.deleteMany({}),
    User.deleteMany({})
  ])

  const users = await User.create([
    { name: 'Ava Chen', email: 'ava.chen@octofit.com', role: 'member' },
    { name: 'Marcus Reid', email: 'marcus.reid@octofit.com', role: 'coach' },
    { name: 'Sofia Patel', email: 'sofia.patel@octofit.com', role: 'member' }
  ])

  const teams = await Team.create([
    { name: 'Ocean Striders', goal: 'Run 100 miles this month', members: [users[0]._id, users[2]._id] },
    { name: 'Peak Performers', goal: 'Complete 5 HIIT workouts weekly', members: [users[1]._id] }
  ])

  const activities = await Activity.create([
    {
      name: 'Morning Run',
      durationMinutes: 42,
      caloriesBurned: 520,
      date: new Date('2026-06-14T07:30:00Z'),
      user: users[0]._id,
      team: teams[0]._id,
      category: 'cardio'
    },
    {
      name: 'Weight Training',
      durationMinutes: 58,
      caloriesBurned: 610,
      date: new Date('2026-06-15T18:00:00Z'),
      user: users[2]._id,
      team: teams[0]._id,
      category: 'strength'
    }
  ])

  const workouts = await Workout.create([
    {
      title: 'Core Crusher',
      description: 'A fast-paced core and stability routine',
      durationMinutes: 30,
      intensity: 'high',
      user: users[0]._id,
      team: teams[0]._id
    },
    {
      title: 'Recovery Flow',
      description: 'Light mobility and stretching session',
      durationMinutes: 25,
      intensity: 'low',
      user: users[2]._id,
      team: teams[0]._id
    }
  ])

  await Leaderboard.create([
    { user: users[0]._id, team: teams[0]._id, score: 1330, rank: 1, category: 'weekly' },
    { user: users[2]._id, team: teams[0]._id, score: 1180, rank: 2, category: 'weekly' }
  ])

  console.log('Seed data created for users, teams, activities, workouts, and leaderboard')
  await mongoose.disconnect()
  console.log('Disconnected from MongoDB after seeding')
}

seed().catch((error) => {
  console.error('Seeding failed:', error)
  process.exit(1)
})
