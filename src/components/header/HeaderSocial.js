import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/aryanaman/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/aryanaman" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/amanaryan.iiitk" target="_blank">
        <FaFacebookSquare />
      </a>
    </div>
  );
};

export default HeaderSocial;
