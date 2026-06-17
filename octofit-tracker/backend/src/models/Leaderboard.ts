import { Schema, model, Types } from 'mongoose'

const leaderboardSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: 'User' },
    team: { type: Types.ObjectId, ref: 'Team' },
    score: { type: Number, required: true },
    rank: { type: Number, required: true },
    category: { type: String, default: 'overall' }
  },
  { timestamps: true }
)

export default model('Leaderboard', leaderboardSchema)
