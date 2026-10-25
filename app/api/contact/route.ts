import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // In production, integrate with SendGrid, Resend, or database
    console.log('[CeloraIT Inquiry Received]:', { name, email, service, budget, message, timestamp: new Date().toISOString() });

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully. Our team will contact you within 24 hours.'
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
