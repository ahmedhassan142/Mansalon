import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/lib/models/Booking';

// Get single booking by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    // ✅ FIX: Await the params first to get the actual values
    const { id } = await params;
    
    // ✅ Now use the resolved id
    const booking = await Booking.findById(id);
    
    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error('Get booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
// Update booking
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ✅ Changed to Promise
) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    // ✅ FIX: Await params first
    const { id } = await params;
    
    const booking = await Booking.findById(id); // ✅ Use resolved id
    
    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    // Update allowed fields
    const allowedUpdates = ['status', 'paymentStatus', 'specialRequests', 'barberId'];
    const updates: any = {};
    
    allowedUpdates.forEach(field => {
      if (body[field] !== undefined) {
        updates[field] = body[field];
      }
    });

    const updatedBooking = await Booking.findByIdAndUpdate(
      id, // ✅ Use resolved id
      updates,
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      message: 'Booking updated successfully',
      booking: updatedBooking
    });
  } catch (error: any) {
    console.error('Update booking error:', error);
    
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

// Delete booking
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ✅ Changed to Promise
) {
  try {
    await connectDB();
    
    // ✅ FIX: Await params first
    const { id } = await params;
    
    const booking = await Booking.findById(id); // ✅ Use resolved id
    
    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    await Booking.findByIdAndDelete(id); // ✅ Use resolved id

    return NextResponse.json({
      message: 'Booking deleted successfully'
    });
  } catch (error) {
    console.error('Delete booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}