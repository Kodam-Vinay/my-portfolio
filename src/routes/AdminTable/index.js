import { useEffect, useState } from "react";
import EachContact from "../../components/EachContact";
import { HashLoader } from "react-spinners";
import { API_URL } from "../../config";
import ReusableButton from "../../utils/ReusableButton";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const AdminTable = () => {
  const navigate = useNavigate();
  const [userContactDetails, setUserContactDetails] = useState({
    status: constApiStatus.initial,
    data: [],
    error: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setUserContactDetails((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
    const coockie = await Cookies.get("loginWebToken");
    try {
      const apiUrl = API_URL + "contacts/all";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${coockie}`,
        },
      };
      const res = await fetch(apiUrl, options);
      const jsonData = await res.json();
      if (res?.ok) {
        setUserContactDetails((prev) => ({
          ...prev,
          data: jsonData?.data,
          status: constApiStatus.success,
        }));
      } else {
        navigate("/error");
        setUserContactDetails((prev) => ({
          ...prev,
          error: "Error to fetch the data",
          status: constApiStatus.failure,
        }));
      }
    } catch (error) {
      navigate("/error");
    }
  };

  const onClickDelete = async (id) => {
    try {
      const apiUrl = API_URL + `contacts/${id}`;
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("loginWebToken")}`,
        },
      };
      await fetch(apiUrl, options);
      getData();
    } catch (error) {
      navigate("/error");
    }
  };

  const FailureView = () => {
    <div>error</div>;
  };
  const onClickLogout = () => {
    const response = window.confirm("Are You Sure You want to Logout");
    if (response) {
      Cookies.remove("loginWebToken");
      navigate("/admin-auth");
    }
  };
  const SuccessView = () => {
    return (
      <div className="p-2 font-sans flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">User Contact Details Table</h1>
          <ReusableButton
            name="Logout"
            className="self-end bg-gray-500 border-none"
            onClick={onClickLogout}
          />
        </div>
        <table className="mt-10 border table-auto w-full">
          <tbody>
            <tr className="bg-gray-300 add_table_border h-10">
              <th className="add_table_border w-[15%]">S.No</th>
              <th className="add_table_border w-[15%]">Name</th>
              <th className="add_table_border w-[15%]">Email</th>
              <th className="add_table_border w-[20%]">Title</th>
              <th className="add_table_border w-[35%]">Message</th>
              <th className="add_table_border w-[10%]">Date</th>
              <th className="add_table_border w-[10%]"></th>
            </tr>
            {userContactDetails?.data?.length > 0 &&
              userContactDetails?.data?.map((eachContact, index) => (
                <EachContact
                  number={index + 1}
                  key={eachContact._id}
                  contactDetails={eachContact}
                  onClickDelete={onClickDelete}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  };
  const RenderResults = () => {
    switch (userContactDetails.status) {
      case constApiStatus.inProgress:
        return (
          <div className="w-screen h-[80vh] flex items-center justify-center">
            <HashLoader className="m-auto" />
          </div>
        );
      case constApiStatus.success:
        return <SuccessView />;
      case constApiStatus.failure:
        return <FailureView />;
      default:
        return null;
    }
  };
  return <>{RenderResults()}</>;
};

export default AdminTable;
