import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required fields' },
        { status: 400 }
      );
    }

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
      status: 'new'
    });

    await contact.save();

    // In production, you would send an email notification here
    // await sendContactNotification(contact);

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully! We will get back to you soon.',
        contact: {
          id: contact._id,
          name: contact.name,
          email: contact.email
        }
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    
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

export async function GET() {
  try {
    await connectDB();
    
    // This would typically be protected in a real application
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    
    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Get contacts error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}