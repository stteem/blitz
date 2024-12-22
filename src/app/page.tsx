// src/app/page.tsx
import Navbar from "@/components/navbar"
import ReferralLink from "@/components/referralLink"
import { cookies } from "next/headers" 


export default async function Home() {

  const cookieStore = await cookies()
  // const cooki = cookieStore.getAll().map((cookie) => (
  //   <div key={cookie.name}>
  //     <p>Name: {cookie.name}</p>
  //     <p>Value: {cookie.value}</p>
  //   </div>
  // ))



  return <div>
    <Navbar />
    <div className="flex flex-col justify-center items-center">
      <header className="flex flex-col justify-center items-center w-[90%] mt-16 px-5">
        <h1>Welcome to Steeze!</h1>
        <p>Earn rewards while boosting your favorite content!</p>
        <p>Steezers get rewarded for genuine engagement, and content creators thrive with organic interactions. Make every like count!</p>
      </header>
      <div className="w-[90%] md:w-auto mt-10">
        <ReferralLink />
      </div>
      {/* {cooki} */}
    </div>
  </div>
}
