import SectionHeader from "../components/global/SectionHeader";
import projects from "../projectData";

function ProfBubble({ img, key }) {
  console.log(img);
  return (
    <div
      className="shadow-md rounded-full overflow-clip w-8 -ml-2"
      style={{ zIndex: 60 - key * 10 }}
    >
      <img src={img}></img>
    </div>
  );
}

function ProfBubbleStack({ src }) {
  return (
    <div className="flex ml-2 mb-2">
      {src.map((item, index) => (
        <ProfBubble key={index} img={item.src} />
      ))}
    </div>
  );
}

function ProjectCard({ name, img, repo, link, prof, description }) {
  console.log(prof);
  return (
    <>
      <div
        className={`w-full min-w-[200px] bg-neu-9 rounded-lg  shadow-lg hover:scale-105 transition duration-300 pb-2 relative  `}
      >
        <div className="rounded-t-lg overflow-clip">
          <img src={img} className="w-full object-cover	 h-56"></img>
        </div>
        {/* labels */}
        <div className=" absolute -left-1 top-32  flex flex-col gap-2 ">
          {/* app name */}
          <div className="bg-pri-5 p-2 flex w-fit gap-2 text-neu-0 text-h3 rounded-r-sm">
            <a
              href={link}
              target="_blank"
              className="text-h3 h-full transition duration-200 hover:text-war-5"
            >
              <i className="fa-solid fa-arrow-up-right-from-square mt-0.5 mr-2"></i>
              {name}
            </a>
          </div>
          {/* repo link */}
          <div className=" text-neu-0 gap-1 flex bg-pri-5 w-fit rounded-r-sm">
            <a
              href={repo}
              target="_blank"
              className="mx-2 my-1 text-med transition duration-200 hover:text-war-5"
            >
              <i className="fa-brands fa-github mr-1"></i>
              Github
            </a>
          </div>
        </div>
        {/* description section */}
        <div className="p-4 pb-2 text-lg text-neu-0">
          <ProfBubbleStack src={prof} />
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default function Portfolio() {
  return (
    <>
      <div
        className="pt-[72px] w-screen"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div
          className="px-20 pb-28 pt-6 overflow-y-auto scroll-auto "
          style={{ height: "calc(100vh - 72px)" }}
        >
          <SectionHeader
            icon="fa-solid fa-briefcase"
            heading="Portfolio"
            description="Below is a collection of my favorite project I have created or contributed to."
          />
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 flex-wrap gap-10 max-w-7xl mx-auto">
            {projects.map((item, index) => (
              <ProjectCard
                key={index}
                name={item.name}
                img={item.img}
                repo={item.github}
                link={item.link}
                prof={item.proficiencies}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
