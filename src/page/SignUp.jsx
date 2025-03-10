import { Link, useLocation, useNavigate } from "react-router-dom";
import Github from "../shared/Github";
import Google from "../shared/Google";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const SignUp = () => {
  const { createUser } = useAuth()
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const value = { name, email, photo, password };
    console.log(value);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const users = { email };
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
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img
            className="w-[600px] h-auto object-cover bg-cover"
            src="https://i.ibb.co.com/PZgMwQ8v/download-1.png"
            alt=""
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              <label className="fieldset-label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Photo</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo uri"
              />
              <label className="fieldset-label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div></div>
              <button type="submit" className="btn btn-neutral mt-4">
                SignUp
              </button>
            </form>
            <p className="text-base">
              Already have an account?
              <Link to={`/login`}>
                <span className="text-red-600 font-semibold pl-2">Login</span>
              </Link>
            </p>
            <div className="flex justify-between items-center mt-1">
              <div className="flex gap-2 items-center btn">
                <Google />
              </div>
              <div className="btn">
                <Github />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
