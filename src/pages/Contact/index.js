import { useState } from "react";
import { BeatLoader } from "react-spinners";
import HeadingReusableCode from "../../utils/HeadingReusableCode";
import ReusableButton from "../../utils/ReusableButton";
import ReusableInput from "../../utils/ReusableInput";
import DesignBackgroundImage2 from "../../components/svgs/DesignBackgroundImage2";
import ContactUsImage from "../../components/svgs/ContactUsImage";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Contact = () => {
  const navigate = useNavigate();
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
      errorMsg: null,
    }));
    if (!name || !email || !title || !message) {
      setApiStatus((prev) => ({
        ...prev,
        status: constApiStatus.failure,
        errorMsg: "Please Enter The values",
      }));
    } else {
      const contactData = {
        name: name,
        email: email,
        title: title,
        message: message,
      };

      try {
        const apiUrl = API_URL + "contacts/upload";
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        };
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        if (response?.ok) {
          setApiStatus((prev) => ({
            ...prev,
            status: constApiStatus.success,
            errorMsg: null,
          }));
          setName("");
          setEmail("");
          setTitle("");
          setMessage("");
        } else {
          setApiStatus((prev) => ({
            ...prev,
            errorMsg: data?.message || "Please Enter Valid Details",
            status: constApiStatus.failure,
          }));
        }
      } catch (error) {
        navigate("/error");
      }
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
            isDisabledTrue={true}
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
                isDisabledTrue={apiStatus.status === constApiStatus.success}
              />
              <ReusableInput
                type="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                isDisabledTrue={apiStatus.status === constApiStatus.success}
              />
            </div>
            <ReusableInput
              type="text"
              placeholder="Title"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              isDisabledTrue={apiStatus.status === constApiStatus.success}
            />
            <textarea
              className="bg-transparent border p-2 w-full outline-blue-500 text-white rounded-md focus:bg-gray-800"
              rows={5}
              placeholder="Message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              disabled={apiStatus.status === constApiStatus.success}
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
