import Button from "../atoms/button";
import proficiencies from "../../../proficiencyLogos";
import React, { useState } from "react";

function ProfBubble(props) {
  const [ishovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-10 -ml-3">
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={props.key}
        src={props.src}
        alt={props.alt}
        className={`h-10 rounded-full relative -ml-3 shadow-md hover:shadow-lg hover:scale-125 cursor-pointer`}
        style={{ zIndex: ishovered ? 1000 : 60 - props.key * 10 }}
      />
      <div
        className={`absolute  -ml-6 bg-neu-0 p-1 text-sm rounded-sm pt-6 top-10 ${
          ishovered ? "block" : "hidden"
        }`}
        // style={{ zIndex: 99 }}
      >
        <p>This is a test</p>
      </div>
    </div>
  );
}

function ProficiencyBubbles() {
  const profLogos = [];
  for (let i = 0; i < 6; i++) {
    profLogos.push(proficiencies[i]);
  }

  return (
    <div className="h-full w-full flex py-4 pl-12 px-6 ">
      {profLogos.map((logo, index) => (
        <ProfBubble key={index} src={logo.src} alt={logo.logo} />
      ))}
      <div
        className="rounded-full bg-neu-0 h-10 w-10 relative -ml-3 shadow-md hover:shadow-lg hover:scale-125 cursor-pointer"
        style={{ zIndex: 0 }}
      >
        <h1 className="text-h1 text-pri-5 h-full w-full text-center">+</h1>
      </div>
    </div>
  );
}

function NavBtn(props) {
  return (
    <div className="px-8">
      <p className="text-lg text-neu-0 pt-[26px] whitespace-nowrap	">
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
