import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function Footer() {
    return (
        // <footer  text-light py-4 footer mt-0">
        <footer className="bg-dark text-light p-3 pt-5">
            <Container className="mt-0">
                <Row>
                    <Col md={7}>
                        <h5>Address:</h5>
                        <p>
                            1)My Home Hub, 7th Floor, Block 2, Madhapur,
                            Hitechcity Hyderabad, Telangana 500033. 2) BANGALORE
                            OFFICE: 40/1A, 1st floor, Basappa Complex, Lavelle
                            Road, behind Rotary Club, Bengaluru, Karnataka
                            560001
                        </p>
                        <a
                            className="mai"
                            href="mailto:info@primelandindia.com"
                        >
                            info@primelandindia.com
                        </a>
                    </Col>

                    <Col className="main3" md={5}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#facebook" className="text-light">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="/linkedin" className="text-light">
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="#instagram" className="text-light">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>{" "}
            <span className="main4">
                all rights reserved powered by
                <a
                    className="maii"
                    href="https://snaptics.agency"
                    target="_blank"
                >
                    snaptics
                </a>
            </span>
        </footer>
    );
}

export default Footer;
