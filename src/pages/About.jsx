import Button from "../components/atoms/button";

export default function AboutMe() {
  return (
    <>
      <div
        className="px-20 flex items-center"
        style={{ height: "calc(100vh - 72px - 112px)" }}
      >
        {/* text area */}
        <div className="w-full">
          <div className="max-w-lg mb-6">
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
          <div className="flex gap-4">
            <Button label="My Work" />
            <Button
              label="Email Me"
              style="bg-inherit bg-pri-9 border-pri-1 border-2 text-pri-1 hover:bg-pri-5"
            />
          </div>
        </div>
        <div className="min-w-[656px] min-h-[656px] rounded-full bg-opac-pri relative -bottom-[68px] -right-[174px]"></div>
      </div>
    </>
  );
}
