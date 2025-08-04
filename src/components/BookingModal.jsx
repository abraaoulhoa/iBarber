import React, { useState } from 'react'

function BookingModal({ onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError('Nome é obrigatório')
      return
    }
    if (!validateEmail(email)) {
      setError('Email inválido')
      return
    }
    setError(null)
    setLoading(true)
    try {
      await onSubmit({ name, email })
      alert('Agendamento realizado com sucesso!')
      setName('')
      setEmail('')
    } catch (e) {
      alert('Erro ao agendar, tente novamente.')
    }
    setLoading(false)
  }

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Agendar Serviço</h2>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Enviando...' : 'Confirmar'}
      </button>
    </div>
  )
}

export default BookingModal
