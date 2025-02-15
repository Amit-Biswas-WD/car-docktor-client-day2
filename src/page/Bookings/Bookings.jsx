import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { users } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (users?.email) {
      const uri = `http://localhost:5000/bookings`;

      // ?email=${users.email}

      fetch(uri)
        .then((res) => res.json())
        .then((data) => setBookings(data))
        .catch((error) => console.error("Error fetching bookings:", error));
    }
  }, [users?.email]);

  return (
    <div className="container mx-auto bg-gray-400">
      <h2 className="text-xl font-semibold text-center">
        Bookings: {bookings.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Delete</th>
              <th>Image & Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>btn</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow key={booking._id} booking={booking} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
