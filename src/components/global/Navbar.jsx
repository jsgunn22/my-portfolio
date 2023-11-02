// import Button from "../atoms/button";
import { Link, useLocation } from "react-router-dom";
import proficiencies from "../../proficiencyData";
import React, { useState } from "react";
import Button from "../atoms/Button";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "assets/resume.pdf";
  link.download = "resume.pdf";
  link.click();
};

function ProfBubble(props) {
  const zI = 60 - props.index * 10;

  const [ishovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-10 -ml-3 shadow-md hover:shadow-lg">
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={props.src}
        alt={props.name}
        className={`h-10 rounded-full relative -ml-3  transition duration-200 hover:scale-125 cursor-pointer`}
        style={{ zIndex: ishovered ? 1000 : zI }}
      />
      {/* hidden card */}
      <div
        style={{ zIndex: 999 }}
        className={`${
          ishovered ? "block h-30" : "hidden h-0"
        } relative -top-4  right-40 bg-neu-0 p-1.5 transition duration-200  rounded-md pt-7 w-[200px] `}
      >
        <h4 className="text-h4 font-bold text-neu-9 mb-1">{props.name}</h4>
        <p className="text-sm">{props.summary}</p>
      </div>
    </div>
  );
}

function ProficiencyBubbles() {
  // builds an array if first 6 proficiency logos
  const profLogos = [];
  for (let i = 0; i < 6; i++) {
    profLogos.push(proficiencies[i]);
  }

  const [overflowIsHovered, setOverflowIsHovered] = useState(false);

  const handleOverflowMouseEnter = () => {
    setOverflowIsHovered(true);
  };

  const handleOverflowMouseLeave = () => {
    setOverflowIsHovered(false);
  };

  return (
    <div className="h-full w-full flex py-4 pl-12 px-6 justify-end">
      {profLogos.map((logo, index) => (
        <ProfBubble
          key={index}
          src={logo.src}
          name={logo.name}
          index={index}
          summary={logo.shortDescription}
        />
      ))}
      {/* The following is for the overflow icon */}
      <div className="shadow-md hover:shadow-lg">
        <div
          className="rounded-full bg-neu-0 h-10 relative -ml-6 shadow-md transition duration-200 hover:scale-110 flex cursor-pointer text-pri-5 hover:text-pri-9"
          style={{ zIndex: overflowIsHovered ? 1000 : 0 }}
          onMouseEnter={handleOverflowMouseEnter}
          onMouseLeave={handleOverflowMouseLeave}
        >
          <h1 className="text-h1  h-full w-10 text-center ">+</h1>{" "}
          {/* converts the overlow into a button to nav to resume */}
          {/* {currentPage !== "/Resume" && (
            <Link
              to="/Resume"
              onClick={handleOverflowMouseLeave}
              className="text-h4 mt-3 mr-3 font-bold"
            >
              View My Resume
            </Link>
          )} */}
        </div>
        {/* hidden card */}
        <div
          style={{ zIndex: 999 }}
          className={`absolute top-10  right-4  bg-neu-0 p-1.5  text-med rounded-md pt-7 w-[128px]  ${
            overflowIsHovered ? "block" : "hidden"
          }`}
        >
          {proficiencies.map((item, index) =>
            index >= 6 ? <p key={index}>{proficiencies[index].name}</p> : ""
          )}
        </div>
      </div>
    </div>
  );
}

function NavBtn(props) {
  const currentPage = useLocation().pathname;
  return (
    <div className="px-8 pt-[26px] transition duration-200  hover:scale-105">
      <Link
        to={props.to}
        className={`text-lg text-neu-0 pt-[26px] whitespace-nowrap 	transition duration-200  cursor-pointer ${
          currentPage === props.to
            ? "text-war-5 "
            : "text-neu-0 hover:text-pri-1 active:text-pri-5"
        }`}
      >
        {props.label}
      </Link>
    </div>
  );
}

function NavBtnMobile(props) {
  return (
    <>
      <Link
        to={props.to}
        className="text-h4 text-neu-9 font-bold hover:text-war-5"
      >
        {props.label}
      </Link>
    </>
  );
}

function Navbar() {
  let screenWidth = window.innerWidth;

  const [mobileDropdown, setMobileDropdown] = useState(false);

  const handleMobileDropdown = () => {
    setMobileDropdown(!mobileDropdown);
  };

  return (
    <>
      {screenWidth >= "768" ? (
        <nav
          className={`h-[72px] flex absolute z-10 w-screen ${
            screenWidth >= "1024" ? "" : "bg-pri-9"
          }`}
        >
          <div className="w-full h-full py-4 px-8 flex ">
            <Button
              icon={`${screenWidth >= "1024" && "fa-solid fa-download"}`}
              label={`${
                screenWidth >= "1024"
                  ? "Download Jeffrey's Resume"
                  : "Jeffrey's Resume"
              }   `}
              action={downloadResume}
            />
          </div>
          <div className="flex">
            <NavBtn label="ABOUT ME" to="/" />
            <NavBtn label="PORTFOLIO" to="/Portfolio" />
            <NavBtn label="RESUME" to="/Resume" />
            <NavBtn label="CONTACT" to="/Contact-Me" />
          </div>
          {screenWidth >= "1280" && <ProficiencyBubbles />}
        </nav>
      ) : (
        <nav className="h-15 flex bg-pri-9 z-10 w-screen sticky top-0">
          <div className="p-2">
            <Button
              icon="fa-solid fa-download"
              label="Jeffrey's Resume"
              action={downloadResume}
            />
          </div>
          <div
            className="ml-auto h-15 w-15 py-4 px-5 items-center"
            onClick={handleMobileDropdown}
          >
            <i className="fa-solid fa-bars text-neu-0 h-6  active:text-war-5 text-h3"></i>
          </div>
          {mobileDropdown && (
            <div className="bg-neu-0 absolute right-2 top-12 rounded-md shadow-md flex flex-col py-4 px-6 gap-5">
              <NavBtnMobile label="ABOUT ME" to="/" />
              <NavBtnMobile label="PORTFOLIO" to="/Portfolio" />
              <NavBtnMobile label="RESUME" to="/RESUME" />
              <NavBtnMobile label="CONTACT" to="/Contact-Me" />
            </div>
          )}
        </nav>
      )}
    </>
  );
}

export default Navbar;
