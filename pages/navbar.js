import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center py-10 bg-yellow-100 ">
        <div className="logo text-3xl text-orange-600 font-bold">
          <Link href="/">CodeWithKobir</Link>
        </div>
        <div className="flex">
          <div className="navItem  text-xl mr-14">
            <ul className="flex space-x-5">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="register">
            <ul className="flex space-x-3 text-xl">
              <li>
                <Link href="/register">Register</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
