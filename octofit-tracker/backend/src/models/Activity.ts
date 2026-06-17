import { Schema, model, Types } from 'mongoose'

const activitySchema = new Schema(
  {
    name: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    user: { type: Types.ObjectId, ref: 'User' },
    team: { type: Types.ObjectId, ref: 'Team' },
    category: { type: String, default: 'cardio' }
  },
  { timestamps: true }
)

export default model('Activity', activitySchema)
