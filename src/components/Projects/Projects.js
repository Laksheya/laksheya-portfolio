import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shop_point from "../../Assets/Projects/shop_point.png";
import medico from "../../Assets/Projects/medico.png";
import chatify from "../../Assets/Projects/chatify.png";
import movix from "../../Assets/Projects/movix.png";
import luxcartFrontend from "../../Assets/Projects/luxcart-frontend.png"
import luxcartAdmin from "../../Assets/Projects/luxcart-admin.png"
import hostelBuddy from '../../Assets/Projects/hostelbuddy.png'
import shareme from '../../Assets/Projects/shareme.png'
import realone from '../../Assets/Projects/realone.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hostelBuddy}
              isBlog={false}
              title="HosteBuddy"
              description="A web application built with ReactJS, ExpressJS, and MongoDB, enables IIITK students to borrow items from peers. With 100+ active users, HostelBuddy facilitates item sharing through features like item search, request forms, owner approvals, and secure pick-up using OTP. It also includes automated email reminders for timely returns, ensuring a smooth borrowing experience."
              ghLink="https://github.com/Laksheya/hostelbuddy"
              demoLink="https://hostelbuddy-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shareme}
              isBlog={false}
              title="ShareMe"
              description="A photography-sharing platform where users can upload and showcase their work, engage with others through likes, comments, and shares, and save favorite photos to bookmarks. It fosters community interaction around photography, providing an engaging space for visual art enthusiasts. Built with ReactJS, Node.js, Express.js, and MongoDB."
              ghLink="https://github.com/Laksheya/shareme"
              demoLink="https://shareme-frontend-kappa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movix}
              isBlog={false}
              title="Movix"
              description="Movix is an innovative Single Page Web Application built with React and Redux, offering users a seamless and engaging movie exploration experience.With an intuitive and dynamic user interface, Movix allows users to search, discover, and explore a vast collection of movies from various genres, eras, and languages."
              ghLink="https://github.com/Laksheya/movix-app"
              demoLink="https://movix-app-iota-eight.vercel.app/explore/movie" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realone}
              isBlog={false}
              title="Realone"
              description="Designed for RealEvo Datatek, this landing page highlights their mission to innovate in the real estate industry. It captures their vision of seamless property transactions, emphasizes their data-driven solutions, and showcases the expertise of their diverse team. Key elements include sections on smart property tools, data insights, and streamlined processes, all with a focus on innovation, transparency, accessibility, and sustainability."
              // ghLink="https://movix-eta.vercel.app/"
              demoLink="https://www.realoneapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="Federated Learning for High-Yield Crop Classification"
              description="This project leverages federated learning and Swin Transformer models to predict optimal crop types for maximum yield while ensuring data privacy. By training models on local farm data (soil and weather factors), only activation values are shared with a central server, keeping raw data secure. The goal is to help farmers select crops proactively to prevent disease and increase yield, rather than reacting to issues later. Built with the Flower framework and PyTorch, the project also explores federated split learning for more flexible model training across decentralized networks."
              ghLink="https://github.com/Laksheya/classification-of-crops"
              // demoLink="https://doctorapp-xk2x.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
