import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import LessonLayout from './layouts/LessonLayout';

import { getLessonsData } from './utils/lessonsStorage';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Learning from './pages/Learning';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Lesson from './pages/Lesson';
import Task from './pages/Task';

class App extends React.Component {
  componentDidMount() {
    getLessonsData();
  }

  render() {
    return (
      <Routes>
        {/* Страница логина */}
        <Route path="/" element={<Login />} />

        {/* Все остальные страницы через MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Learning" element={<Learning />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>

        {/* Под страницы */}
        <Route element={<LessonLayout />} >
          <Route path="Learning/:param" element={<Lesson />} />
          <Route path="Learning/:param/unit" element={<Task />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;
