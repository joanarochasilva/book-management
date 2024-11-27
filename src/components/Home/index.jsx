import React, { useContext } from "react";
import { AuthProvider } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const session = useContext(AuthProvider);
  const navigation = useNavigate();

  return (
    <main>
      <h1>Bem vindo!</h1>
      <p>Faça o login ou cadastre-se</p>
      <button onClick={() => navigation("/login")}>Entrar</button>
      <button onClick={() => navigation("/cadastro")}>Cadastre-se</button>
    </main>
  );
}
