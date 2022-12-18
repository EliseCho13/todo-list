import React, { useState } from 'react';
import Nav from './components/Nav';
import NotificationCenter from './components/NotificationCenter';
import './App.css';
import './variables.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <NotificationCenter />
    </Router>
  );
}

export default App;
