import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios("https://car-doctor-server-day2.vercel.app/services")
    .then((data) => {
      setServices(data.data);
    });
  }, []);

  return services;
};

export default useServices;
