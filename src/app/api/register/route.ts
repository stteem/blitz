import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server';



export async function POST(request: Request) {
  try {
    // Initialize the Supabase client
    const supabase = await createClient();
    const user = await request.json();
    // console.log('Received data:', user);
    
    // Sign up the user
    const { data: authData, error: AuthError } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          display_name: user.name,
          country: user.country,
          user_name: user.name,
          referral_link: user.referral,
        }
      }
    });

    // Check for sign-up error
    if (AuthError) {
      console.error('Error signing up:', AuthError);
      throw new Error(AuthError.message)
      // return NextResponse.json({ error: AuthError });
    }

    // Proceed with response
    return NextResponse.json({ message: 'success', data: authData });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ message: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
