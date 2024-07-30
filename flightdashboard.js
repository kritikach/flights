import React, { useEffect, useState } from 'react';
import FlightStatus from './flightstatus';
import NotificationSettings from './notificationsettings';

const FlightDashboard = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const response = await fetch('http://127.0.0.1:5000/api/flights');
      const data = await response.json();
      console.log(data);  // Log the fetched data
      setFlights(data);
    };

    fetchFlights();
  }, []);

  return (
    <div>
      <h2>Flight Dashboard</h2>
      {flights.map(flight => (
        <FlightStatus key={flight.flightNumber} flight={flight} />
      ))}
      <NotificationSettings />
    </div>
  );
};

export default FlightDashboard;
