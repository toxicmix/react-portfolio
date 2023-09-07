import { useState } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {

  return (
    <header className="pb-0 mb-0" style={{ borderBottom: "1px solid #333" }}>
      <Navbar bg="dark" variant="dark" expand="md" style={{ justifyContent: "space-between" }}>
        <div className="container-fluid" style={{ width: "65%"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            {/* Add the activeKey code below and the rest shoud work  */}
            <Nav className="me-auto" activeKey={window.location.pathname}>
              <li><Nav.Link href="/">Home</Nav.Link></li>
              <li><Nav.Link href="/aboutme">About me</Nav.Link></li>
              <li><Nav.Link href="/portfolio">portfolio</Nav.Link></li>
              <li><Nav.Link href="/contact">contact</Nav.Link></li>
              <li><Nav.Link href="/resume">resume</Nav.Link></li>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}


export default Header