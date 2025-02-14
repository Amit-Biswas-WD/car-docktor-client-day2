import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Services = ({service}) => {
    const {_id, img, title, price} = service;
  return (
    <div
    className="col-span-1 border border-gray-600 p-6"
  >
    <div className="w-full h-auto">
      <img
        className="w-full h-[208px] object-cover"
        src={img}
        alt={title}
      />
    </div>
    <h2 className="text-2xl font-bold my-3">Title: {title}</h2>
    <div className="flex items-center justify-between text-[#FF3811]">
      <p className="text-xl font-semibold">Price: ${price}</p>
      <Link to={`/checkout/${_id}`}>
        <FaArrowRightLong />
      </Link>
    </div>
  </div>
  )
}

export default Services