import { Navbar, Nav } from "react-bootstrap";
import logo from "../../logo.svg";
var SiteNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Navbar.Brand>
        <img src={logo} alt="" width="40px" height="40px" />
        Logo
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="team">Team</Nav.Link>
          <Nav.Link href="products">Products</Nav.Link>
          <Nav.Link href="blog">Blog</Nav.Link>
          <Nav.Link href="contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default SiteNavbar;
