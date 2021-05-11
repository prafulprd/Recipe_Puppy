import React, { Component } from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Navmenu = () => {

    return ( 
    	<Navbar bg="light" expand="lg">
    	  <Container>
			  <Navbar.Brand href="#home">Recipe Puppy API </Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link href="#home">Home</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Container>
		</Navbar>
		);
  }

export default Navmenu;
