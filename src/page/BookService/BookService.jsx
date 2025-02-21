import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const BookService = () => {
  const data = useLoaderData();
  const { _id, title, price, img } = data;

  const handleConfirm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const order = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      price: price,
      service_id: _id,
    };
    console.log(order);

    fetch("https://car-doctor-server-day2.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Oder Confirm");
        }
      });
  };
  return (
    <div>
      <div className="card-body bg-[#F3F3F3]">
        <form onSubmit={handleConfirm} className="fieldset">
          <h2 className="text-xl font-semibold text-gray-600 text-center">
            Book Service: {title}
          </h2>
          <div className="flex gap-6 my-4">
            <div className="w-[48%]">
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Your Name"
              />
            </div>
            <div className="w-[48%]">
              <input
                name="date"
                type="date"
                className="input w-full"
                placeholder="date"
              />
            </div>
          </div>
          <div className="flex gap-6 my-4">
            <div className="w-[48%]">
              <input
                defaultValue={price}
                type="number"
                className="input w-full"
                placeholder="Your price"
              />
            </div>
            <div className="w-[48%]">
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Your Email"
              />
            </div>
          </div>
          <button className="btn btn-neutral mt-4 bg-gray-800 text-white">
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookService;
