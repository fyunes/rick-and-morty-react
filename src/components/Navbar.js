import { Container, Nav, Navbar } from 'react-bootstrap'; 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Rickandmortyfetch from './Rickandmortyfetch';
import '../styles/styles.css'

function MyNavbar() {
  return (
    <BrowserRouter>
    <div>
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
          <Navbar.Brand href="#home">
          </Navbar.Brand>
          </Container>
          <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='links'>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/form">Form</Nav.Link>
            <Nav.Link as={Link} to="/rickandmorty">Characters</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    <div>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/rickandmorty" element={<Rickandmortyfetch />} />
        </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default MyNavbar;