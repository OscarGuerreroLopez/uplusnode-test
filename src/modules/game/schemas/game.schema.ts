import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
  called_at: {
    type: Date,
    default: Date.now,
  },
});
