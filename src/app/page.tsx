'use client'
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import ReferralLink from "@/components/referralLink"
import { getCookie } from 'cookies-next'

export default function Home() {
  const [name, setName] = useState<string>("")

  useEffect(() => {
    const fullname = getCookie('user_name')
    if (typeof fullname === 'string') {
      const firstname = fullname.split(' ')[0]
      setName(firstname)
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <header className="flex flex-col justify-center items-center w-[90%] mt-16 px-5">
          <h1>Welcome to Steeze{name ? `, ${name}` : ''}!</h1>
          <p>Earn rewards while boosting your favorite content, like for like, follow for follow!</p>
          <p>Steezers get rewarded for genuine engagement, and content creators thrive with organic interactions. Make every like count!</p>
        </header>
        <div className="w-[90%] md:w-auto mt-10">
          <ReferralLink />
        </div>
      </div>
    </div>
  )
}
