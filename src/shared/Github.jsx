import { BsGithub } from "react-icons/bs";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Github = () => {
  const { gitHub } = useAuth()
  const location = useLocation();
  const navigate = useNavigate();

  const handleGithub = () => {
    gitHub()
      .then((result) => {
        console.log(result.user);
        toast("Github Login successfully");
        const users = { email: result.user.email };
        // get access token
        axios
          .post("https://car-doctor-server-day2.vercel.app/jwt", users, { withCredentials: true })
          .then((res) => {
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
      <button onClick={handleGithub} className="flex gap-2 items-center btn">
        <BsGithub className="w-7 h-auto" />
        Github
      </button>
    </div>
  );
};

export default Github;
