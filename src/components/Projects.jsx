import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import civilImage from '../assets/images/civil.jpg';
import portfolioImage from '../assets/images/Portfolio.jpg';
import beedesk from '../assets/images/logobackgrey.jpg';
import skyhms from '../assets/images/skyhms.png';
import mis from '../assets/images/mis_bg.png';
import bkgengine from '../assets/images/bookingengine.jpg';

const Projects = () => {
  useEffect(() => {
    import('wowjs').then((WOWModule) => {
      const WOW = WOWModule.WOW || WOWModule.default;
      new WOW({ live: false }).init();
    });
  }, []);

  // Handle click for all projects
  const handleClick = (event, projectName) => {
    event.preventDefault();
    const links = {
      "M Construction": 'https://tomato-silvana-70.tiiny.site/',
      "MIS Mobile App": 'https://svr1-app2.skyhms.in/mob_login/?deviceid=12ba9f62-a459-4497-86e5-c0911516620d&&userid=5385&edata=',
      "SKYHMS": 'https://devnew.skyhms.in/reservation/newfoe/?module=HKG&dbcon=SWJYempuQWY2ZHc0bFMwekJnVFVhdmo2N3FPVFVWSjlNTTJJdW1TaXBqL1hpdW9VVzdQLzhEeXJGS2RhYjE5VXR1MWhaYnZkK1p2RXpjN3ZJcXVTV25hbVNSRUdQN0xjdzcwRnh0TDNEZzUrQXZmSXNidWZxU0k2a29OR2lQUFNkQTg1SFk1TGUrNjN1VCsxTWVmdlFKVVU1UUQwOW5hbXVoZDdKNDVIRFZVPQ==&userid=9&cmpid=8&propid=13',
      "BEEDESK": 'https://beedesk.skyhms.in/beedesk/adminuser?isadminuser=1',
      "BOOKING ENGINE": 'https://devnew.skyhms.in/bookings/bookapi?apikeys=D3v3lop'
    };
    if (links[projectName]) window.open(links[projectName], '_blank');
  };

  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="project-content">
          {/* MIS Mobile App */}
          <div className="card wow animate__animated animate__fadeInRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="img-wrapper">
              <img className="inner-img mis_app" src={mis} width="auto" height="100%" alt="MIS Mobile App" />
              <div className="overlay">
                <div className="btn">
                  <a href="#" onClick={(e) => handleClick(e, "MIS Mobile App")} target="_blank" rel="noopener noreferrer">
                    <i><FaArrowRight className="fa-arrow-right" /></i>
                  </a>
                </div>
                <h5>MIS Mobile App</h5>
              </div>
            </div>
          </div>

          {/* SKYHMS */}
          <div className="card wow animate__animated animate__fadeInRight" data-wow-duration=".5s" data-wow-delay="1s">
            <div className="img-wrapper">
              <img className="inner-img hascover skyhms" src={skyhms} width="100%" height="auto" alt="SKYHMS" />
              <div className="overlay">
                <div className="btn">
                  <a href="#" onClick={(e) => handleClick(e, "SKYHMS")} target="_blank" rel="noopener noreferrer">
                    <i><FaArrowRight className="fa-arrow-right" /></i>
                  </a>
                </div>
                <h5>SKYHMS</h5>
              </div>
            </div>
          </div>

          {/* BEEDESK */}
          <div className="card wow animate__animated animate__fadeInRight" data-wow-duration=".5s" data-wow-delay="1s">
            <div className="img-wrapper">
              <img className="inner-img hascover beedesk" src={beedesk} width="100%" height="auto" alt="BEEDESK" />
              <div className="overlay">
                <div className="btn">
                  <a href="#" onClick={(e) => handleClick(e, "BEEDESK")} target="_blank" rel="noopener noreferrer">
                    <i><FaArrowRight className="fa-arrow-right" /></i>
                  </a>
                </div>
                <h5>BEEDESK</h5>
              </div>
            </div>
          </div>

          {/* BOOKING ENGINE */}
          <div className="card wow animate__animated animate__fadeInRight" data-wow-duration=".5s" data-wow-delay="1s">
            <div className="img-wrapper">
              <img className="inner-img hascover booking_engine" src={bkgengine} width="auto" height="100%" alt="BOOKING ENGINE" />
              <div className="overlay">
                <div className="btn">
                  <a href="#" onClick={(e) => handleClick(e, "BOOKING ENGINE")} target="_blank" rel="noopener noreferrer">
                    <i><FaArrowRight className="fa-arrow-right" /></i>
                  </a>
                </div>
                <h5>BOOKING ENGINE</h5>
              </div>
            </div>
          </div>

          {/* My Portfolio */}
          <div className="card wow animate__animated animate__fadeInRight" data-wow-duration=".5s" data-wow-delay=".6s">
            <div className="img-wrapper">
              <img className="inner-img hascover my_portfolio" src={portfolioImage} width="100%" height="100%" alt="My Portfolio" />
              <div className="overlay">
                <div className="btn">
                  <a href="#home" rel="noopener noreferrer">
                    <i><FaArrowRight className="fa-arrow-right" /></i>
                  </a>
                </div>
                <h5>My Portfolio</h5>
              </div>
            </div>
          </div>

          {/* M Construction */}
          <div className="card wow animate__animated animate__fadeInRight" data-wow-duration="500ms" data-wow-delay="0s">
            <div className="img-wrapper">
              <img className="inner-img hascover mconstruction" src={civilImage} width="100%" height="100%" alt="M Construction" />
              <div className="overlay">
                <div className="btn">
                  <a href="#" onClick={(e) => handleClick(e, "M Construction")} target="_blank" rel="noopener noreferrer">
                    <i><FaArrowRight className="fa-arrow-right" /></i>
                  </a>
                </div>
                <h5>M Construction</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
