import formatDatePlugin from '../utils/formatDatePlugin.js';
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

// Formatando data
taskSchema.plugin(formatDatePlugin);

export const Task = mongoose.model('Task', taskSchema);