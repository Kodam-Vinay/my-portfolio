import { useEffect, useState } from "react";
import EachContact from "../../components/EachContact";
import { HashLoader } from "react-spinners";
import { CONTACT_API_URL } from "../../config";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const AdminTable = () => {
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
    try {
      const apiUrl = CONTACT_API_URL;
      const data = await fetch(apiUrl);
      const jsonData = await data.json();
      if (data.ok) {
        setUserContactDetails((prev) => ({
          ...prev,
          data: jsonData,
          status: constApiStatus.success,
        }));
      } else {
        setUserContactDetails((prev) => ({
          ...prev,
          error: "Error to fetch the data",
          status: constApiStatus.failure,
        }));
      }
    } catch (error) {
      console.log("error happend");
    }
  };

  const onClickDelete = async (id) => {
    try {
      const apiUrl = CONTACT_API_URL + `/${id}`;
      const options = {
        method: "DELETE",
      };
      await fetch(apiUrl, options);
      getData();
    } catch (error) {
      console.log("error");
    }
  };
  const FailureView = () => {
    <div>error</div>;
  };
  const SuccessView = () => {
    return (
      <div className="p-2 font-sans">
        <h1 className="font-bold text-2xl text-center">
          User Contact Details Table
        </h1>
        <table className="mt-10 border table-auto w-full">
          <tbody>
            <tr className="bg-gray-300 add_table_border h-10">
              <th className="add_table_border w-[15%]">Name</th>
              <th className="add_table_border w-[15%]">Email</th>
              <th className="add_table_border w-[20%]">Title</th>
              <th className="add_table_border w-[35%]">Message</th>
              <th className="add_table_border w-[10%]">Date</th>
              <th className="add_table_border w-[10%]"></th>
            </tr>
            {userContactDetails?.data?.length > 0 &&
              userContactDetails?.data?.map((eachContact) => (
                <EachContact
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
