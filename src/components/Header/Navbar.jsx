import { FaGithub } from "react-icons/fa";
import './navbar.css'
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-5 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/" className="mr-7 font-semibold">Home</NavLink>
        <NavLink to="/apps" className="mr-7 font-semibold">Apps</NavLink>
        <NavLink to="/install" className="font-semibold">Installation</NavLink>
          </ul>
        </div>
        <NavLink to='/' className="btn btn-ghost text-xl"><img src="../../../src/assets/logo.png" className="w-10 h-10" alt="" /> <span className="font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">HERO.IO</span> </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavLink to="/" className="mr-7 font-semibold">Home</NavLink>
        <NavLink to="/apps" className="mr-7 font-semibold">Apps</NavLink>
        <NavLink to="/install" className="font-semibold">Installation</NavLink>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white"><FaGithub /> Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;
