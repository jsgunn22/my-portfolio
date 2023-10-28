import Button from "../atoms/button";
import proficiencies from "../../../proficiencyLogos";

function ProficiencyBubbles() {
  const profLogos = [];
  for (let i = 0; i < 6; i++) {
    profLogos.push(proficiencies[i]);
  }

  console.log(profLogos);
  return (
    <div className="h-full w-full flex py-4 px-6 gap-x-[-12px]">
      {profLogos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.logo}
          className="h-10 rounded-full gap-[8px]"
        />
      ))}
      <div className="rounded-full bg-neu-0 h-10 w-10">
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
