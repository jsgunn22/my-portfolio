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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
