import { useState } from "react";
import { BeatLoader } from "react-spinners";
import HeadingReusableCode from "../../utils/HeadingReusableCode";
import ReusableButton from "../../utils/ReusableButton";
import ReusableInput from "../../utils/ReusableInput";
import DesignBackgroundImage2 from "../svgs/DesignBackgroundImage2";
import ContactUsImage from "../svgs/ContactUsImage";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [apiStatus, setApiStatus] = useState({
    status: constApiStatus.initial,
    errorMsg: null,
  });

  const onSubmitForm = async (event) => {
    event.preventDefault();
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
    const contactData = {
      name: name,
      email: email,
      title: title,
      message: message,
    };

    try {
      const apiUrl =
        "https://portfoli-projects-api-production.up.railway.app/contact-details";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      };
      const response = await fetch(apiUrl, options);
      if (response.ok) {
        setApiStatus((prev) => ({
          ...prev,
          status: constApiStatus.success,
        }));
        setName("");
        setEmail("");
        setTitle("");
        setMessage("");
      } else {
        setApiStatus((prev) => ({
          ...prev,
          errorMsg: "Please Enter Valid Details",
          status: constApiStatus.failure,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderButton = () => {
    const { status } = apiStatus;
    switch (status) {
      case constApiStatus.initial:
        return (
          <ReusableButton type="submit" name="Send 📩" className="px-3 mt-2" />
        );
      case constApiStatus.success:
        return (
          <ReusableButton
            type="submit"
            name="Success ✅"
            className="px-3 mt-2 bg-green-300"
          />
        );
      case constApiStatus.failure:
        return (
          <ReusableButton
            type="submit"
            name="Fail ❌"
            className="px-3 mt-2 bg-red-300"
          />
        );
      case constApiStatus.inProgress:
        return (
          <ReusableButton
            type="submit"
            className="px-2 flex flex-col items-center justify-center"
            name={<BeatLoader size={20} color="#4dd4db" />}
          />
        );
      default:
        break;
    }
  };

  return (
    <div id="contact">
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
              className="bg-transparent border p-2 w-full outline-blue-500 text-white rounded-md focus:bg-gray-800"
              rows={5}
              placeholder="Message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
            {renderButton()}
            <p className="text-red-500">
              {apiStatus.errorMsg ? apiStatus.errorMsg : null}
            </p>
          </form>

          <div className="contact-image flex flex-col items-center">
            <ContactUsImage className="w-full xs:w-[280px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
