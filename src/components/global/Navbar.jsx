// import Button from "../atoms/button";
import { Link, useLocation } from "react-router-dom";
import proficiencies from "../../../proficiencyData";
import React, { useState } from "react";
import Button from "../atoms/button";

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
  return (
    <div className="px-8 pt-[26px] transition duration-200 hover:scale-110">
      <Link
        to={props.to}
        className="text-lg text-neu-0 pt-[26px] whitespace-nowrap	transition duration-200 hover:scale-110 cursor-pointer"
      >
        {props.label}
      </Link>
    </div>
  );
}

function Navbar() {
  const currentPage = useLocation().pathname;
  console.log(currentPage);
  return (
    <nav className={`h-[72px] flex absolute z-10 w-screen `}>
      <div className="w-full h-full py-4 px-8 flex ">
        <Button
          icon="fa-solid fa-download"
          label="Download Jeffrey's Resume"
          action={downloadResume}
        />
      </div>
      <div className="flex">
        <NavBtn label="ABOUT ME" to="/" />
        <NavBtn label="PORTFOLIO" to="/Portfolio" />
        <NavBtn label="RESUME" to="/RESUME" />
        <NavBtn label="CONTACT" to="/Contact-Me" />
      </div>
      <ProficiencyBubbles />
    </nav>
  );
}

export default Navbar;
