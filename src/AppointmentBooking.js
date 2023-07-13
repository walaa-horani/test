import React, { useState, useEffect } from 'react';
import { Container, Text, TextInput, Button,Card } from '@mantine/core';

const AppointmentBooking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [appointments, setAppointments] = useState([]);
 
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newAppointment = {
      name,
      email,
      date,
      time,
    };

    setAppointments([...appointments, newAppointment]);

   
    localStorage.setItem('appointments', JSON.stringify(appointments));
  };

  const handleCancelAppointment = (id) => {
    const updatedAppointments = appointments.filter((del, i) => i !== id);
    setAppointments(updatedAppointments);

   
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

 
  useEffect(() => {
    const storedAppointments = localStorage.getItem('appointments');

    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);


  
  return (
    <Container  size="sm">
        <Card  className='card'>
      <Text color='white'  size="xl" weight={700} align="center" style={{ marginBottom: '1rem' }}>
      <h1>My Appointment Booking </h1>
      </Text>

      <form onSubmit={handleFormSubmit}>
        <TextInput 
        label={<label style={{ color: 'white' }}>Name</label>}

          value={name}
          onChange={handleName}
          required
          style={{ marginBottom: '0.5rem' , borderBottom:'1px solid #700202'}}
          
        />
        <TextInput
          type="email"
          label={<label style={{ color: 'white' }}>Email</label>}
          value={email}
          onChange={handleEmail}
          required
          style={{ marginBottom: '0.5rem',borderBottom:'1px solid #700202' }}
        />
        <TextInput
          type="date"
          label={<label style={{ color: 'white' }}>Date</label>}
          value={date}
          onChange={handleDate}
          required
          style={{ marginBottom: '0.5rem' ,borderBottom:'1px solid #700202',  backgroundColor: 'transparent' }}
        />
        <TextInput
          type="time"
          label={<label style={{ color: 'white' }}>Time</label>}
          value={time}
          onChange={handleTime}
          required
          style={{ marginBottom: '0.5rem', borderBottom:'1px solid #700202'}}
        
        />
        <div style={{ display: 'flex', justifyContent: 'center' ,marginTop:'20px'}}>
        <Button  type="submit" style={{'background':'none', 'border':'1px solid #700202', 'fontSize':'16px', 'height':'40px' }} >
          Book Appointment
        </Button>
        </div>
      </form>

     
        <div style={{'textAlign':'center'}}>
          <Text size="lg" weight={700} align="center" style={{ margin: '2rem 0 1rem', 'color':'white' }}>
            Booked Appointments
          </Text>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {appointments.map((appointment, id) => (
              <li key={id} style={{ marginBottom: '1rem' }}>
                <div style={{'color':'white'}}>Name: {appointment.name}</div>
                <div style={{'color':'white'}}>Email: {appointment.email}</div>
                <div style={{'color':'white'}}>Date: {appointment.date}</div>
                <div style={{'color':'white'}}>Time: {appointment.time}</div>
              
               
                <Button
                  onClick={() => handleCancelAppointment(id)}
                  variant="link"
                  color="#c40101"
                  style={{ marginTop: '0.5rem','background':'none', 'border':'1px solid #700202', 'fontSize':'16px', 'height':'40px' ,'color':'white'  }}
                >
                  Cancel Appointment
                </Button>
              </li>
            ))}
          </ul>
        </div>
     </Card>
    </Container>
  );
};

export default AppointmentBooking;
