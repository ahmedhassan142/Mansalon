import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Staff from '@/lib/models/Staff';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const activeOnly = searchParams.get('activeOnly') !== 'false';
    
    const query = activeOnly ? { isActive: true } : {};
    
    const staff = await Staff.find(query).sort({ experience: -1, name: 1 });
    
    return NextResponse.json(staff);
  } catch (error) {
    console.error('Get staff error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    // This would be protected in a real application
    const body = await request.json();
    
    const staff = new Staff(body);
    await staff.save();
    
    return NextResponse.json(
      { message: 'Staff member created successfully', staff },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create staff error:', error);
    
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