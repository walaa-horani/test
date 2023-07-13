import './App.css';
import React from 'react';

import AppointmentBooking from './AppointmentBooking';

function App() {
  const pageStyles = {
    backgroundColor: '#141414',
    minHeight: '100vh',
    
  };
  return (
    <div style={pageStyles}>
       <AppointmentBooking />
    </div>
  );
}

export default App;
