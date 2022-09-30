import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./component/Layout";
import { MainPage } from "./pages/MainPage";
import { Message } from "./pages/Message";
import { ProfileUser } from "./pages/ProfileUser";
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfileMe } from './pages/ProfileMe';
import { ListUsers } from './pages/ListUsers';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProfileMe />} />
        <Route path="/message" element={<Message />} />
        <Route path="/users" element={<ListUsers />} />
        <Route path="/user/:id" element={<ProfileUser />} />
        <Route path="/news" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
