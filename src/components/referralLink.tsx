'use client'
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { FaCopy, FaCheck } from "react-icons/fa"


const ReferralLink = () => {
  const [userId, setUserId] = useState<string>('')
  const [referralUrl, setReferralUrl] = useState<string>("")
  const [copy, setCopy] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")


  useEffect(() => {
    // Simulate fetching user ID
    const fetchUserId = async () => {
      const response = await fetch('api/user', {
        cache: 'force-cache',
      })
      if(response.ok) {
        const data = await response.json()
        // console.log("User ID:", data.userId)
        setUserId(data.userId)
        setReferralUrl(`${window.location.origin}/auth?referral=${data.userId}`)
      }
      else {
        console.error("Failed to fetch user ID:", response.statusText)
        setErrorMessage("Failed to fetch referral ID, please check your internet connection and refresh your browser.")
      }
    }

    fetchUserId()
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralUrl)
    setCopy(true)
    setTimeout(() => setCopy(false), 2000) // Reset icon after 2 seconds

  }

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold mb-2">Your Referral Link</h2>
      {userId ? (
        <div>
          <p className="mb-2">{referralUrl}</p>
          <Button
            onClick={copyToClipboard}
            className="px-4 py-2 w-24 text-white rounded-md hover:bg-gray-500"
          >
            <span className="ml-2">{copy ? "Copied" : "Copy"}</span>
            {copy ? <FaCheck /> : <FaCopy />}
          </Button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
    </div>
  )
}

export default ReferralLink