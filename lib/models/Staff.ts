import mongoose, { Schema, Document } from 'mongoose';

export interface IStaff extends Document {
  name: string;
  role: string;
  bio: string;
  image: string;
  experience: number;
  specialties: string[];
  isActive: boolean;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  joinedAt: Date;
}

const StaffSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Staff name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    trim: true,
    maxlength: [100, 'Role cannot be more than 100 characters']
  },
  bio: {
    type: String,
    required: [true, 'Bio is required'],
    trim: true,
    maxlength: [500, 'Bio cannot be more than 500 characters']
  },
  image: {
    type: String,
    default: '/images/staff/default.jpg'
  },
  experience: {
    type: Number,
    required: [true, 'Experience is required'],
    min: [0, 'Experience cannot be negative']
  },
  specialties: [{
    type: String,
    trim: true
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  socialLinks: {
    instagram: {
      type: String,
      trim: true
    },
    facebook: {
      type: String,
      trim: true
    },
    twitter: {
      type: String,
      trim: true
    }
  },
  joinedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.models.Staff || mongoose.model<IStaff>('Staff', StaffSchema);