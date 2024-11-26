import React from 'react'
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setError(null);
  
      try {
        const { user, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
  
        if (error) {
          setError(error.message);
        } else {
          console.log('Usuário logado', user);
          // Redirecionar ou realizar outras ações após o login
        }
      } catch (err) {
        setError('Ocorreu um erro, tente novamente.');
      }
    };
  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
  
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
  
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
  
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
  
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  
}
