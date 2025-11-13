import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/lib/models/Booking';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    // Get all bookings for the specified date
    const bookings = await Booking.find({
      appointmentDate: new Date(date),
      status: { $in: ['pending', 'confirmed'] }
    }).select('appointmentTime duration');

    // Define available time slots
    const timeSlots = [
      '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
      '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
      '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
      '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
      '05:00 PM', '05:30 PM'
    ];

    // Filter out booked slots
    const bookedSlots = bookings.map(booking => booking.appointmentTime);
    const availableSlots = timeSlots.filter(slot => !bookedSlots.includes(slot));

    return NextResponse.json({
      date,
      availableSlots,
      bookedSlots,
      totalAvailable: availableSlots.length
    });
  } catch (error) {
    console.error('Get available slots error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}