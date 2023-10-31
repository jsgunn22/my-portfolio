import { useState } from "react";
import { useLocation } from "react-router-dom";

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
      <a href={props.social} target="_blank">
        <i
          className={`${props.icon} ${
            isHovered && "text-war-5"
          } text-neu-0 text-h3  mt-3 w-full text-center `}
        ></i>
      </a>
    </div>
  );
}

export default function Footer() {
  const currentPage = useLocation().pathname;
  return (
    <footer
      className="p-4 flex gap-4  absolute w-full bottom-0"
      style={{
        background:
          currentPage !== "/"
            ? "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%)"
            : "",
      }}
    >
      <p className="text-lg mt-[14px] text-neu-0">Follow Me</p>
      <div className="flex gap-12">
        <SocialBubble
          icon="fa-brands fa-github"
          social="https://github.com/jsgunn22"
        />
        <SocialBubble
          icon="fa-brands fa-linkedin"
          social="https://www.linkedin.com/in/jeffrey-gunn-054451156/"
        />
        <SocialBubble
          icon="fa-brands fa-instagram"
          social="https://www.instagram.com/fate_worse_than_jeff/"
        />
      </div>
    </footer>
  );
}
