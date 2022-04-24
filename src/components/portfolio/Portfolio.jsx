import React from "react";
import "./Portfolio.css";
import image1 from "../../assets/image1.jpg";

const data = [
  {
    id: 1,
    image: image1,
    title: "Project 1",
    github: "https://gihub.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: image1,
    title: "Project 1",
    github: "https://gihub.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: image1,
    title: "Project 1",
    github: "https://gihub.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: image1,
    title: "Project 1",
    github: "https://gihub.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: image1,
    title: "Project 1",
    github: "https://gihub.com",
    demo: "https://github.com",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((item) => {
          return (
            <article className="portfolio__item" key={item.id}>
              <div className="portfolio__item-image">
                <img src={item.image} alt="project1" />
              </div>
              <h3>{item.title}</h3>
              {console.log(item.title)}
              <div className="portfolio__item-cta">
                <a href={item.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={item.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
