import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/lib/models/Booking';
import Service from '@/lib/models/Service';

// Create new booking
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    const {
      customerName,
      customerEmail,
      customerPhone,
      serviceType,
      serviceId,
      barberId,
      appointmentDate,
      appointmentTime,
      duration,
      price,
      specialRequests
    } = body;

    // Validation
    if (!customerName || !customerEmail || !customerPhone || !serviceType || !serviceId || !appointmentDate || !appointmentTime || !duration || !price) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Check if service exists and is active
    const service = await Service.findById(serviceId);
    if (!service || !service.isActive) {
      return NextResponse.json(
        { error: 'Selected service is not available' },
        { status: 400 }
      );
    }

    // Check for booking conflicts (same date and time)
    const existingBooking = await Booking.findOne({
      appointmentDate: new Date(appointmentDate),
      appointmentTime,
      status: { $in: ['pending', 'confirmed'] }
    });

    if (existingBooking) {
      return NextResponse.json(
        { error: 'This time slot is already booked. Please choose another time.' },
        { status: 409 }
      );
    }

    // Create new booking
    const booking = new Booking({
      customerName,
      customerEmail,
      customerPhone,
      serviceType,
      serviceId,
      barberId: barberId || null,
      appointmentDate: new Date(appointmentDate),
      appointmentTime,
      duration,
      price,
      specialRequests: specialRequests || '',
      status: 'pending',
      paymentStatus: 'pending'
    });

    await booking.save();

    // In production, you would:
    // 1. Send confirmation email to customer
    // 2. Send notification to admin
    // 3. Integrate with payment gateway

    return NextResponse.json(
      { 
        message: 'Booking created successfully! We will confirm your appointment shortly.',
        booking: {
          id: booking._id,
          customerName: booking.customerName,
          serviceType: booking.serviceType,
          appointmentDate: booking.appointmentDate,
          appointmentTime: booking.appointmentTime,
          status: booking.status
        }
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Booking creation error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Get all bookings (with filtering and pagination)
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const date = searchParams.get('date');
    const email = searchParams.get('email');

    const query: any = {};
    
    if (status && status !== 'all') {
      query.status = status;
    }
    
    if (date) {
      query.appointmentDate = new Date(date);
    }
    
    if (email) {
      query.customerEmail = email.toLowerCase();
    }

    const skip = (page - 1) * limit;

    const bookings = await Booking.find(query)
      .sort({ appointmentDate: 1, appointmentTime: 1 })
      .skip(skip)
      .limit(limit)
      .select('-__v');

    const total = await Booking.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      bookings,
      pagination: {
        currentPage: page,
        totalPages,
        totalBookings: total,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    console.error('Get bookings error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}