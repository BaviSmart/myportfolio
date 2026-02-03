import React, { useEffect, useRef } from "react";
// https://boxicons.com/icons/nodejs?free=true&q=node&p=brands
import javascriptImg from "../assets/images/skills/javascript.svg";
import nodeImg from "../assets/images/skills/nodejs.svg";
import reactImg from "../assets/images/skills/react.svg";
import htmlImg from "../assets/images/skills/html5.svg";
import cssImg from "../assets/images/skills/css3.svg";
import bootstrapImg from "../assets/images/skills/bootstrap.svg";
import jqueryImg from "../assets/images/skills/jquery.svg";
import typescriptImg from "../assets/images/skills/typescript.svg";

import mongoImg from "../assets/images/skills/mongodb.svg";
import firebaseImg from "../assets/images/skills/firebase.png";
import expressImg from "../assets/images/skills/express-js.svg";
import phpImg from "../assets/images/skills/php.svg";
import laravelImg from "../assets/images/skills/laravel.svg";
import codeigniterImg from "../assets/images/skills/codeigniter.png";
import graphqlImg from "../assets/images/skills/graphql.svg";
import awsImg from "../assets/images/skills/aws.svg";

import mysqlImg from "../assets/images/skills/my-sql.svg";
import postgresqlImg from "../assets/images/skills/postgresql.svg";

import gitImg from "../assets/images/skills/git.svg";
import gihubImg from "../assets/images/skills/github.svg";
import dockerImg from "../assets/images/skills/docker.svg";

const skills = {
  Frontend: [
    { src: javascriptImg, title: "JavaScript", bgColor: '#111'},
    { src: reactImg, title: "React JS", bgColor: '#111'},
    { src: htmlImg, title: "HTML5", bgColor: '#fff'},
    { src: cssImg, title: "CSS3", bgColor: '#fff'},
    { src: bootstrapImg, title: "Bootstrap", bgColor: '#fff'},
    { src: jqueryImg, title: "jQuery", bgColor: '#fff'},
    { src: typescriptImg, title: "Typescript", bgColor: '#fff'},
  ],
  Backend: [
    { src: laravelImg, title: "Laravel", bgColor: '#fff'},
    { src: nodeImg, title: "Node JS", bgColor: '#fff'},
    { src: expressImg, title: "Express JS", bgColor: '#fff'},
    { src: codeigniterImg, title: "CodeIgniter", bgColor: '#fff'},
    { src: phpImg, title: "Php", bgColor: '#777bb3'},
    { src: graphqlImg, title: "Graphql", bgColor: '#fff'},
  ],
  Database: [
    { src: mysqlImg, title: "MySQL", bgColor: '#fff'},
    { src: postgresqlImg, title: "PostgreSQL", bgColor: '#fff'},
    { src: mongoImg, title: "Mongo DB", bgColor: 'rgb(35 44 35)'},
    { src: firebaseImg, title: "Firebase", bgColor: '#fff'},
  ],
  Tools: [
    { src: gitImg, title: "Git", bgColor: '#fff'},
    { src: gihubImg, title: "GitHub", bgColor: '#fff'},
    { src: awsImg, title: "AWS", bgColor: '#053742'},
    { src: dockerImg, title: "Docker", bgColor: '#fff'},
  ],
};

const SkillsPage = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillsItems = document.querySelectorAll(".skill-item");
            skillsItems.forEach((item, index) => {
              item.style.animationDelay = `${index * 0.1}s`;
              item.classList.add("animate__animated", "animate__zoomIn");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="max-width">
        <h2 className="title">My skills</h2>
        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category} className="skills-category">
            <h3 className="subheading">{category}</h3>
            <div className="skills-list">
              {skillsList.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon-wrapper" style={{ backgroundColor: skill.bgColor }}>
                    <img
                      src={skill.src}
                      alt={skill.title}
                      title={skill.title}
                      className="skill-icon"
                    />
                  </div>
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
