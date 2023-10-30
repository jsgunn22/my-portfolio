import { useState } from "react";

function SocialBubble(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-12 w-12 rounded-full bg-opac-pri shadow-md transition duration-200 hover:shadow-lg  hover:scale-110 cursor-pointer"
    >
      <i
        className={`${props.icon} ${
          isHovered ? "text-war-5" : ""
        } text-neu-0 text-h3  mt-3 w-full text-center `}
      ></i>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="p-8 flex gap-4 absolute w-full bottom-0">
      <p className="text-lg mt-[14px] text-neu-0">Follow Me</p>
      <div className="flex gap-12">
        <SocialBubble icon="fa-brands fa-github" />
        <SocialBubble icon="fa-brands fa-linkedin" />
        <SocialBubble icon="fa-brands fa-instagram" />
      </div>
    </footer>
  );
}
