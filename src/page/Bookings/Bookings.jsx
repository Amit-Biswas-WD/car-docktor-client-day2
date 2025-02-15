import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Bookings = () => {
  const { users } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  const uri = `http://localhost:5000/bookings?email=${users?.email}`;

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setBookings(data))
  }, []);

  return <div>Bookings: {bookings.length}</div>;
};

export default Bookings;
