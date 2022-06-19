// import React from "react";
// import CTA from "./CTA";
// import ME from "../../assets/mypict.png";
// import HeaderSocial from "./HeaderSocial";
// import "./Header.css";

// function Header() {
//   return (
//     <header>
//       <div className="container header_container">
//         <h5>Hello I'm</h5>
//         <h1>Aman Kumar</h1>
//         <h5 className="text-light">Full Stack Developer</h5>
//         <CTA />
//         <HeaderSocial />
//         <div className="me">
//           <img src={ME} alt="mypic" />
//         </div>

//         <a href="#contact" className="scroll_down">
//           Scroll Down
//         </a>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import CTA from "./CTA";
import ME from "../../assets/mypict.png";
import footerImg from "../../assets/footerImg1.png";
import HeaderSocial from "./HeaderSocial";
import Typical from "react-typical";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css";

function Header(props) {
  const { children } = props;
  return (
    <header>
      {children}
      <div className="container header_container">
        <div className="header-texts">
          <HeaderSocial />
          <h5>
            Hello I'm
            <span
              style={{
                marginLeft: "10px",
                fontSize: "1.2rem",
                color: "#31CAF5",
              }}
            >
              Aman Kumar
            </span>
          </h5>

          <div className="profile-detils-role">
            <span className="primary-text">
              <h1 className="role-text">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knock of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <CTA />
        </div>

        <div className="me">
          <img src={ME} alt="mypic" />
        </div>

        <Link
          // activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={2000}
        >
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </Link>
      </div>
      <footer className="footer">
        <svg
          viewBox="0 -20 700 110"
          width="100%"
          height="110"
          preserveAspectRatio="none"
        >
          <path
            transform="translate(0, -20)"
            d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
            fill="#CEB964"
          />
          <path
            d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z"
            fill="#091123"
          />
        </svg>
      </footer>
    </header>
  );
}

export default Header;
