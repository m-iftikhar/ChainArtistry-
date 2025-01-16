import  { useState } from 'react';
import logo from '../assets/logo.png';
import logotext from '../assets/logotext.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[100px] top-[25px] left-[300px] flex items-center justify-between px-4 bg-white shadow-lg">
      {/* Logo */}
      <div className="flex flex-col items-center h-[100px] w-[99.73px] top-[25px] left-[300px]">
        <img src={logo} alt="Logo" className="h-[60px] w-auto" />
        <img src={logotext} alt="logotext" className="h-[40px] w-auto" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 w[331px] h-[79px] top-[35px] left-[642px] gap-[35px] rounded-[6px] py-[15px] px-[25px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-semibold font-apex ${
              isActive
                ? 'text-red-500 underline decoration-red-500'
                : 'text-gray-700 hover:text-gray-900'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/nftpage"
          className={({ isActive }) =>
            `text-lg font-semibold font-apex ${
              isActive
                ? 'text-red-500 underline decoration-red-500'
                : 'text-gray-700 hover:text-gray-900'
            }`
          }
        >
          AI NFT GENERATION
        </NavLink>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4 w-[404px] h-[58px] top-[46px] left-[1216px] rounded-[8px] gap-[10px]">
        <button className="px-4 font-roboto py-2 w-[213px] h-[58px] rounded-[8px] bg-gradient-to-r from-[#d65d5d] to-[rgba(253,0,0,1)] text-white text-[22px] font-medium">
          Connect Wallet
        </button>
        <button className="px-4 py-2 font-roboto text-red-600 rounded bg-white w-[176px] h-[58px] border-red-600 border-[1.8px] text-[22px] font-medium">
          Create NFT
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-lg flex flex-col space-y-4 px-4 py-6 md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive
                  ? 'text-red-500 underline decoration-red-500'
                  : 'text-gray-700 hover:text-gray-900'
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/nftpage"
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive
                  ? 'text-red-500 underline decoration-red-500'
                  : 'text-gray-700 hover:text-gray-900'
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            AI NFT GENERATION
          </NavLink>
          <button className="px-4 py-2 rounded bg-gradient-to-r from-[#d65d5d] to-[rgba(253,0,0,1)] text-white text-[16px] font-medium">
            Connect Wallet
          </button>
          <button className="px-4 py-2 text-red-600 rounded bg-white border-red-600 border-[1.8px] text-[16px] font-medium">
            Create NFT
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
