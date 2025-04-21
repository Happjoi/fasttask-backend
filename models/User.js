import formatDatePlugin from '../utils/formatDatePlugin.js';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, { timestamps: true });

// Formatando data
userSchema.plugin(formatDatePlugin);

export const User = mongoose.model('User', userSchema);