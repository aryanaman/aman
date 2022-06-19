import React from "react";
import CV from "../../assets/Resume.pdf";
import "./Header.css";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download>
        <button className="btn btnDownload">Download CV</button>
      </a>
      <a href="#contact">
        <button className="btnHire">Hire Me</button>
      </a>
    </div>
  );
}

export default CTA;
