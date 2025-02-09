import { GrMapLocation } from "react-icons/gr";
import { MdOutlineAddIcCall } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const OpenContactLocation = () => {
  return (
    <div className="max-w-[1140px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 text-white bg-[#151515]">
      <div className="flex mx-auto gap-4 items-center my-24">
        <SlCalender className="w-10 h-10" />
        <div>
          <p className="text-base font-medium">We are open monday-friday</p>
          <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
        </div>
      </div>
      <div className="flex mx-auto gap-4 items-center my-24">
        <MdOutlineAddIcCall className="w-10 h-10" />
        <div>
          <p className="text-base font-medium">Have a question?</p>
          <h2 className="text-2xl font-bold">+2546 251 2658</h2>
        </div>
      </div>
      <div className="flex mx-auto gap-4 items-center my-24">
        <GrMapLocation className="w-10 h-10" />
        <div>
          <p className="text-base font-medium">Need a repair? our address</p>
          <h2 className="text-2xl font-bold">Liza Street, New York</h2>
        </div>
      </div>
    </div>
  );
};

export default OpenContactLocation;
