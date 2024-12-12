import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/client';

// Initialize the Supabase client
const supabase = createClient();

export async function GET(request: Request) {
  // Handle GET request
  return NextResponse.json({ message: 'GET request successful' });
}

export async function POST(request: Request) {
  const user = await request.json();
  console.log('Received data:', user);

  // Sign up the user
  let { error: AuthError } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
  });

  // Check for sign-up error
  if (AuthError) {
    console.error('Error signing up:', AuthError);
    return NextResponse.json({ message: 'Failed to sign up' }, { status: 500 });
  }

  // Update user metadata
  const { data: newUser, error: updateError } = await supabase.auth.updateUser({
    data: {
      display_name: user.name,
    },
  });

  // Check for update error
  if (updateError) {
    console.error('Error updating user metadata:', updateError);
    return NextResponse.json({ message: 'Failed to update user metadata' }, { status: 500 });
  }

  
  const { data, error: countryError } = await supabase
  .from('country')
  .insert([
    { country_name: user.country, user_name: user.name },
  ])
  .select()

  if (countryError) {
    console.error('Error updating user metadata:', updateError);
    return NextResponse.json({ message: 'Failed to update user metadata' }, { status: 500 });
  }

  console.log({data})


  // Proceed with response
  return NextResponse.json({ message: 'User signed up successfully', user: newUser });
}
