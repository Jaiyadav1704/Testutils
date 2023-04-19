import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from'react-bootstrap/Container';
import Navbar from'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap';


export default function navbar({mode,toggleMode}) {
  return (
    <>
    <Navbar bg={mode} variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{fontSize:'30px',color:mode==="light"?"black":"white"}}>TextEditor</Navbar.Brand>
          <Nav className="me-auto ">
            {/* <Nav.Link href="/" style={{color:mode==="light"?"black":"white"}}>Home</Nav.Link>
            <Nav.Link href="/" style={{color:mode==="light"?"black":"white"}} >Contact us</Nav.Link>
            <Nav.Link href="/" style={{color:mode==="light"?"black":"white"}} >About us</Nav.Link> */}
          </Nav> 
          <Form style={{display:"flex",gap:"1rem"}} >
            <label htmlFor="custom-switch"  style={ {color:mode==="light"?"black":"white"}} >Enable dark mode</label>
            <Form.Check className='text-light'
           
              onClick={toggleMode}
              type="switch"
              id="custom-switch "
             name="custom-switch"
              
            />
          </Form>
          
        </Container>
      </Navbar>
      <br/>
    </>
  )
}

Navbar.propTypes = {title: PropTypes.string}



