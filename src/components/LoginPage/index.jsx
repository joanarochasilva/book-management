import React from 'react'
import { useState } from 'react';
import { supabaseClient } from '../../services/supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const history = useNavigate()
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setError(null);
  
      try {
        const { data: user, error } = await supabaseClient.auth.signInWithPassword({
          email,
          password,
        });
  
        if (error) {
          setError(error.message);
        } else {
          console.log('Usuário logado', user);
          // Redirecionar ou realizar outras ações após o login
          history('/list')
        }
      } catch (err) {
        setError('Ocorreu um erro, tente novamente.');
        console.log(err)
      }
    };
  return (
      <div >
        <div>
          <h2>Login</h2>
  
          {error && <div>{error}</div>}
  
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
  
            <div>
              <label htmlFor="password">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
  
            <button
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  
}
