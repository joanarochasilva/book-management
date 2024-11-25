import React from 'react'

export default function AppRouter() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/livros" element={<LivrosList />} />
      <Route path="/cadastro" element={<Auth />} />
    </Routes>
  </Router>
  )
}
