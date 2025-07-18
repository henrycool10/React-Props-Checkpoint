import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="flex py-6 px-4 md:px-8 items-center justify-between">
        <a href="/">
          <h1 className="text-green-400 font-bold text-6xl" >
            Players
          </h1>
        </a>

        {/* Nav link */}
        <div className="hidden md:flex space-x-8 text-sm">
          <a className="hover:text-green-500" href="/">
            Home
          </a>
          <a className="hover:text-green-500" href="/players">
            Players
          </a>
          <a className="hover:text-green-500" href="/aboutus">
            About Us
          </a>
          <a className="hover:text-green-500" href="#">
            FAQs
          </a>
        </div>
        {/* the button */}
        <button className="hidden md:block bg-green-500 px-6 py-4 text-white rounded  hover:bg-green-400">
          Get Started
        </button>
        {/* icons */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <MdCancel /> : <IoMenu />}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {isOpen && (
        <div className=" md:hidden flex flex-col p-4 space-y-4 shadow">
          <a href="/" className="hover:bg-gray-100 transition p-2 rounded">
            Home
          </a>
          <a
            href="/products"
            className="hover:bg-gray-100 transition p-2 rounded"
          >
            Products
          </a>
          <a
            href="/aboutus"
            className="hover:bg-gray-100 transition p-2 rounded"
          >
            About Us
          </a>
          <a href="#" className="hover:bg-gray-100 transition p-2 rounded">
            FAQs
          </a>
          <button className=" bg-green-500  py-2 px-6 text-white rounded  hover:bg-green-400">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
