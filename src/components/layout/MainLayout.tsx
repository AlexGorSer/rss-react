import Footer from './../Footer/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';

class MainLayout extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default MainLayout;
