import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto">
      <nav className="flex justify-between items-center py-10 px-4 ">
        <div className="logo text-3xl text-orange-600 font-bold">
          <Link href="/">CodeWithKobir</Link>
        </div>
        <div className="flex items-center ">
          <div className="navItem  text-xl mr-14">
            <ul className="flex font-semibold  space-x-5">
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
            <ul className="flex justify-center items-center space-x-3 text-xl">
              <li>
                <Link href="/register">
                  <button className="border px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500 font-semibold text-yellow-50  ">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <button className="border px-3 py-2 rounded-md bg-blue-600  hover:bg-blue-500 font-semibold text-yellow-50 ">
                    Register
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Navbar;
