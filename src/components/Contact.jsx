import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';


function Contact(){
  return (
    <div>
      <h1>Contact</h1>
      <p>You can find all my contact details in my CV, which is available for download <a href="https://docs.google.com/document/d/177J-pyzJTHiKS-hGjSrgEFrWuuRhTPCKGpd3gjmg4ao/edit?usp=sharing"target="_blank" rel="noopener noreferrer" className="cv-link">here</a>.</p>
      <p>Alternatively, you can reach out to me through any of the contact methods listed below:</p>
      <ul className="contact-list">
        <li>
        <a href="mailto:ladantorkzaban0@gmail.com" className="contact-link">
        <FontAwesomeIcon icon={faEnvelope} size="2x" className="fa-icon" /> 
        
        </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
