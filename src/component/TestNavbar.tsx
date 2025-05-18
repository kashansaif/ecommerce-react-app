import React from "react";

function TestNavbar() {
  return (
    <>
      <div className="bg-gray-800 p-4 fixed w-full top-0 left-0 z-10">
        <nav className="flex justify-between items-center text-white">
          <a href="#" className="text-xl">
            Logo
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-20 p-4">
        <h1 className="text-2xl">Content Below the Navbar</h1>
        <p className="mt-4">Scroll down to see the navbar staying at the top.</p>
      </div>
    </>
  );
}

export default TestNavbar;
