import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "./Header.css";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/aryanaman/"
        target="_blank"
        style={{ marginRight: "10px" }}
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/aryanaman"
        target="_blank"
        style={{ marginRight: "10px" }}
      >
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/amanaryan.iiitk" target="_blank">
        <FaFacebookSquare />
      </a>
    </div>
  );
};

export default HeaderSocial;
