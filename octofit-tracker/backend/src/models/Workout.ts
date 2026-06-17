import { Schema, model, Types } from 'mongoose'

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    durationMinutes: { type: Number, required: true },
    intensity: { type: String, default: 'medium' },
    user: { type: Types.ObjectId, ref: 'User' },
    team: { type: Types.ObjectId, ref: 'Team' }
  },
  { timestamps: true }
)

export default model('Workout', workoutSchema)
