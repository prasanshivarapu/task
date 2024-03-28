import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./style.css";

function Projects() {
    const projects = [
        "Pedda Amberpet",
        "Reserve",
        "Iconia",
        "The One",
        "Greenfield at Kommireddypally",
        "Greenfield Nandipet",
        "Greenfield Forever",
        "Video Intro",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex, projects.length]);

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Projects</h2>
            <div className="train-container">
                <div
                    className="train"
                    style={{
                        transform: `translateX(-${
                            currentIndex * (100 / Math.min(projects.length, 5))
                        }%)`,
                    }}
                >
                    {projects.map((project, index) => (
                        <div className="train-card" key={index}>
                            <h3>{project}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Projects;
