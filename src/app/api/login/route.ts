import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server';


export async function POST(request: Request) {
  try {
    // Initialize the Supabase client
    const supabase = await createClient();
    const user = await request.json();
    console.log('Received login data:', user);

    
    let { data, error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password
    })
  

    // Check for sign-up error
    if (error) {
      console.error('Error signing up:', error);
      throw new Error(error.message)
    }

    // Proceed with response
    return NextResponse.json({ message: 'success', data: data });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ message: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
