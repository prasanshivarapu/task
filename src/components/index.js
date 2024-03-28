import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";

function Index() {
    return (
        <Navbar expand="lg" sticky="top" bg="white">
            <Container fluid>
                <Navbar.Brand href="/home">
                    <img src="./Logo.png" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="main2" id="basic-navbar-nav">
                    <Nav className="maing">
                        <Nav.Link href="/home"> HOME</Nav.Link>
                        <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
                        <Nav.Link href="/projects">PROJECTS</Nav.Link>
                        <Nav.Link href="/partnerwithus">
                            PARTNER WITH US{" "}
                        </Nav.Link>
                        <Nav.Link href="/galary"> GALLERY </Nav.Link>

                        <Nav.Link href="/careers">CAREERS </Nav.Link>

                        <Nav.Link href="/knowledgehub">
                            {" "}
                            KNOWLEDGE HUB{" "}
                        </Nav.Link>
                        <Nav.Link href="/contact"> CONTACT </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Index;
