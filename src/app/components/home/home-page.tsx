// src/components/pages/home-page.tsx
'use client'
import { Button } from '@/components/ui/button'
import { useCounterStore } from '@/providers/counter-store-provider'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  )
  
  const [imageHeight, setImageHeight] = useState<number>(0);

  useEffect(() => {
    setImageHeight(window.innerHeight); // Set height after component mounts
  }, []);

  return (
    <div className='flex flex-col md:flex-row w-full h-auto justify-start items-start bg-light-cream'>
      <div className='w-full h-[400px]'>
        <Image
          src='/social.png'
          alt='Logo'
          width={600}
          height={0} // Use state for height
          // objectFit='contain'
          className='w-full h-[400px] md:h-screen'
        />
      </div>
      <div className='flex flex-col flex-grow h-screen p-10 justify-normal items-center text-white bg-light-lavender'>
        <h1 className='text-6xl font-extrabold mb-10 text-white'>Blitz</h1>
        <div className='w-full md:w-[80%]'>
        <p className='mb-5 text-lg'>
          Blitz Helps Boost Organic Likes & Engagements on Your Social Media Posts!
        </p>
        <p className='mb-2 text-lg'>Phase 1 launches very soon, register now to make the cut. Total limited slots 5000, available slots 3870.</p>
        </div>
        <form className='mt-5 space-y-4 w-full max-w-md'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-white'>Name</label>
            <input type='text' id='name' name='name' required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500' />
          </div>
          {/* <div>
            <label htmlFor='number' className='block text-sm font-medium text-gray-700'>Phone Number</label>
            <input type='tel' id='number' name='number' required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500' />
          </div> */}
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-white'>Email</label>
            <input type='email' id='email' name='email' required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500' />
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-white'>Password</label>
            <input type='password' id='password' name='password' required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500' />
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700'>Register</button>
        </form>

      </div>
    </div>
  )
}


 {/* <Button className='w-2/2' type="button" onClick={() => void incrementCount()}>
        Increment Count
      </Button>
      Count: {count}
      <hr />
      <Button className='w-2/2' type="button" onClick={() => void decrementCount()}>
        Decrement Count
      </Button> */}