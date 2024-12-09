// src/components/pages/home-page.tsx
'use client'

import { useCounterStore } from '@/providers/counter-store-provider'

export const HomePage = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  )

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      Count: {count}
      <hr />
      <button type="button" onClick={() => void incrementCount()}>
        Increment Count
      </button>
      <button type="button" onClick={() => void decrementCount()}>
        Decrement Count
      </button>
    </div>
  )
}
