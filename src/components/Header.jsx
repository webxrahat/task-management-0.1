import React from "react";

const Header = () => {
  return (
    <nav className="bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-100">MyLogo</div>

      <nav>
        <ul className="flex space-x-6 text-gray-100 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </nav>
  );
};

export default Header;
