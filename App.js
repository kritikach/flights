import React from 'react';
import Header from './components/Header';
import Offers from './components/Offers';
import Services from './components/Services';
import FlightDashboard from './components/flightdashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Offers />
      <Services />
      <FlightDashboard />
    </div>
  );
}

export default App;
