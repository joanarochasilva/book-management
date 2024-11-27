import React from "react";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";
import Home from "../components/Home";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../utils/ProtectedRoute";
import BookList from "../components/BookList";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<SignUpPage />} />
      <Route
        path="/list"
        element={
          <ProtectedRoute children={<BookList />}>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
