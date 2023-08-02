import { useState } from "react";
import HeadingReusableCode from "../../utils/HeadingReusableCode";
import ReusableButton from "../../utils/ReusableButton";
import ReusableInput from "../../utils/ReusableInput";
import DesignBackgroundImage2 from "../svgs/DesignBackgroundImage2";
import ContactUsImage from "../svgs/ContactUsImage";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const onSubmitForm = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      title,
      message,
    };
    alert(JSON.stringify(data));
    console.log("hello");
    setName("");
    setEmail("");
    setTitle("");
    setMessage("");
  };
  return (
    <div>
      <div className="h-20 p-10 w-20 hidden md:block relative right-20 top-36">
        <DesignBackgroundImage2 />
      </div>
      <div className="font-fira p-1 xs:p-4 mt-4 sm:px-12 md:px-[65px] lg:px-[142px] flex flex-col">
        <HeadingReusableCode name="Contact" />
        <div className="mt-4 md:flex md:items-center space-x-6 justify-around">
          <form onSubmit={onSubmitForm} className="space-y-3 order-2">
            <div className="space-y-3 md:space-y-0 md:flex md:space-x-3">
              <ReusableInput
                type="text"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <ReusableInput
                type="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <ReusableInput
              type="text"
              placeholder="Title"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
            <textarea
              className="bg-transparent border p-2 w-full outline-blue-500 text-white"
              rows={5}
              placeholder="Message"
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            <ReusableButton type="submit" name="Send" className="px-3 mt-2" />
          </form>
          <div className="contact-image">
            <ContactUsImage />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
