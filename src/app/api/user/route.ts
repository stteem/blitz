import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server';


export async function GET(request: Request) {
    // Handle GET request
    const supabase = await createClient();
    
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error) {
        console.error('Error signing out:', error);
        // throw new Error(error.message)
        return NextResponse.json({ message: error.message });
    }
    return NextResponse.json({ userId: user?.id});
}