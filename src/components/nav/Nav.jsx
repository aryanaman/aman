// import React, { useState } from "react";
// import "./Nav.css";
// import CloseMenu from "../../assets/x.svg";
// import Menu from "../../assets/menu.svg";
// import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";
// import { AiOutlineMenu } from "react-icons/ai";
// function Nav() {
//   const [activeNav, setActiveNav] = useState("#");
//   const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick((click) => !click);
//   };
//   const handleCloseMenu = () => {
//     setClick(false);
//   };
//   return (
//     <nav style={{ display: "flex", justifyContent: "space-between" }}>
//       <a className="logo-text" href="#">
//         Aman
//       </a>
//       <div className={`${click} ? nav_container_active : nav_container`}>
//         <a
//           href="#"
//           onClick={() => setActiveNav("#")}
//           className={`options ${activeNav === "#" && "active"}`}
//         >
//           {/* <AiOutlineHome /> */}Home
//         </a>
//         <a
//           href="#about"
//           onClick={() => setActiveNav("#about")}
//           className={`options ${activeNav === "#about" && "active"}`}
//         >
//           {/* <AiOutlineUser /> */}About
//         </a>
//         <a
//           href="#experience"
//           onClick={() => setActiveNav("#experience")}
//           className={`options ${activeNav === "#experience" && "active"}`}
//         >
//           {/* <BiBook /> */} Experience
//         </a>
//         <a
//           href="#portfolio"
//           onClick={() => setActiveNav("#portfolio")}
//           className={`options ${activeNav === "#services" && "active"}`}
//         >
//           {/* <RiServiceLine /> */} Portfolio
//         </a>
//         <a
//           href="#contact"
//           onClick={() => setActiveNav("#contact")}
//           className={`options ${activeNav === "#contact" && "active"}`}
//         >
//           {/* <BiMessageSquareDetail /> */} Contact
//         </a>
//       </div>
//       <div className="mobile-menu" onClick={handleClick}>
//         {click ? (
//           <AiOutlineClose
//             style={{ color: "white", width: "30px", height: "30px" }}
//           />
//         ) : (
//           <AiOutlineMenu
//             style={{ color: "white", width: "30px", height: "30px" }}
//           />
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Nav;

import React, { useState } from "react";
// import { CloseMenu } from "../../assets/x.svg";
// import { MenuIcon } from "../../assets/menu.svg";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
// import { ReactComponent as Logo } from "../assets/logo.svg";
import "./Nav.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [activeNav, setActiveNav] = useState("#");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link onClick={scrollToTop} spy={true} smooth={true} duration={1000}>
            <a href="#">
              <h1 className="logo">Aman</h1>
            </a>
          </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
              spy={true}
              smooth={true}
              duration={1000}
            >
              <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" && "active"}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link
              to="about"
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
              duration={1000}
            >
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" && "active"}
              >
                About
              </a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link
              onClick={closeMobileMenu}
              to="experience"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" && "active"}
              >
                Experience
              </a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link
              onClick={closeMobileMenu}
              to="portfolio"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" && "active"}
              >
                Portfolio
              </a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link
              onClick={closeMobileMenu}
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" && "active"}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {/* <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            SIGN-UP
          </a>
        </li>
      </ul> */}
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <AiOutlineClose className="menu-icon" />
        ) : (
          <AiOutlineMenu className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Nav;
