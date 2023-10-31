import Bubble from "../atoms/Bubble";

export default function SectionHeader(props) {
  return (
    <div className="mb-4 max-w-7xl mx-auto">
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
