import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <div>Social Media</div>
                <ul className="p-2">
                  <li>
                    <a href="#github">Github</a>
                  </li>
                  <li>
                    <a href="#linkedin">LinkedIn</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl" href="#home">
            Dani Ramdani
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Social Media</summary>
                <ul className="p-2">
                  <li>
                    <a href="#linkedin">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#github">Github</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-primary" href="#github">
            GitHUb
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;