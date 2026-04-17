import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import {Home, Clock, BarChart3, Menu} from "lucide-react";

const Navbar = () => {
  const linkClass = ({isActive}) =>
    `flex items-center gap-2 px-4 py-2 rounded-sm font-semibold transition ${
      isActive
        ? "bg-emerald-800 text-white"
        : "text-gray-500 hover:bg-emerald-100"
    }`;

  return (
    <div className="navbar sticky top-0 z-50 py-3 bg-base-100 px-4 md:px-6 lg:px-0 shadow-sm">
      <div className="w-full max-w-360 mx-auto flex justify-between items-center">
        
        <div className="navbar-start  ">
          <img src={logo} alt="KeenKeeper Logo" className="object-contain" />
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center">
            <NavLink to="/" className={linkClass}>
              <Home size={18} />
              Home
            </NavLink>

            <NavLink to="/timeline" className={linkClass}>
              <Clock size={18} />
              Timeline
            </NavLink>

            <NavLink to="/stats" className={linkClass}>
              <BarChart3 size={18} />
              Stats
            </NavLink>
          </div>
        </div>

        
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost p-0">
              <Menu size={22} />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-3 shadow-lg bg-base-100 rounded-box w-40"
            >
              <li>
                <NavLink to="/" className={linkClass}>
                  <Home size={18} />
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/timeline" className={linkClass}>
                  <Clock size={18} />
                  Timeline
                </NavLink>
              </li>

              <li>
                <NavLink to="/stats" className={linkClass}>
                  <BarChart3 size={18} />
                  Stats
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
