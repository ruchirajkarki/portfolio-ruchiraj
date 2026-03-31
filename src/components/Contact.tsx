import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/ruchirajkarki"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn - ruchirajkarki
              </a>
            </p>
            <p>
              <a href="mailto:contact@ruchirajkarki.com.np" data-cursor="disable">
                contact@ruchirajkarki.com.np
              </a>
            </p>
            <p>
              <a href="tel:+9779840715304" data-cursor="disable">
                +9779840715304
              </a>
            </p>
            <p>Kathmandu, Nepal (Open to remote and relocation)</p>
            <h4>Education</h4>
            <p>
              Bachelor's Degree in Computer Science (Currently Enrolled)
            </p>
            <p>University of the People (UoPeople)</p>
            <p>Student ID: S536788</p>
            <h4>Certifications</h4>
            <p>
              MERN Stack Development Course, Broadways Infosys - Apr 2024
            </p>
            <p>
              Software Engineer Intern, HackerRank - Aug 2024
            </p>
            <p>
              Frontend Developer (React), HackerRank
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ruchirajkarki"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ruchirajkarki"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.upwork.com/freelancers/ruchirajkarki"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Upwork <MdArrowOutward />
            </a>
            <a
              href="https://dashboard.bidmytrip.ai/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Bidmytrip <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ruchi Raj Karki</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
