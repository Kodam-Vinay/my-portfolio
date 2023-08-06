import { useEffect, useState } from "react";
import EachContact from "../../components/EachContact";
import { HashLoader } from "react-spinners";
import { CONTACT_API_URL } from "../../config";

const AdminTable = () => {
  const [userContactDetails, setUserContactDetails] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const apiUrl = CONTACT_API_URL;
      const data = await fetch(apiUrl);
      const jsonData = await data.json();
      setUserContactDetails(jsonData);
    } catch (error) {
      throw new Error(error);
    }
  };

  const onClickDelete = async (id) => {
    try {
      const apiUrl = CONTACT_API_URL;
      const options = {
        method: "DELETE",
      };
      const response = await fetch(apiUrl, options);
      console.log(response);
      getData();
    } catch (error) {
      throw new Error(error);
    }
  };

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
          {userContactDetails.length > 0 ? (
            userContactDetails.map((eachContact) => (
              <EachContact
                key={eachContact._id}
                contactDetails={eachContact}
                onClickDelete={onClickDelete}
              />
            ))
          ) : (
            <div className="w-screen h-[80vh] flex items-center justify-center">
              <HashLoader className="m-auto" />
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default AdminTable;
