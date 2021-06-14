import React, { useState } from 'react'
import { Card, Container as div, Button, Nav } from 'react-bootstrap'

function Footer() {
    const [path, seetPath] = useState('')
    return (
        <div style={{
            width: '100%',
            background: '#212529'
        }}>
            <Card bg='dark' text='light'>
                <div style={{display: 'flex', justifyContent:'space-around'}} >
                    <div>
                        <Card.Header>Study Center</Card.Header>
                        <Button variant='primary'>Load More</Button>
                    </div>
                    <div>
                    <Nav 
                        defaultActiveKey={`${path}`} 
                        className="flex-column "
                        onSelect={(selectedKey) => seetPath(selectedKey) }>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href='/about' eventKey="/about">About</Nav.Link>
                        <Nav.Link href='/teams' eventKey="teams">Teams</Nav.Link>
                        <Nav.Link href='/blogs' eventKey="blogs">Blog</Nav.Link>
                        <Nav.Link href='/contact_us' eventKey="contact_us">Contact Us</Nav.Link>
                    </Nav>
                    </div>
                    <div>

                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Footer
