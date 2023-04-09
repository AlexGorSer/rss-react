import { Footer } from './../Footer/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
