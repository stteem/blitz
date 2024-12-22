import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HomePage } from './page'
import { CounterStoreProvider } from '@/providers/counter-store-provider'

describe('HomePage', () => {
  const renderHomePage = () => {
    return render(
      <CounterStoreProvider>
        <HomePage />
      </CounterStoreProvider>
    )
  }

  it('renders initial count', () => {
    renderHomePage()
    expect(screen.getByText('Count: 2024')).toBeInTheDocument()
  })

  it('increments count when increment button is clicked', () => {
    renderHomePage()
    
    const incrementButton = screen.getByText('Increment Count')
    fireEvent.click(incrementButton)
    
    expect(screen.getByText('Count: 2025')).toBeInTheDocument()
  })

  it('decrements count when decrement button is clicked', () => {
    renderHomePage()
    
    const decrementButton = screen.getByText('Decrement Count')
    fireEvent.click(decrementButton)
    
    expect(screen.getByText('Count: 2023')).toBeInTheDocument()
  })

  it('handles multiple interactions correctly', () => {
    renderHomePage()
    
    const incrementButton = screen.getByText('Increment Count')
    const decrementButton = screen.getByText('Decrement Count')
    
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    expect(screen.getByText('Count: 2026')).toBeInTheDocument()
    
    fireEvent.click(decrementButton)
    expect(screen.getByText('Count: 2025')).toBeInTheDocument()
  })
}) 