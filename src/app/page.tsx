// src/app/page.tsx
import Navbar from "@/components/navbar"
import ReferralLink from "@/components/referralLink"


export default function Home() {
  return <div>
    <Navbar />
    <div className="flex flex-col justify-center items-center">
      <header className="flex flex-col justify-center items-center w-[90%] mt-16 px-5">
        <h1>Welcome to Steeze!</h1>
        <p>Earn rewards while boosting your favorite content!</p>
        <p>Steezers get rewarded for genuine engagement, and content creators thrive with organic interactions. Make every like count!</p>
      </header>
      <div className="mt-10">
        <ReferralLink />
      </div>
    </div>
  </div>
}
