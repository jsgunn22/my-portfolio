import Input from "../components/atoms/input";

export default function ContactMe() {
  return (
    <>
      <div className="text-center pt-12 ">
        <h1 className="text-h1 text-neu-0 font-black">Contact Me</h1>
        <p className="text-lg text-neu-0">
          Interested in learning more? Send me an email and let’s connect!
        </p>
      </div>
      <div className="w-7/12  bg-neu-0  mx-auto shadow-lg rounded-lg mt-6 p-10 flex flex-col gap-6">
        <Input label="Your Name" type="text" />
        <Input label="Your Email" type="email" />
      </div>
    </>
  );
}
