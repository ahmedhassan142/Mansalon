import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
  isActive: boolean;
  features: string[];
}

const ServiceSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'],
    trim: true,
    unique: true,
    maxlength: [100, 'Service name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  duration: {
    type: Number,
    required: [true, 'Duration is required'],
    min: [15, 'Duration must be at least 15 minutes']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Haircut', 'Beard', 'Coloring', 'Shave', 'Treatment', 'Package']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  features: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);