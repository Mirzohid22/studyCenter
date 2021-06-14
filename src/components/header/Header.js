import React, { useState } from 'react'
import { Navbar, Container, Nav,  } from 'react-bootstrap'
import Logo from './img/logo.svg'

function Header() {
    const [togle, setTogle] = useState(false)
    return (
        <Navbar bg="dark" variant="dark" expand='xl' sticky="top" expanded={togle} onClick={() =>{setTogle(!togle)}} className='px-3' >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={Logo}
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                    />{' '}
                    <span>Study<span>Center</span></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" type='reset' />
            </Container>
            <Container>
                    <Navbar.Collapse id='basic-navbar-nav' style={{width: '100%', }}>
                        <Nav className="" variant='pills' style={{width: '100%', justifyContent: 'flex-end'}} >
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/about'>About</Nav.Link>
                            <Nav.Link href='/teams'>Team</Nav.Link>
                            <Nav.Link href='/blogs'>Blog</Nav.Link>
                            <Nav.Link href='/contact_us'>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
