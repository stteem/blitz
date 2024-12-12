// src/components/pages/home-page.tsx
'use client'
import { Button } from '@/components/ui/button'
// import { useCounterStore } from '@/providers/counter-store-provider'
import Image from 'next/image'
// import { useEffect, useState } from 'react';
import { useState } from 'react';


const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 mr-3 text-brand_gold"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
  </svg>
);

export const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value || '',
    }));
  };

  const isPasswordStrong = (password: string) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    // Simulate server-side validation
    if (formData.name.trim() === '') {
      setErrorMessage('Name is required');
      return;
    }
    if (formData.email.trim() === '') {
      setErrorMessage('Email is required');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMessage('Invalid email format');
      return;
    }
    if (formData.country.trim() === '') {
      setErrorMessage('Country is required');
      return;
    }
    if (formData.password.trim() === '') {
      setErrorMessage('Password is required');
      return;
    }
    // if (!isPasswordStrong(formData.password)) {
    //   setErrorMessage('Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character.');
    //   return;
    // }

    setLoading(true);

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (response.ok) {
      console.log('Form submitted successfully');
      setSuccessMessage('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        country: '',
        password: '',
      });
    } else {
      console.error('Form submission failed');
      setErrorMessage('Form submission failed. Please try again.');
    }
  };

  return (
    <div className='flex flex-col md:flex-row w-full md:h-[700px] justify-start items-start bg-light-cream'>
      <div className='w-full h-auto'>
        <Image
          src='/social.png'
          alt='Logo'
          width={600}
          height={0} // Use state for height
          className='w-full h-[400px] md:h-[700px]'
        />
      </div>
      <div className='flex flex-col flex-grow h-[750px] md:h-[700px] p-10 justify-normal items-center text-white bg-light-lavender'>
        <h1 className='text-6xl font-extrabold mb-10 text-white'>Blit</h1>
        <div className='w-full md:w-[80%] h-auto'>
        <p className='mb-5 text-lg'>
          Blit Helps Boost Organic Likes & Engagements on Your Social Media Posts!
        </p>
        <p className='mb-2 text-lg'>Phase 1 launches very soon, register now to make the cut. Total limited slots 5000, available slots 3870.</p>
        
        <form className='mt-5 space-y-4 w-full max-w-md text-black' onSubmit={handleSubmit}>
          <div>
            <input 
              type='text' 
              id='name' 
              name='name' 
              required 
              placeholder='Name' 
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500' 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <select 
              id='country' 
              name='country' 
              required 
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500' 
              value={formData.country} 
              onChange={handleChange} 
            >
              <option value='' disabled>Select your country</option>
              <option value='Nigeria'>Nigeria</option>
              <option value='Ghana'>Ghana</option>
            </select>
          </div>
          <div>
            <input 
              type='email' 
              id='email' 
              name='email' 
              placeholder='Email Address'
              required 
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500' 
              value={formData.email}
              onChange={handleChange} 
            />
          </div>
          <div>
            <input 
              type='password' 
              id='password' 
              name='password' 
              autoComplete='new-password' 
              required 
              placeholder='Password' 
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500' 
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>
          <Button type='submit' className='w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700' disabled={loading}>
            {loading ? (
              <span className="loader"><Spinner/></span>
            ) : (
              'Register'
            )}
          </Button>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
        </div>
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