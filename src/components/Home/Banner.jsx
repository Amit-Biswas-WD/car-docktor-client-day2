import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <Swiper navigation modules={[Navigation]} className="relative">
      <SwiperSlide
        className="h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/jZfCZbny/1.jpg')",
        }}
      >
        <div className="h-full py-56 flex items-center justify-start pl-28 text-white text-3xl font-bold bg-black/40">
          <div>
            <h2 className="w-[460px] text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-base font-normal my-4 w-[522px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-8 items-center">
              <button className="btn rounded-lg bg-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary rounded-lg text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/SXjXKTXr/2.jpg')",
        }}
      >
        <div className="h-full py-56 flex items-center justify-start pl-28 text-white text-3xl font-bold bg-black/40">
          <div>
            <h2 className="w-[460px] text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-base font-normal my-4 w-[522px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-8 items-center">
              <button className="btn rounded-lg bg-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary rounded-lg text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/rKj2KCSQ/6.jpg')",
        }}
      >
        <div className="h-full py-56 flex items-center justify-start pl-28 text-white text-3xl font-bold bg-black/40">
          <div>
            <h2 className="w-[460px] text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-base font-normal my-4 w-[522px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-8 items-center">
              <button className="btn rounded-lg bg-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary rounded-lg text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/n83KCv53/5.jpg')",
        }}
      >
        <div className="h-full py-56 flex items-center justify-start pl-28 text-white text-3xl font-bold bg-black/40">
          <div>
            <h2 className="w-[460px] text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-base font-normal my-4 w-[522px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-8 items-center">
              <button className="btn rounded-lg bg-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary rounded-lg text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
