import React from 'react';
import './App.css';
import Login from './pages/Login.jsx';
import styled from 'styled-components';


const Body = styled.body({
  display: 'inline-flex',
  padding: '40px 40px 40px 142px',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '147.781px',
  background: '#FFF',
  fontFamily: 'Poppins',
});

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '147.781px',
});

const Image = styled.img({ 
  width: '543.219px',
  height: '633.601px' ,
  flexShrink: '0',
  margin: '163px 0 163px 0',
});

const App = () => {
  return (
    <Body>
      <Container>
      <Image src='/pic.png' alt="Image Alt Text" />
        <Login />
      </Container>
    </Body>
  );
};

export default App;
