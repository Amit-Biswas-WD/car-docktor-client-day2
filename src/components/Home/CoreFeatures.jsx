import { AiOutlineSafety } from "react-icons/ai";
import { FcCustomerSupport } from "react-icons/fc";
import { GiAutoRepair, GiTeamIdea } from "react-icons/gi";
import { IoStopwatchOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const CoreFeatures = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold">Core Features</h2>
        <h2 className="text-5xl font-bold my-4">Why Choose Us</h2>
        <div className="flex justify-center items-center">
          <p className="text-base font-normal max-w-[717px]">
            We,re not prickly, precious or pretentious. Because we focus on
            results. For us, it,s all about what adds value for you and your
            business. Above all, we want our words to work for you.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-4 md:grid-cols-6 gap-y-8">
        <div className="border hover:border-white group border-black rounded-lg mx-auto p-8 hover:bg-[#FF3811]">
          <div className="flex justify-center items-center text-center group-hover:text-white">
            <GiTeamIdea className="w-[75px] h-[53px] my-3" />
          </div>
          <h2 className="text-base text-[#444] font-semibold group-hover:text-white">
            Expert Team
          </h2>
        </div>
        <div className="border hover:border-white group border-black rounded-lg mx-auto p-8 hover:bg-[#FF3811]">
          <div className="flex justify-center items-center text-center group-hover:text-white">
            <IoStopwatchOutline className="w-[75px] h-[53px] my-3" />
          </div>
          <h2 className="text-base text-[#444] font-semibold group-hover:text-white">
            Timely Delivery
          </h2>
        </div>
        <div className="border hover:border-white group border-black rounded-lg mx-auto p-8 hover:bg-[#FF3811]">
          <div className="flex justify-center items-center text-center group-hover:text-white">
            <FcCustomerSupport className="w-[75px] h-[53px] my-3" />
          </div>
          <h2 className="text-base text-[#444] font-semibold group-hover:text-white">
            24/7 Support
          </h2>
        </div>
        <div className="border hover:border-white group border-black rounded-lg mx-auto p-8 hover:bg-[#FF3811]">
          <div className="flex justify-center items-center text-center group-hover:text-white">
            <GiAutoRepair className="w-[75px] h-[53px] my-3" />
          </div>
          <h2 className="text-base text-[#444] font-semibold group-hover:text-white">
            Best Equipment
          </h2>
        </div>
        <div className="border hover:border-white group border-black rounded-lg mx-auto p-8 hover:bg-[#FF3811]">
          <div className="flex justify-center items-center text-center group-hover:text-white">
            <AiOutlineSafety className="w-[75px] h-[53px] my-3" />
          </div>
          <h2 className="text-base text-[#444] font-semibold group-hover:text-white">
            100% Guranty
          </h2>
        </div>
        <div className="border hover:border-white group border-black rounded-lg mx-auto p-8 hover:bg-[#FF3811]">
          <div className="flex justify-center items-center text-center group-hover:text-white">
            <TbTruckDelivery className="w-[75px] h-[53px] my-3" />
          </div>
          <h2 className="text-base text-[#444] font-semibold group-hover:text-white">
            Timely Delivery
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
