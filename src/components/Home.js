import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./style.css";

function Home() {
    return (
        <div>
            <Container className="mb-5 mt-5">
                <h2 className="text-center mb-5">THE PRIMELAND MARK</h2>
                <Row className="border-bottom mt-5 mb-5  ">
                    <Col md={6} className="text-center m-auto mt-5 m1">
                        <p className="mt-3 mb-3">
                            We are passionate about what we do and we believe
                            that Real Estate Development can change the
                            landscape of the markets and also to the people’s
                            lives. We’re relentlessly focused on growth
                            opportunities to create increased value for
                            everyone.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img
                            src="./abc.jpg"
                            alt="Image1"
                            fluid
                            className="img-fluid"
                        />
                    </Col>
                </Row>
                <Row className="mt-5 mb-5  border-bottom">
                    <Col md={6}>
                        <img src="./c.jpg" alt="Image2" className="img-fluid" />
                    </Col>
                    <Col md={6} className="m1">
                        <p className="mt-3 mb-3">
                            We work with a purpose and the purpose is to create
                            value for everyone. At Primeland, we focus on
                            developing positive, smarter, and sustainable
                            communities to elevate the lifestyles for everyone.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5  border-bottom">
                    <Col md={6} className="m1">
                        <p className="mt-3 mb-3">
                            We believe that every customer would like to be
                            surrounded by the finer things in life; every
                            property we develop has been prudently considered,
                            thoughtfully planned, methodically designed, and
                            robustly built with a seasoned buyer in mind.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img src="./d.jpg" alt="Image3" className="img-fluid" />
                    </Col>
                </Row>
                {/* At Primeland, we focus on developing positive,
                                smarter, and sustainable communities to elevate
                                the lifestyles for everyone.
                        <div>
                            <img src="" />
                            <p>
                                At Primeland, we focus on developing positive,
                                smarter, and sustainable communities to elevate
                                the lifestyles for everyone.
                            </p>
                        </div>
                        <div>
                            <p>
                                We believe that every customer would like to be
                                surrounded by the finer things in life; every
                                property we develop has been prudently
                                considered, thoughtfully planned, methodically
                                designed, and robustly built with a seasoned
                                buyer in mind.
                                <img src="" />
                            </p>
                        </div>

                        <p>
                            Our commitment to our customers has been at the core
                            of what we do and have always placed a premium on a
                            collaborative and a “win-win” relationship.
                        </p>
                    </Col>
                </Row> */}
            </Container>
            <Container className="mb-5 mt-5 main6">
                <Row className="justify-content-center">
                    <Col md={4} className="mb-4">
                        <Card className="car">
                            <Card.Body className="car">
                                <Card.Title>25+ INDUSTRY EXPERIENCE</Card.Title>
                                <Card.Text>
                                    With 25+ years of industry experience, we're
                                    experts in our field. We've honed our
                                    skills, delivering top-notch solutions. Our
                                    track record speaks for itself. Trust us for
                                    unmatched expertise and results.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="car">
                            <Card.Body className="car">
                                <Card.Title>2K+ ACRES CRAFTED</Card.Title>
                                <Card.Text>
                                    With over 2,000 acres meticulously crafted,
                                    our projects redefine landscapes and
                                    lifestyles. Each acre is a testament to our
                                    dedication and innovation.We shape
                                    environments that inspire and endure.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4 ">
                        <Card className="car">
                            <Card.Body className="car">
                                <Card.Title>10K+ HAPPY CUSTOMERS</Card.Title>
                                <Card.Text>
                                    With a base of over 10,000 satisfied
                                    customers, our dedication to service and
                                    quality shines through. Each satisfied
                                    customer is a testament to our commitment to
                                    exceeding expectations.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
