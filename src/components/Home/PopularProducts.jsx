import { FaStarOfDavid } from "react-icons/fa";

const PopularProducts = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold">Popular Products</h2>
        <h2 className="text-5xl font-bold my-4">Browse Our Products</h2>
        <div className="flex justify-center items-center">
          <p className="text-base font-normal max-w-[717px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don,t look even slightly
            believable.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        <div className="col-span-1 border border-gray-600 rounded-lg p-6">
          <div className="w-full h-auto flex justify-center bg-[#F3F3F3] rounded-lg">
            <img
              className="w-[156px] h-[153px] object-cover my-4"
              src="https://i.ibb.co.com/wFXkQk8c/6.png"
              alt="Car Doctor"
            />
          </div>
          <div className="text-center">
            <div className="flex justify-center text-yellow-600 gap-2 my-3 ">
              <FaStarOfDavid />
              <FaStarOfDavid />
              <FaStarOfDavid />
              <FaStarOfDavid />
            </div>
            <h2 className="text-2xl font-bold my-3">Car Engine Plug</h2>
            <p className="text-xl font-semibold text-[#FF3811]">$ 120</p>
          </div>
        </div>
        <div className="col-span-1 border border-gray-600 rounded-lg p-6">
          <div className="w-full h-auto flex justify-center bg-[#F3F3F3] rounded-lg">
            <img
              className="w-[156px] h-[153px] object-cover my-4"
              src="https://i.ibb.co.com/wFXkQk8c/6.png"
              alt="Car Doctor"
            />
          </div>
          <div className="text-center">
            <div className="flex justify-center text-yellow-600 gap-2 my-3 ">
              <FaStarOfDavid />
              <FaStarOfDavid />
              <FaStarOfDavid />
              <FaStarOfDavid />
            </div>
            <h2 className="text-2xl font-bold my-3">Car Engine Plug</h2>
            <p className="text-xl font-semibold text-[#FF3811]">$ 120</p>
          </div>
        </div>
        <div className="col-span-1 border border-gray-600 rounded-lg p-6">
          <div className="w-full h-auto flex justify-center bg-[#F3F3F3] rounded-lg">
            <img
              className="w-[156px] h-[153px] object-cover my-4"
              src="https://i.ibb.co.com/wFXkQk8c/6.png"
              alt="Car Doctor"
            />
          </div>
          <div className="text-center">
            <div className="flex justify-center text-yellow-600 gap-2 my-3 ">
              <FaStarOfDavid />
              <FaStarOfDavid />
              <FaStarOfDavid />
              <FaStarOfDavid />
            </div>
            <h2 className="text-2xl font-bold my-3">Car Engine Plug</h2>
            <p className="text-xl font-semibold text-[#FF3811]">$ 120</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <button className="px-10 py-2 text-[#FF3811] border border-[#FF3811]">
          More Products
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;
