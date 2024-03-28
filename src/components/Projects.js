import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { CgProfile } from "react-icons/cg";
import "./style.css";

function Testimonials() {
    return (
        <Container className="my-5 m3 ">
            {/* <h2 className="text-center">TESTIMONIALS</h2> */}
            <Carousel className="cau">
                <Carousel.Item>
                    <Card className="text-center m2">
                        <Card.Body>
                            {" "}
                            <img className="simage" src="./images.png" />
                            <Card.Text>
                                Best real estate company for investment purposes
                                in approved layouts with fabulous offers from
                                the company.
                            </Card.Text>
                            <Card.Title>Anand Mishra</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Kompally, Hyderabad
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="text-center m2">
                        <Card.Body>
                            {" "}
                            <img className="simage" src="./images.png" />
                            <Card.Text>
                                I am happy that I purchased a villa with
                                Primeland Group because the quality of materials
                                they used is very great and long-lasting.
                            </Card.Text>
                            <Card.Title>Srinivas Rao</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Kondapur, Hyderabad
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="text-center m2">
                        <Card.Body>
                            {" "}
                            <img className="simage" src="./images.png" />
                            <Card.Text>
                                Really impressed by the customer service team,
                                they are extremely friendly and always helpful
                                for a picky buyer like me.
                            </Card.Text>
                            <Card.Title>Pradeep Kumar</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Indra Nagar, Bangalore
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Testimonials;
