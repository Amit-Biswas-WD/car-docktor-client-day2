import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { BsGithub } from "react-icons/bs";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Github = () => {
  const { gitHub } = useContext(AuthContext);
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
          .post("http://localhost:5000/jwt", users, { withCredentials: true })
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
