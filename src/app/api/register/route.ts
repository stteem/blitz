import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Handle GET request
  return NextResponse.json({ message: 'GET request successful' });
}

export async function POST(request: Request) {
  const data = await request.json();
  // Handle POST request (e.g., process form data)
  console.log('Received data:', data);
  
  // Respond with a success message
  return NextResponse.json({ message: 'POST request successful' });
}
