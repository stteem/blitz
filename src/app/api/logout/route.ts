import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server';


export async function GET(request: Request) {
    // Handle GET request
    const supabase = await createClient();
    
    let { error } = await supabase.auth.signOut()
    if (error) {
        console.error('Error signing out:', error);
        // throw new Error(error.message)
        return NextResponse.json({ message: error.message });
    }
    return NextResponse.json({ message: 'logout successful' });
}