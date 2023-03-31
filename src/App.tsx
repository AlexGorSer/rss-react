import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { PageNotFound } from './components/404/PageNotFound';
import { MainLayout } from './components/layout/MainLayout';
import { Main } from './components/Main/Main';
import Form from './components/Form/Form';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<div className="container">About</div>} />
          <Route path="contacts" element={<div className="container">Contacts</div>} />
          <Route path="form" element={<Form />} />
          <Route path="404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </div>
  );
};
