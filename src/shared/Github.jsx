import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { BsGithub } from "react-icons/bs";

const Github = () => {
  const { gitHub } = useContext(AuthContext);

  const handleGithub = () => {
    gitHub()
      .then((result) => {
        console.log(result.user);
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
