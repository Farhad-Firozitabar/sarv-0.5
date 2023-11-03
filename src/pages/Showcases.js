import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const websites = [
  {
    name: "Website 1",
    image: "./benny.png",
    description: "This is a brief description of Website 1.",
  },
  {
    name: "Website 2",
    image: "./farhadJourney.png",
    description: "This is a brief description of Website 2.",
  },
  {
    name: "Website 3",
    image: "./cafe156.png",
    description: "This is a brief description of Website 3.",
  },
  {
    name: "Website 4",
    image: "./RE.png",
    description: "This is a brief description of Website 4.",
  },
];
const securityServices = [
  {
    title: "Penetration Testing and Reporting",
    description:
      "We simulate attacks on your systems and networks to identify security vulnerabilities that could be exploited by attackers. We then provide you with detailed reports on our findings, along with recommendations for remediation.",
  },
  {
    title: "Security Consulting",
    description:
      "We help our clients develop and implement comprehensive security strategies, taking into account their unique needs and requirements. We also provide ongoing security consulting services to help our clients stay up-to-date on the latest security threats and best practices.",
  },
  {
    title: "Vulnerability Management",
    description:
      "We help our clients identify and remediate vulnerabilities in their systems and networks. We use a variety of vulnerability scanning and assessment tools, and we can also help our clients implement vulnerability management programs.",
  },
];

const Showcase = () => {
  return (
    <div>
    <Container className="mt-5">
      <Row className="justify-content-center">
        {websites.map((website, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <Card
              style={{
                backgroundColor: "black",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.7)";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                  paddingTop: "56.25%", // 16:9 aspect ratio
                  position: "relative",
                }}
              >
                <Card.Img
                  src={process.env.PUBLIC_URL + website.image}
                  alt={website.name}
                  className="img-fluid"
                  style={{
                    objectFit: "cover",
                    transform: "scale(1)",
                    transition: "transform 0.2s",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-white">{website.name}</Card.Title>
                <Card.Text className="text-white">{website.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="mt-5 text-white">
        <Row>
          <Col>
            <h2 className="text-center">Our Security Services</h2>
            <p className="text-center">
              At Sarv, we understand that security is essential for any business. That's why we offer a comprehensive range of security services to help our clients protect their data and systems from the ever-growing threat landscape.
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          {securityServices.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card
                className="security-card"
              >
                <Card.Body>
                  <Card.Title className="text-white text-center">{service.title}</Card.Title>
                  <br></br>
                  <Card.Text className="text-white">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Showcase;
