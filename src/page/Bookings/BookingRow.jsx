const BookingRow = ({ booking }) => {
  const { _id, customerName, email, date, service, price, img, service_id } =
    booking;

  return (
    <tr>
      <th>
        <label>
          <button>Delete</button>
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
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
