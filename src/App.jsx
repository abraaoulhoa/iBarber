import React from 'react'
import BookingModal from './BookingModal'

function App() {
  async function handleBooking(data) {
    const res = await fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.error || 'Erro desconhecido')
    }
    return await res.json()
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <BookingModal onSubmit={handleBooking} />
    </div>
  )
}

export default App
