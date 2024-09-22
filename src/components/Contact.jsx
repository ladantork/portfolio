import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSms} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import Card from "./card"


function Contact(){
  return (
    <div>
      <Card
  title="Contact"
  content={
    <>
      <p>
        You can find all my contact details in my CV, which is available for download{' '}
        <a
          href="https://docs.google.com/document/d/177J-pyzJTHiKS-hGjSrgEFrWuuRhTPCKGpd3gjmg4ao/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-link"
        >
          here
        </a>
        .
      </p>
      <p>
        Alternatively, you can reach out to me through any of the contact methods listed below:
      </p>
    </>
  }
/>

       <ul className="contact-list">
        <li>
        <a href="mailto:ladantorkzaban0@gmail.com" className="contact-link">
        <FontAwesomeIcon icon={faEnvelope} size="2x" className="fa-icon" /> {/* EMAIL Icon */}
        </a>
       
          <a href="sms:00447415965542" className="contact-link">
            <FontAwesomeIcon icon={faSms} size="2x" className="fa-icon" /> {/* SMS Icon */}
          </a>
       
          <a href="https://wa.me/447415965542" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="fa-icon" /> {/* WhatsApp Icon */}
          </a>
      
          <a href="https://www.linkedin.com/in/ladan-torkzaban-97867259/" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="fa-icon" /> {/* LinkedIn Icon */}
          </a>
     
          <a href="https://github.com/ladantork" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="fa-icon" /> {/* GitHub Icon */}
          </a>
        </li>
        </ul>
      
    </div>
  );
};

export default Contact;
