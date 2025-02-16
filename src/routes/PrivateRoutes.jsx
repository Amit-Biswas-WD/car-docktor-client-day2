import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-xl"></span>
      </>
    );
  }

  if (users?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={`/login`} replace />;
};

export default PrivateRoutes;
