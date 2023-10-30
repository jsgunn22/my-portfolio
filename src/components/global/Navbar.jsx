import Button from "../atoms/button";
import proficiencies from "../../../proficiencyLogos";
import React, { useState } from "react";

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
        className={`absolute  -ml-6 bg-neu-0 p-1.5  rounded-md pt-7 max-w-[200px] top-10 ${
          ishovered ? "block" : "hidden"
        }`}
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
    <div className="h-full w-full flex py-4 pl-12 px-6 ">
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
          className="rounded-full bg-neu-0 h-10 w-10 relative -ml-6 shadow-md transition duration-200 hover:scale-125 cursor-pointer"
          style={{ zIndex: overflowIsHovered ? 1000 : 0 }}
          onMouseEnter={handleOverflowMouseEnter}
          onMouseLeave={handleOverflowMouseLeave}
        >
          <h1 className="text-h1 text-pri-5 h-full w-full text-center ">+</h1>
        </div>
        {/* hidden card */}
        <div
          style={{ zIndex: 999 }}
          className={`absolute  -ml-9 bg-neu-0 p-1.5  text-med rounded-md pt-7 w-fit w-[128px] top-10 ${
            overflowIsHovered ? "block" : "hidden"
          }`}
        >
          {proficiencies.map((item, index) =>
            index >= 6 ? <p>{proficiencies[index].name}</p> : ""
          )}
        </div>
      </div>
    </div>
  );
}

function NavBtn(props) {
  return (
    <div className="px-8">
      <p className="text-lg text-neu-0 pt-[26px] whitespace-nowrap	transition duration-200 hover:scale-110 cursor-pointer">
        {props.label}
      </p>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="h-[72px] flex">
      <ProficiencyBubbles />
      <div className="flex">
        <NavBtn label="ABOUT ME" />
        <NavBtn label="PORTFOLIO" />
        <NavBtn label="CONTACT" />
      </div>
      <div className="w-full h-full py-4 px-8 flex justify-end">
        <Button label="Resume" style="ml-auto bg-pri-1" />
      </div>
    </nav>
  );
}

export default Navbar;
