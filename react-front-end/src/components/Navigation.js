import {Container, Nav, Navbar, Form, FormControl,Button } from "react-bootstrap"
import './assets/css/navigation.css'

const Navigation = () =>{

    return(

        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Product Locator</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav className="seach-nav">
        <Nav.Link href="http://localhost:3000/map">Map</Nav.Link>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 search-bar"
          aria-label="Search"
        />
                <Button className="search-btn" variant="outline-success">Search</Button>
      </Form>
      </Nav>

        <Nav className="justify-content-end ml-auto nav-items">
        <Nav.Link href="http://localhost:3000/profile">Profile</Nav.Link>
        <Nav.Link href="http://localhost:3000/vendor_signup_1">Vendor Signup</Nav.Link>
        <Nav.Link href="http://localhost:3000/vendor_profile">Vendor Profile</Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>
    )


}

export default Navigation