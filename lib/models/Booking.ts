import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceType: string;
  serviceId: string;
  barberId?: string;
  appointmentDate: Date;
  appointmentTime: string;
  duration: number;
  price: number;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema: Schema = new Schema({
  customerName: {
    type: String,
    required: [true, 'Customer name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  customerEmail: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  customerPhone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number cannot be more than 20 characters']
  },
  serviceType: {
    type: String,
    required: [true, 'Service type is required'],
    enum: ['Classic Haircut', 'Beard Grooming', 'Hair Coloring', 'Royal Shave', 'Hair Treatment', 'Complete Package']
  },
  serviceId: {
    type: String,
    required: [true, 'Service ID is required']
  },
  barberId: {
    type: String,
    default: null
  },
  appointmentDate: {
    type: Date,
    required: [true, 'Appointment date is required']
  },
  appointmentTime: {
    type: String,
    required: [true, 'Appointment time is required'],
    validate: {
      validator: function(time: string) {
        return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$/.test(time);
      },
      message: 'Invalid time format. Use format like "02:30 PM"'
    }
  },
  duration: {
    type: Number,
    required: [true, 'Duration is required'],
    min: [15, 'Duration must be at least 15 minutes'],
    max: [180, 'Duration cannot exceed 180 minutes']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  specialRequests: {
    type: String,
    maxlength: [500, 'Special requests cannot be more than 500 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled', 'no-show'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'refunded'],
    default: 'pending'
  }
}, {
  timestamps: true
});

// Index for efficient querying
BookingSchema.index({ appointmentDate: 1, appointmentTime: 1 });
BookingSchema.index({ customerEmail: 1 });
BookingSchema.index({ status: 1 });

export default mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);