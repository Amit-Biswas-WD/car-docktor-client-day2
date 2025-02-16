import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Google = () => {
  const { google } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogle = () => {
    google()
      .then((result) => {
        console.log(result.user);
        toast("Google Login successfully");
        navigate(location?.state ? location?.state : "/");
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
