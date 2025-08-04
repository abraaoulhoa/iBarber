const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

let bookings = []

app.post('/bookings', (req, res) => {
  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios' })
  }

  const newBooking = { id: bookings.length + 1, name, email }
  bookings.push(newBooking)
  res.status(201).json(newBooking)
})

app.get('/bookings', (req, res) => {
  res.json(bookings)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
