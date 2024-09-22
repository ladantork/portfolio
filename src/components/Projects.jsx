import React from 'react';
import projectImage from '../assets/NC-NEWS.png';
import projectImage1 from '../assets/TETRIPLAN.png';
import Card from "./card"

function Projects() {
  return (
    <div className="projects-container">
      <div className="project">
        <div className="project-content">
          <div className="project-description">
            <Card
              title2="Solo Project"
              content="This front-end application is the result of a full-stack project that started with the creation of the NC News REST API for the back end, which I completed a week before developing the front end.
            
              Built with the ReactJS framework, Node.js, and vanilla CSS, the project utilizes Axios, a browser-compatible HTTP client, to interact with the API.
          
              The application was planned, designed, and developed in a week during the Northcoders Software Engineering Bootcamp."
            />
          </div>
         

          <img src={projectImage} alt="NC-NEWS" className="project-image" />
          
        </div>
      </div>

      <div className="project">
        <div className="project-content">
          <div className="project-description">
            <Card
              title2="Group Project"
              content="For our group project, we developed a full-stack desktop productivity application that leverages AI features for enhanced functionality.
         
               The front end of the application is built using Angular, providing a dynamic and responsive user interface.
            
               For authentication, we integrated Firebase to enable Google authentication alongside traditional email login.
               
               On the backend, we utilized Node.js with Express for the server-side logic and MongoDB as our database to handle data storage and retrieval efficiently."
            />
          </div>
          <img src={projectImage1} alt="TETRIPLAN" className="project-image" />
        </div>
      </div>
     
    </div>
  );
};

export default Projects;

