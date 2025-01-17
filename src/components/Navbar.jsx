import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import logotext from '../assets/logotext.png';
import Connect from '../components/Connect';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev); // Toggle the modal state
  };

  return (
    <div className="w-full h-[100px] flex items-center justify-between px-4 bg-white shadow-lg">
      {/* Logo */}
      <div className="flex flex-col items-center h-[100px] w-auto">
        <img src={logo} alt="Logo" className="h-[60px] w-auto" />
        <img src={logotext} alt="logotext" className="h-[20px] w-auto" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-semibold ${
              isActive
                ? 'text-red-500 underline decoration-red-500'
                : 'text-gray-700 hover:text-gray-900'
            }`
          }
        >
          home
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
      <div className="hidden md:flex space-x-4">
        <button
          className="px-4 py-2 rounded-[8px] bg-gradient-to-r from-[#d65d5d] to-[rgba(253,0,0,1)] text-white text-[22px] font-medium"
          onClick={toggleModal} // Toggle modal on button click
        >
          Connect Wallet
        </button>
        <button className="px-4 py-2 font-roboto text-red-600 rounded bg-white border-red-600 border-[1.8px] text-[22px] font-medium">
          Create NFT
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-lg flex flex-col space-y-4 px-4 py-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold uppercase ${
                isActive
                  ? 'text-red-500 underline decoration-red-500'
                  : 'text-gray-700 hover:text-gray-900'
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
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
          <button
            className="px-4 py-2 rounded bg-gradient-to-r from-[#d65d5d] to-[rgba(253,0,0,1)] text-white text-[16px] font-medium"
            onClick={toggleModal} // Toggle modal on button click
          >
            Connect Wallet
          </button>
          <button className="px-4 py-2 text-red-600 rounded bg-white border-red-600 border-[1.8px] text-[16px] font-medium">
            Create NFT
          </button>
        </div>
      )}

      {/* Connect Wallet Modal */}
      {isModalOpen && <Connect toggleModal={toggleModal} />} {/* Pass the toggle function */}
    </div>
  );
};

export default Navbar;
