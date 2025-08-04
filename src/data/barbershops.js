// Dados simulados das barbearias em São Paulo
export const barbershops = [
  {
    id: 1,
    name: "Barbearia Clássica",
    lat: -23.5505,
    lng: -46.6333,
    address: "Rua Augusta, 123 - Consolação",
    phone: "(11) 99999-1234",
    rating: 4.8,
    image: "/api/placeholder/300/200",
    description: "Tradição em cortes masculinos há mais de 20 anos",
    services: [
      { name: "Corte Masculino", price: 35, duration: 30 },
      { name: "Barba", price: 25, duration: 20 },
      { name: "Corte + Barba", price: 55, duration: 45 },
      { name: "Sobrancelha", price: 15, duration: 10 }
    ],
    availableSlots: ["09:00", "10:30", "14:00", "15:30", "17:00"],
    workingHours: "Seg-Sex: 8h-19h | Sáb: 8h-17h",
    specialties: ["Cortes clássicos", "Barbas tradicionais"]
  },
  {
    id: 2,
    name: "Barber Shop Premium",
    lat: -23.5515,
    lng: -46.6343,
    address: "Av. Paulista, 456 - Bela Vista",
    phone: "(11) 99999-5678",
    rating: 4.9,
    image: "/api/placeholder/300/200",
    description: "Experiência premium em cuidados masculinos",
    services: [
      { name: "Corte Premium", price: 50, duration: 40 },
      { name: "Barba Premium", price: 35, duration: 25 },
      { name: "Tratamento Capilar", price: 80, duration: 60 },
      { name: "Relaxamento", price: 45, duration: 30 }
    ],
    availableSlots: ["08:30", "11:00", "13:30", "16:00", "18:30"],
    workingHours: "Seg-Sáb: 8h-20h",
    specialties: ["Cortes modernos", "Tratamentos capilares", "Relaxamento"]
  },
  {
    id: 3,
    name: "Estilo & Corte",
    lat: -23.5495,
    lng: -46.6323,
    address: "Rua da Consolação, 789 - Centro",
    phone: "(11) 99999-9012",
    rating: 4.7,
    image: "/api/placeholder/300/200",
    description: "Cortes modernos e estilizados para o homem contemporâneo",
    services: [
      { name: "Corte Moderno", price: 40, duration: 35 },
      { name: "Barba Estilizada", price: 30, duration: 25 },
      { name: "Sobrancelha", price: 15, duration: 15 },
      { name: "Pigmentação", price: 120, duration: 90 }
    ],
    availableSlots: ["09:30", "12:00", "14:30", "16:30", "19:00"],
    workingHours: "Seg-Sex: 9h-19h | Sáb: 9h-16h",
    specialties: ["Cortes modernos", "Barbas estilizadas", "Pigmentação"]
  },
  {
    id: 4,
    name: "Barbearia do João",
    lat: -23.5485,
    lng: -46.6353,
    address: "Rua Bela Cintra, 321 - Jardins",
    phone: "(11) 99999-3456",
    rating: 4.6,
    image: "/api/placeholder/300/200",
    description: "Ambiente familiar com atendimento personalizado",
    services: [
      { name: "Corte Tradicional", price: 30, duration: 25 },
      { name: "Barba", price: 20, duration: 15 },
      { name: "Corte + Barba", price: 45, duration: 35 },
      { name: "Corte Infantil", price: 25, duration: 20 }
    ],
    availableSlots: ["08:00", "10:00", "13:00", "15:00", "17:30"],
    workingHours: "Seg-Sex: 8h-18h | Sáb: 8h-15h",
    specialties: ["Cortes tradicionais", "Atendimento familiar"]
  },
  {
    id: 5,
    name: "Urban Cuts",
    lat: -23.5525,
    lng: -46.6313,
    address: "Rua Oscar Freire, 567 - Jardins",
    phone: "(11) 99999-7890",
    rating: 4.8,
    image: "/api/placeholder/300/200",
    description: "Tendências urbanas e cortes diferenciados",
    services: [
      { name: "Corte Urbano", price: 45, duration: 40 },
      { name: "Fade", price: 40, duration: 35 },
      { name: "Barba Desenhada", price: 35, duration: 30 },
      { name: "Luzes", price: 150, duration: 120 }
    ],
    availableSlots: ["09:00", "11:30", "14:00", "16:30", "19:00"],
    workingHours: "Ter-Sáb: 9h-20h",
    specialties: ["Cortes urbanos", "Fade", "Coloração"]
  },
  {
    id: 6,
    name: "Gentleman's Club",
    lat: -23.5475,
    lng: -46.6373,
    address: "Av. Brigadeiro Luís Antônio, 890 - Paraíso",
    phone: "(11) 99999-2468",
    rating: 4.9,
    image: "/api/placeholder/300/200",
    description: "Experiência completa de gentleman com whisky e charutos",
    services: [
      { name: "Corte Executivo", price: 60, duration: 45 },
      { name: "Barba Clássica", price: 40, duration: 30 },
      { name: "Pacote Completo", price: 95, duration: 75 },
      { name: "Massagem Facial", price: 50, duration: 25 }
    ],
    availableSlots: ["10:00", "12:30", "15:00", "17:30", "20:00"],
    workingHours: "Seg-Sáb: 10h-21h",
    specialties: ["Experiência premium", "Ambiente exclusivo", "Serviços completos"]
  }
]

// Função para calcular distância aproximada (em km)
export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371 // Raio da Terra em km
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLng = (lng2 - lng1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}

// Função para filtrar barbearias por distância
export const getNearbyBarbershops = (userLat, userLng, maxDistance = 5) => {
  return barbershops
    .map(barbershop => ({
      ...barbershop,
      distance: calculateDistance(userLat, userLng, barbershop.lat, barbershop.lng)
    }))
    .filter(barbershop => barbershop.distance <= maxDistance)
    .sort((a, b) => a.distance - b.distance)
}

