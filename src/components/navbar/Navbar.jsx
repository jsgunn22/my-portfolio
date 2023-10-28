import Button from "../atoms/button";
import proficiencies from "./proficiencies";

function ProficiencyBubbles() {
  console.log(proficiencies.test);
  return (
    <div className="h-full w-full">
      <h1>{proficiencies.test}</h1>
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
