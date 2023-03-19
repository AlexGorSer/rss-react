import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import PageNotFound from './components/404/PageNotFound';
import MainLayout from './components/layout/MainLayout';
import Main from './components/Main/Main';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="/about" element={<h1 className="container">About</h1>} />
            <Route path="/contacts" element={<h1 className="container">Contacts</h1>} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
