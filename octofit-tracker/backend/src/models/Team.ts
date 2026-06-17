import { Schema, model, Types } from 'mongoose'

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    members: [{ type: Types.ObjectId, ref: 'User' }],
    goal: { type: String, default: '' }
  },
  { timestamps: true }
)

export default model('Team', teamSchema)
