import TextArea from "../components/atoms/TextArea";
import Input from "../components/atoms/input";
import Button from "../components/atoms/button";

export default function ContactMe() {
  return (
    <>
      <div className="text-center " style={{ paddingTop: "96px" }}>
        <h1 className="text-h1 text-neu-0 font-black">Contact Me</h1>
        <p className="text-lg text-neu-0 w-10/12 mx-auto">
          Interested in learning more? Send me an email and let’s connect!
        </p>
      </div>
      <div className="w-10/12 sm:w-8/12 md:w-7/12 lg:w-6/12  xl:w-5/12  2xl:w-5/12 bg-neu-0  mx-auto shadow-lg rounded-lg mt-6 p-10 flex flex-col gap-10">
        <Input label="Your Name" type="text" />
        <Input label="Your Email" type="email" />
        <TextArea label="message" />
        <Button label="Send Message" />
      </div>
    </>
  );
}
