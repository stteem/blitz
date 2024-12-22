// src/app/page.tsx
import Navbar from "@/components/navbar"


export default function HowItWorks() {
  return <div>
    <Navbar />
    <div className="flex flex-col justify-center items-center">
        <header className="flex flex-col justify-center items-center mt-16 px-10">
            <h1 className="text-2xl mb-5">How it works!</h1>
            <p>Steezers get rewarded for genuine engagements, and content creators thrive with organic interactions.</p>
        </header>
        <div className="flex flex-col justify-center items-center w-[80%] md:w-[70%] mt-14 gap-5">
            <p>
                Kpaly users are obligated to engage by following, or by liking and 
                commenting on author's posts. Users can in turn get engagements on 
                their posts if they meet the daily minimum engagement threshold.
            </p>
            <p>
                Users can get engagements on their posts in 2 ways; By social capital, 
                where they meet the daily engagement threshold, or by cash, where they 
                reward people for liking, commenting, or following them.
            </p>
            <p>
                Author shares post link on Kpaly, when clicked on, the link takes users to 
                Facebook, Threads, or Instagram for the engagements.
            </p>
        </div>
    </div>
  </div>
}
