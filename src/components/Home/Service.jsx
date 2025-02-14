import { useEffect, useState } from "react";
import Services from "./Services";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="container mx-auto my-16">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold">Service</h2>
        <h2 className="text-5xl font-bold my-4">Our Service Area</h2>
        <div className="flex justify-center items-center">
          <p className="text-base font-normal max-w-[717px]">
            Our Service Area: Engine repair, oil change, brake service, tire
            replacement, battery check, diagnostics, maintenance, detailing,
            suspension, and more!
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <Services service={service} key={service._id}/>
        ))}
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
