import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/Hooks/Auth'
import AppRouter from './routers/AppRouter'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  )
}
