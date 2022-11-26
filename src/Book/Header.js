import react, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header({mybooktype}) {
    
    const [searchinput,setSearchInput] = useState()
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Biblio</Navbar.Brand>
                &nbsp&nbsp
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <Nav>
                            <Nav.Link href="#deets">Calender</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">

                            </Nav.Link>

                            <NavDropdown title="page" id="collasible-nav-dropdown" class="me-1">
                                <NavDropdown.Item href="#action/3.1">Categories</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Authors
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Reservation
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        &nbsp&nbsp&nbsp&nbsp&nbsp
                       <input  id="input1" /> 
                       <Link 
                        to={`/books/${mybooktype}`}
                        state={{mybooktype : searchinput}}
                       >
                        <button>Chercher</button>
                        </Link>

                        <NavDropdown title="Profile" id="collasible-nav-dropdown" class="me-1">
                            <NavDropdown.Item href="/">profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                setings
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login" >
                                Deconnection
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
