import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Google = () => {
  const { google } = useContext(AuthContext);

  const handleGoogle = () => {
    google()
      .then((result) => {
        console.log(result.user);
        toast("Google Login successfully")
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
