import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import logotext from '../assets/logotext.png';
import Connect from '../components/Connect';
import logoother1 from '../assets/logoother1.png';
import logoother2 from '../assets/logoother2.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false); // New state for wallet connection status
  const location = useLocation(); // Get the current route

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev); // Toggle the modal state
  };

  const handleWalletConnection = () => {
    setWalletConnected(true); // Update wallet connection status after success
    toggleModal(); // Close modal after successful connection
  };

  const isMintPage = [
    '/mintdata',
    '/nftpagemint',
    '/choosecollection',
    '/newcollection',
    '/profile',
    '/setting',
    '/sellmethod',
    '/nftpage',
  ].includes(location.pathname);

  return (
    <div className="w-full h-[100px] flex items-center justify-between px-4 fixed top-0 left-0 z-50 backdrop-blur-[50px] bg-opacity-80">
      <div className="flex flex-col items-center h-[80px] w-[99px] mt-[10px]">
        <img src={logo} alt="Logo" className="h-[60px] w-auto" />
        <img src={logotext} alt="logotext" className="h-[20px] w-auto" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <NavLink to="/" className={({ isActive }) => `text-lg font-semibold font-apex uppercase ${isActive ? 'text-red-500 underline decoration-red-500' : 'text-gray-700 hover:text-gray-900'}`}>
          Home
        </NavLink>
        <NavLink to="/nftpage" className={({ isActive }) => `text-lg font-semibold font-apex ${isActive ? 'text-red-500 underline decoration-red-500' : 'text-gray-700 hover:text-gray-900'}`}>
          AI NFT Generation
        </NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />}
          </svg>
        </button>
      </div>

      {/* Conditional Rendering for Logos or Buttons */}
      <div className="hidden md:flex space-x-4 font-roboto">
        {isMintPage ? (
          <>
            <div className="bg-gray-300 w-[76px] h-[58px] rounded-lg gap-[10px] px-[26px] py-[14px]">
              <img src={logoother2} alt="logoother1" className="w-[26px] h-[26px] object-contain" />
            </div>
            <div className="bg-gray-300 w-[76px] h-[58px] rounded-lg px-[26px] py-[14px]">
              <Link to="/profile">
                <img src={logoother1} alt="logoother2" className=" w-[26px] h-[26px] object-contain" />
              </Link>
            </div>
          </>
        ) : (
          <>
            {walletConnected ? (
              <span className="text-green-500 font-semibold">Wallet Connected</span>
            ) : (
              <button className="bg-button-gradient text-white px-4 py-2 font-roboto text-[22px] w-[213px] h-[58px] rounded-md shadow-md" onClick={toggleModal}>
                Connect Wallet
              </button>
            )}
            <Link to="/mintdata" className="bg-white text-red-600 border border-red-600 text-center w-[176px] h-[58px] px-4 py-2 rounded-md shadow-md font-roboto text-[22px]">
              Create NFT
            </Link>
          </>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-lg flex flex-col space-y-4 px-4 py-6">
          <NavLink to="/" className={({ isActive }) => `text-lg font-semibold uppercase font-apex ${isActive ? 'text-red-500 underline decoration-red-500' : 'text-gray-700 hover:text-gray-900'}`} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/nftpage" className={({ isActive }) => `text-lg font-semibold font-apex ${isActive ? 'text-red-500 underline decoration-red-500' : 'text-gray-700 hover:text-gray-900'}`} onClick={() => setIsMobileMenuOpen(false)}>
            AI NFT Generation
          </NavLink>
          {isMintPage ? (
            <>
              <img src={logoother1} alt="logoother1" className="w-[26px] h-[26px] object-contain" />
              <img src={logoother2} alt="logoother2" className="w-[26px] h-[26px] object-contain" />
            </>
          ) : (
            <>
              <button className="bg-button-gradient text-white px-4 py-2 rounded-md shadow-md hover:bg-red-400" onClick={toggleModal}>
                Connect Wallet
              </button>
              <Link to="/mintdata" className=" text-red-600 px-4 py-2 rounded-md shadow-md text-center border border-red-600">
                Create NFT
              </Link>
            </>
          )}
        </div>
      )}

      {/* Connect Wallet Modal */}
      {isModalOpen && <Connect toggleModal={toggleModal} onConnectSuccess={handleWalletConnection} />}
    </div>
  );
};

export default Navbar;
