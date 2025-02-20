import { MdDelete } from "react-icons/md";

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
  const { _id, customerName, email, date, img, status } =
    booking;

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)}>
            <MdDelete className="w-10 h-auto text-red-500" />{" "}
          </button>
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-20">
            <img
              src={img ? img : "https://i.ibb.co.com/TxY3rz4d/Screenshot-5.png"}
            />
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>{date}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
           Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
