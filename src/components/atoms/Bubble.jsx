export default function Bubble(props) {
  return (
    <div className="bg-opac-pri w-10 h-10 rounded-full shadow-md flex items-center justify-center">
      <i className={`${props.icon} text-h3  text-pri-3`}></i>
    </div>
  );
}
