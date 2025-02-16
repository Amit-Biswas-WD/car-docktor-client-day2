import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { BsGithub } from "react-icons/bs";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Github = () => {
  const { gitHub } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

  const handleGithub = () => {
    gitHub()
      .then((result) => {
        console.log(result.user);
        toast("Github Login successfully");
        navigate(location?.state ? location?.state : "/")
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
