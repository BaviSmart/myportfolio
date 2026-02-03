import React, { useEffect, useRef } from 'react';
import baviImage from '../assets/images/bavi.jpg';
import resume from '../assets/files/Bavithran_Resume.pdf';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const leftColumn = document.querySelector('.column.left');
            const rightColumn = document.querySelector('.column.right');

            leftColumn.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow');
            rightColumn.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slow');

            // Stop observing once animation is triggered
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          
          <div className="column left">
            <img src={baviImage} alt="bavi" />
          </div>
         
          <div className="column right">
            <h5>
              <span>Senior Full Stack Developer</span>
            </h5>
            <p>
              Senior Full Stack Developer with 3+ years of IT experience and 6 years of total professional experience, including Mechanical Engineering. Skilled in building high-performance web applications using Laravel, CodeIgniter, MERN stack (MongoDB, Express.js, React.js, Node.js), Java, and AWS. Experienced in cloud solutions, real-time data processing, performance optimization, RESTful APIs, CI/CD, microservices, and Agile development. Proficient in designing scalable, user-focused solutions from concept to deployment.
            </p>
            <a href={resume} download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
