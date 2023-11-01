import Button from "../components/atoms/button";

export default function AboutMe() {
  return (
    <>
      <div
        className=" flex items-center overflow-x-clip"
        style={{ height: "calc(100vh - 72px - 12px)", paddingTop: "72px" }}
      >
        {/* text area */}
        <div className="w-full ml-20">
          <div className="sm:w-sm md:w-md lg:w-lg w-5/12 mb-6">
            <h1 className="mb-1 text-[64px] font-black text-neu-0 leading-[75px] ">
              Jeffrey Gunn
            </h1>
            <div className="flex text-pri-3 gap-1 mb-6">
              <h3 className="text-h3 font-bold">UI Design</h3>
              <h3 className="text-h3 font-bold">-</h3>
              <h3 className="text-h3 font-bold">Web Development</h3>
            </div>
            <p className="text-lg text-neu-0">
              I started my career in the tech industry in 2018 when I took on
              the role of a UI design intern at a small start up company where I
              became immersed in the technology and process of building
              software. Over time I had begin to learn more about and
              participate in other roles in the development process like QA,
              Product Ownership, and Project Management.
              <br></br>
              <br></br>
              As my role progressed into a UI production team lead I learned to
              manage large projects, striving to meet or beat deadlines.
              <br></br>
              <br></br>
              In 2023 I enrolled in a full stack coding bootcamp course to learn
              more about the engineering side of software developement. I excell
              in problem solving. Having several years of experience in UI
              Design and dynamic feature flows enhance my understanding of
              requirements and what it takes to fulfill AC.
            </p>
          </div>
          {/* button group */}
          {/* <div className="flex gap-4">
            <Button label="My Work" />
            <Button
              label="Email Me"
              style="bg-inherit bg-pri-9 border-pri-1 border-2 text-pri-1 hover:bg-pri-5"
            />
          </div> */}
        </div>
        <div
          className={`absolute  min-h-[768px] w-screen overflow-clip flex items-center z-0 `}
          style={{ maxHeight: "calc(100vh - 72px - 112px)", zIndex: "0" }}
        >
          <div className=" right-[624px] bottom-[424px] absolute  w-[200px] h-[200px] shadow-sm  rounded-full bg-opac-pri"></div>
          <div className="right-[800px] absolute w-[100px] h-[100px] shadow-sm  rounded-full bg-opac-pri"></div>
          <div className="right-[720px] bottom-32 absolute w-[56px] h-[56px] shadow-sm  rounded-full bg-opac-pri"></div>
          <div className="-right-20 -bottom-20 absolute w-[656px] h-[656px] inset shadow-sm  rounded-full bg-opac-pri "></div>
          <img
            src="assets/images/profile-alt.png"
            className="right-[304px] bottom-60 absolute rounded-full shadow-xl w-[400px] "
          ></img>
        </div>
      </div>
    </>
  );
}
