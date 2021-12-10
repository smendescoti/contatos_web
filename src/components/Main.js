import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PasswordPage from '../pages/PasswordPage';

//declarando o componente utilizando sintaxe de função
const Main = () => (
    <div className="container mt-4">
        <Routes>
            <Route path="/" exact element={<LoginPage />} />
            <Route path="/criar-conta" element={<RegisterPage />} />
            <Route path="/esqueci-minha-senha" element={<PasswordPage />} />
        </Routes>
    </div>
)

export default Main;
