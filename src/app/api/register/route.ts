import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server';



export async function GET(request: Request) {
  // Handle GET request
  return NextResponse.json({ message: 'GET request successful' });
}

export async function POST(request: Request) {
  try {
    // Initialize the Supabase client
    const supabase = await createClient();
    const user = await request.json();
    console.log('Received data:', user);

    // Sign up the user
    const { data: authData, error: AuthError } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          display_name: user.name,
          country: user.country,
          user_name: user.name,
        }
      }
    });

    // Check for sign-up error
    if (AuthError) {
      console.error('Error signing up:', AuthError);
      return NextResponse.json({ message: 'Failed to sign up', error: AuthError.message }, { status: 500 });
    }
    // console.log({authData})
    // Insert country data
    // const { error: countryError } = await supabase
    //   .from('country')
    //   .insert([
    //     { country_name: user.country, user_id: authData.id, user_name: user.name },
    //   ]);

    // if (countryError) {
    //   console.error('Error inserting country data:', countryError);
    //   return NextResponse.json({ message: 'Failed to insert country data', error: countryError.message }, { status: 500 });
    // }

    // Proceed with response
    return NextResponse.json({ message: 'success'});
  } catch (error: unknown) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ message: 'An unexpected error occurred', error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
