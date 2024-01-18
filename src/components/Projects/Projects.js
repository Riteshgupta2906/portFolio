import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Intern from "../Internship/Interns";
import store from "../../Assets/Projects/store.png";
import link from "../../Assets/Projects/link.png";
import room from "../../Assets/Projects/room.png";
import ecg from "../../Assets/Projects/ecg.png";
import yoga from "../../Assets/Projects/yoga.png";
import cig from "../../Assets/Projects/cig.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <Intern />
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecg}
              title="Cardio Watch"
              description="In this project, we engineered hardware components for heart rate monitoring and developed a Cardio-Watch WebApp. The web application offers real-time visualization of patient location and heart rate data, complemented by a high-performing Convolutional Neural Network (CNN) model achieving 97% accuracy in arrhythmia detection. This project seamlessly integrates hardware solutions with an intuitive web interface for enhanced heart health monitoring."
              ghLink="https://github.com/Siddhant0507Shekhar/CardioWatch---Live-ECG-Web-App"
              demoLink="https://www.youtube.com/watch?v=Nr-_HOhATIs"
              skillUsed="IOT Programming, Deep Learning, Python, ReactJs, NodeJs , DataBase "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cig}
              title="CIG Website"
              description=" I'm part of the Corporate Interaction Group (CIG) at IIT Roorkee, where we organize cool stuff like corporate talks ,industrial trips and projects for everyone at IITR. A few months back, we the web development team at CIG took charge of building our group's website. My job was to make it look good and work smoothly, so it can show off all the awesome things we do in CIG and be super helpful for our fellow IITR friends."
              ghLink="https://github.com/Riteshgupta2906/CigFrontEnd"
              demoLink="https://cig.onrender.com/"
              skillUsed="HTML, CSS, JavaScript, ReactJs, Node.js, MongoDB, REST API, Git "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              title="rkgStore"
              description="
              The rkgStore website, a dynamic e-commerce platform crafted with React for the frontend and powered by Node.js and Firebase on the backend. This project enables users to seamlessly log in, explore a diverse range of products, add items to their cart, and complete the checkout process. "
              ghLink="https://github.com/Riteshgupta2906/Ecommerce"
              demoLink="https://drive.google.com/file/d/13TN_opKlYE4cdZ6KC_4vB1lEpqxK5CTV/view?usp=sharing"
              skillUsed="HTML, CSS, JavaScript, React.js, Figma, Firebase"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yoga}
              title="Yoga App"
              description="The application features a user-friendly Register tab for Yoga Class, where individuals provide essential details such as name, age, batch, gender, and email. A seamless request mechanism verifies user existence, creating a new user if necessary, and transitions to the User Dashboard upon successful registration. Within the User Dashboard, users access a hub displaying their basic information, enabling seamless payments, and supporting batch changes. The admin portal offers comprehensive visibility into registered user data."
              ghLink="https://github.com/Riteshgupta2906/clientFlexMoney"
              demoLink="https://yoga-btv3.onrender.com/"
              skillUsed="HTML, CSS, JavaScript, ReactJs, Node.js, PostGreSQL, REST API, Git, Database Designing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={link}
              title="Link Tree"
              description="
              Introducing Link Tree, a cool web app I built! It's like a digital organizer for all your favorite media links. I used ReactJS for the look and feel, NodeJS to handle the behind-the-scenes stuff, and MongoDB to store everything neatly. You can easily create, update, and delete different buckets to organize your links. What's neat is that you can even play your videos right there in the app! And to keep things safe, I added user authentication with Firebase. It's a fun project that brings together different technologies to make managing your links a breeze!"
              ghLink="https://github.com/Riteshgupta2906/linkStore"
              demoLink="https://youtu.be/pgwF0nnDvHI"
              skillUsed="HTML, CSS, JavaScript, ReactJs, Node.js, MongoDB, REST API, Git, Database Designing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={room}
              title="Room Automation"
              description="Our project, aimed at enhancing the convenience and control of electrical appliances in any  room, represents a integration of IoT technology and user-friendly interfaces .Central to our project is a React Web App, developed to provide users with a interface for managing their electrical devices. Leveraging REST API calls, our system establishes communication between the web app and the IoT devices, ensuring real-time control and monitoring capabilities. We have successfully enabled compatibility with voice-controlled platforms such as Google Home, Google Assistant, and Alexa. Users can now effortlessly manage electronic devices through voice commands or mobile apps."
              ghLink="https://github.com/Riteshgupta2906/Room-Automation"
              skillUsed="IOT Programming, ReactJs, NodeJs, DataBases, RestApi "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
