import React from 'react';
import './App.css';
import AnnouncementHeader from "./components/common/AnnouncementHeader"
import Header from './components/common/Header';
import HeaderSecondary from './components/common/HeaderSecondary';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <AnnouncementHeader />
      <div className='sticky top-0 '>
        <Header />
        <HeaderSecondary />
      </div>
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
