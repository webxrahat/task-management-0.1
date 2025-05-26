import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold mb-4 md:mb-0">MyLogo</div>

        <ul className="flex space-x-6 text-sm">
          <li className="hover:text-gray-400 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-gray-400 cursor-pointer">Terms</li>
          <li className="hover:text-gray-400 cursor-pointer">Support</li>
        </ul>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
