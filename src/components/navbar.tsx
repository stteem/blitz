'use client'
import { useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"

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


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleSignOut = async () => {
    // console.log('Sign out')
    setLoading(true);
    try {
      await fetch('/api/logout');
      // console.log('Logged out')
      setIsOpen(false);
      setLoading(false);
      window.location.href = '/login'
    } catch (error) {
      console.error("Error logging out:", error)
      setLoading(false);
    }
    // const response = await fetch('/api/logout');
    // if (response.ok) {
    // //   console.log({response})
    //   window.location.href = '/login'
    // } else {
    //   const errorData = await response.json();
    //   console.log({errorData});
    // }
  }

  return (
    <nav className="bg-light-lavender p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Steeze</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          {/* <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link> */}
          <Link href="/how-it-works" className="text-white hover:text-gray-400">
            How it works
          </Link>
          <Button onClick={handleSignOut} className="bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white py-2 px-4 rounded">
            {loading ? (
              <span className="loader"><Spinner/></span>
            ) : (
              'Sign Out'
            )}
          </Button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block text-white py-2 px-4 hover:bg-gray-700">
            Home
          </Link>
          {/* <Link href="/about" className="block text-white py-2 px-4 hover:bg-gray-700">
            About
          </Link> */}
          <Link href="/how-it-works" className="block text-white py-2 px-4 hover:bg-gray-700">
            How it works
          </Link>
          <Button onClick={handleSignOut} className="block bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white py-2 px-4 rounded">
            {loading? (
              <span className="loader"><Spinner/></span>
            ) : (
              'Sign Out'
            )}
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Navbar