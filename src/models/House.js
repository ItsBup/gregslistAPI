import { Schema } from "mongoose";

export const HouseSchema = new Schema({
  bedroom: {type: Number, min:0, max: 10, required: true},
  bathroom: {type: Number, min:0, max: 20, required: true},
  year: {type: Number, min: 1920, max: 2024, required: true},
  price: {type: Number, min: 0, required: true},
  description: {type: String, maxLength: 1000},
  imgUrl: {type: String, maxLength: 500, required: true, default: 'https://openseauserdata.com/files/eaf2fe0374f1ed75f11cc643305cfa6d.png'},
}, {
  timestamps: true,
  toJSON: {
      virtuals: true
  }
})
