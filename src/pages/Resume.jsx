import proficiencies from "../../proficiencyData";

function Bubble(props) {
  return (
    <div className="bg-opac-pri w-10 h-10 rounded-full shadow-md flex items-center justify-center">
      <i className={`${props.icon} text-h3  text-pri-3`}></i>
    </div>
  );
}

function SectionHeader(props) {
  return (
    <div className="mb-4">
      <div className="flex mb-2 ">
        <Bubble icon={props.icon} />
        <h1 className="ml-4 text-h1 font-black text-neu-0 max-w-2xl ">
          {props.heading}
        </h1>
      </div>
      <p className="text-lg text-neu-0 max-w-2xl text-left">
        {props.description}
      </p>
    </div>
  );
}

function ProfCard(props) {
  return (
    <div className="w-full min-w-[200px] bg-neu-9 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300 pb-2">
      <img src={props.img}></img>
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
      <div className="px-20 py-6 max-w-7xl mx-auto">
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
  const designProf = proficiencies.filter((item) => item.skill === "uiDesign");
  return (
    <>
      <div
        className="overflow-y-auto scroll-auto text-center"
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
          title="Front End Development"
          skillDescription="Lorem Ipsum"
        />
      </div>
    </>
  );
}
