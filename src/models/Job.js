import { Schema } from "mongoose";

export const JobSchema = new Schema({
  title: {type: String, maxLength: 25, required: true},
  wage: {type: Number, required: true},
  requirements: {type: String, maxLength: 1000, required: true},
  description: {type: String, maxLength: 1000},
}, {timestamps: true,
  toJSON: {
      virtuals: true}})
