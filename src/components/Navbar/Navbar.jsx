import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../../provider/AuthProvider";
import img from "../../assets/profile.png"

const Navbar = () => {
  const { users, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Logo</div>

        {/* Hamburger Menu (Mobile) */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-400 transition"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* Authentication Button with Image */}
          {users?.email ? (
            <li className="flex items-center space-x-3">
              {/* Profile Image with Tooltip */}
              <div 
                className="relative cursor-pointer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <img 
                  src={users.photoURL || {img}} 
                  alt="User Profile" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                
                {/* Tooltip (Name & Email) */}
                {showTooltip && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bg-gray-700 text-white text-sm px-3 py-2 rounded shadow-lg">
                    <p>{users.displayName || "No Name"}</p>
                    <p>{users.email}</p>
                  </div>
                )}
              </div>

              {/* Log Out Button */}
              <button
                onClick={handleLogOut}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
              >
                Sign In
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-400 transition"
                }
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* Authentication Button (Mobile) */}
          {users?.email ? (
            <li className="flex flex-col items-center space-y-3">
              {/* Profile Image with Tooltip */}
              <div 
                className="relative cursor-pointer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <img 
                  src={users.photoURL || {img}} 
                  alt="User Profile" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                
                {/* Tooltip (Mobile) */}
                {showTooltip && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-14 bg-gray-700 text-white text-sm px-3 py-2 rounded shadow-lg">
                    <p>{users.displayName || "No Name"}</p>
                    <p>{users.email}</p>
                  </div>
                )}
              </div>

              {/* Log Out Button */}
              <button
                onClick={handleLogOut}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
              >
                Sign In
              </NavLink>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
