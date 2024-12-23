// src/app/page.tsx
import Navbar from "@/components/navbar"


export default function HowItWorks() {
  return <div>
    <Navbar />
    <div className="flex flex-col justify-center items-center">
        {/* <header className="flex flex-col justify-center items-center mt-16 px-10">
        </header> */}
        <div className="flex flex-col justify-center items-center w-[80%] md:w-[65%] mt-7 gap-5">
            <h1 className="text-2xl">How it works</h1>
            <h2 className="text-sm mb-5">Like for like! Follow for follow!</h2>
            <p className='text-xl mb-5'>In a nutshell, we have reimagined the popular <i>like for like, follow for follow!</i> social media mantra.</p>
       
            <p>
                Steeze users are obligated to engage by following, or by liking and 
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
