import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Google = () => {
  const { google } = useAuth()
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogle = () => {
    google()
      .then((result) => {
        console.log(result.user);
        toast("Google Login successfully");
        const userData = { email: result.user.email }; 
        // get access token
        axios.post("https://car-doctor-server-day2.vercel.app/jwt", userData, { withCredentials: true }).then((res) => {
          console.log(res.data);
          if (res.data.success) {
            navigate(location?.state ? location?.state : "/");
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handleGoogle} className="flex gap-2 items-center btn">
        <FcGoogle className="w-7 h-auto" />
        Google
      </button>
    </div>
  );
};

export default Google;
