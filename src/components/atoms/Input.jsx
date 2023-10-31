export default function Input({ label }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        className="border-2 rounded-md bg-neu-0 border-neu-5 focus:border-pri-5 focus:outline-none p-3 w-full"
        placeholder="Jeffrey"
      ></input>
    </div>
  );
}
