import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBarr.css'

const NavBarr = () => {
  return (
    <div>
        <Navbar className='n'>
      <Container>
        <Navbar.Brand href="#home">HAMMAMI SOUMAYA</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            AboutProjectsContact: <a href="#login">Hammami Soumaya</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBarr