import { Schema, model } from 'mongoose'

const activitySchema = new Schema(
  {
    name: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
)

export default model('Activity', activitySchema)
