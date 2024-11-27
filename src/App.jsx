import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/Hooks/Auth";
import AppRouter from "./routers/AppRouter";
import Header from "./components/Header";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}
