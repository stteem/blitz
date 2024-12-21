'use client'
import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

export default function EmailVerification(){
//   const router = useRouter();
  const [message, setMessage] = useState('');

  useEffect(() => {
    //   const { token_hash, type } = router.query;
    const urlParams = new URLSearchParams(window.location.search);
    const token_hash = urlParams.get('token_hash');
    const type = urlParams.get('signup');

    if (token_hash && type === 'signup') {
        setMessage('Your email has been verified.');
    } else {
        setMessage('401 Unauthorized');
    }
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      {message && <p>{message}</p>}
    </div>
  );
};
