import proficiencies from "../proficiencyData";
import SectionHeader from "../components/global/SectionHeader";

function ProfCard(props) {
  return (
    <div className="w-full min-w-[200px] bg-neu-9 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300 pb-2">
      <img src={props.img} className="w-full"></img>
      <div className="w-full px-6 my-2">
        <h2 className="text-h2 font-black text-neu-0 mb-2 text-left">
          {props.name}
        </h2>
        <p className="text-med text-neu-0 w-full text-left">
          {props.description}
        </p>
      </div>
    </div>
  );
}

function SkillSetSection(props) {
  const data = proficiencies.filter((item) => item.skill === props.skill);
  return (
    <>
      <div className="lg:px-20 sm:px-8 px-4 py-6 max-w-7xl mx-auto">
        <div>
          <SectionHeader
            icon={props.icon}
            heading={props.title}
            description={props.skillDescription}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-4">
            {data.map((p, index) => (
              <ProfCard
                key={index}
                name={p.name}
                description={p.description}
                img={p.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Resume() {
  const screenWidth = window.innerWidth;
  return (
    <>
      <div
        className="lg:pt-[72px]  w-screen "
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div
          className={`overflow-y-auto  scroll-auto text-center pb-28 ${
            screenWidth <= "640" ? "pt-4" : "pt-16"
          }`}
          style={{ height: "calc(100vh - 72px)" }}
        >
          <SkillSetSection
            skill="uiDesign"
            icon="fa-solid fa-lightbulb"
            title="UI Design"
            skillDescription="I started my UI Design career in 2018 at a start up company.  Working with a strong team I refined my design skills and became more than proficient in certail work stations like Figma and Sketch."
          />
          <SkillSetSection
            skill="frontEnd"
            icon="fa-solid fa-desktop"
            title="Front End Development"
            skillDescription="Lorem Ipsum"
          />
          <SkillSetSection
            skill="backEnd"
            icon="fa-solid fa-database"
            title="Back End Development"
            skillDescription="Lorem Ipsum"
          />
        </div>
      </div>
    </>
  );
}
