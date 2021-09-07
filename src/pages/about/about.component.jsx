import React from "react";
import "./about.style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/img/profile/profile.jpg";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/*Profile pic*/}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image src={Profile} thumbnail fluid />
              </Row>
            </Col>
            {/*Description*/}
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                {/*description*/}
                Hi there! I am <strong>&nbsp;Bijit Deb</strong>
                <br />A passionate programmer and a Teacher, born and brought up
                in Bangladesh. I am a Full Stack Web Developer with React.js,
                Redux, PHP, Laravel, and Mysql as my tech stack.
                <br />
                Now I am a final year student of 'Computer Science and
                Engineering'.
                <br />
                Working with the clients, my goal is always driven towards
                providing amazing experience with the best level of quality and
                service to them.
                <br />
                Along with that, I also help people as a COACH on their journey
                of becoming a good programmer.
                <br />I love learning about new technologies, what problems are
                they solving and How can I use them to build better and scalable
                products.
                <br /> <br />
              </Row>
              <Row className="info">
                {/*buttons*/}

                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-secondary">
                        Let's talk
                      </Button>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://github.com/bijit027"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/bijit-deb-7b7a351a6/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-warning">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
