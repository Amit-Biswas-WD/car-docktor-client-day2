const Service = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold">Service</h2>
        <h2 className="text-5xl font-bold my-4">Our Service Area</h2>
        <div className="flex justify-center items-center">
          <p className="text-base font-normal max-w-[717px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don,t look even slightly
            believable.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        <div className="col-span-1 border border-gray-600 p-6">
          <div className="w-full h-auto">
            <img
              className="w-full h-[208px] object-cover"
              src="https://i.ibb.co/20KWn32G/Screenshot-4.png"
              alt="Car Doctor"
            />
          </div>
          <h2 className="text-2xl font-bold my-3">Title: This is Car Doctor</h2>
          <p className="text-xl font-semibold text-[#FF3811]">Price: $120</p>
        </div>
        <div className="col-span-1 border border-gray-600 p-6">
          <div className="w-full h-auto">
            <img
              className="w-full h-[208px] object-cover"
              src="https://i.ibb.co/20KWn32G/Screenshot-4.png"
              alt="Car Doctor"
            />
          </div>
          <h2 className="text-2xl font-bold my-3">Title: This is Car Doctor</h2>
          <p className="text-xl font-semibold text-[#FF3811]">Price: $120</p>
        </div>
        <div className="col-span-1 border border-gray-600 p-6">
          <div className="w-full h-auto">
            <img
              className="w-full h-[208px] object-cover"
              src="https://i.ibb.co/20KWn32G/Screenshot-4.png"
              alt="Car Doctor"
            />
          </div>
          <h2 className="text-2xl font-bold my-3">Title: This is Car Doctor</h2>
          <p className="text-xl font-semibold text-[#FF3811]">Price: $120</p>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <button className="px-10 py-2 text-[#FF3811] border border-[#FF3811]">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Service;
