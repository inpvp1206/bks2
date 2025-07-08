
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="justify-content-center">
      <Container>
        <Navbar.Brand href="/">기호 2번 백운 서포터즈</Navbar.Brand>
        
      </Container>
    </Navbar>
  );
};

export default Header;
