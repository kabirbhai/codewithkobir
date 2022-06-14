import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center bg-slate-600 ">
        <div className="logo">CodeWithKobir</div>
        <div>
          <div className="navItem">
            <ul className="flex">
              <li>Home</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="register">
            <ul>
              <li>Register</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
