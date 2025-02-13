const AboutUs = () => {
  return (
    <div className="container mx-auto my-16 lg:flex">
      <div className="md:hidden md:mr-36 sm:hidden lg:block">
        <img
          className="relative min-w-[500px] h-[473px] object-cover"
          src="https://i.ibb.co.com/cXxWSTtR/person.jpg"
          alt=""
        />
        <img
          className="w-[337px] h-[320px] absolute top-[990px] right-[714px] lg:block hidden"
          src="https://i.ibb.co/HD0zcxPL/parts.jpg"
          alt="Parts"
        />
      </div>
      <div className="md:block md:mr-36 sm:block lg:hidden w-full h-auto">
        <img
          className="relative w-full h-auto object-cover"
          src="https://i.ibb.co.com/cXxWSTtR/person.jpg"
          alt=""
        />
      </div>
      <div className="sm:px-1">
        <h2 className="text-xl font-normal sm:mt-12">About Us</h2>
        <h2 className="text-5xl font-bold w-[376px] text-[45px] my-5">
          We are qualified & of experience in this field
        </h2>
        <p className="min-w-[489px] font-normal text-base">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don,t look even slightly believable.
        </p>
        <p className="min-w-[489px] font-normal text-base my-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don,t look even slightly believable.
        </p>
        <button className="text-white font-medium bg-rose-500 px-7 py-3 rounded-sm">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
