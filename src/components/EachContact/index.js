import DeleteIcon from "../svgs/DeleteIcon";
import EmailReplyLogo from "../svgs/EmailReplyLogo";

const EachContact = (props) => {
  const { contactDetails, onClickDelete } = props;
  const { name, email, title, message, createdAt, _id } = contactDetails;
  const date = new Date(createdAt);
  const onClickDeleteIcon = () => {
    const response = window.confirm("Are you really want to delete this data");
    if (response) {
      onClickDelete(_id);
    }
  };
  const onClickReply = () => {
    window.location = `mailto:${email}`;
  };
  return (
    <tr className="bg-gray-100 add_table_border min-h-10">
      <td className="add_table_border w-[15%]">{name}</td>
      <td className="add_table_border w-[15%]">{email}</td>
      <td className="add_table_border w-[20%]">{title}</td>
      <td className="add_table_border w-[35%]">{message}</td>
      <td className="add_table_border w-[15%]">{date.toUTCString()}</td>
      <td className=" w-[15%] cursor-pointer flex justify-between items-center">
        <button onClick={onClickDeleteIcon} type="button">
          <DeleteIcon className="add_zoom hover:bg-red-500 hover:rounded-md" />
        </button>
        <button onClick={onClickReply} type="button">
          <EmailReplyLogo className="add_zoom hover:bg-blue-500 hover:rounded-md" />
        </button>
      </td>
    </tr>
  );
};
export default EachContact;
