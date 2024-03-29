import React from "react";
import "./Portfolio.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/portfolioImg.jpg";
import image3 from "../../assets/project_img2.jpg";
import image4 from "../../assets/project_img4.jpg";
import image5 from "../../assets/project_img5.JPG";
const data = [
  {
    id: 1,
    image: image5,
    title: "Facebook Clone",
    github: "https://github.com/aryanaman/facebook-clone",
    demo: "https://facebook-clone-d1144.web.app/",
  },
  {
    id: 2,
    image: image2,
    title: "My Website",
    github: "https://github.com/aryanaman/aman",
    demo: "https://aryanaman.github.io/aman/",
  },
  {
    id: 4,
    image: image4,
    title: "Tenzies Game",
    github: "https://github.com/aryanaman/tenziesgame",
    demo: "https://aryanaman.github.io/tenziesgame",
  },
  {
    id: 3,
    image: image3,
    title: "Weather App",
    github: "https://github.com/aryanaman/weather_app",
    demo: "https://aryanaman.github.io/weather_app/",
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
                <img
                  src={item.image}
                  alt="project_img"
                  style={{ objectFit: "cover" }}
                />
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
