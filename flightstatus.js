import React from 'react';

const FlightStatus = ({ flight }) => {
  return (
    <div className="flight-status">
      <p>Flight Number: {flight.flightNumber}</p>
      <p>Status: {flight.status}</p>
      <p>Gate: {flight.gate}</p>
    </div>
  );
};

export default FlightStatus;
