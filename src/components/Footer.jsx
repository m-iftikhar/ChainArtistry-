import { FaTelegram, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaDiscord, FaTiktok } from "react-icons/fa";
import Logo from "../assets/logo.png";
import logotext from '../assets/logotext.png';

function Footer() {
  return (
    <div>
      {/* Email Section */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold mb-6">Ready for the Next NFT Drop?</h2>
        <div className="relative mx-auto font-apex" style={{ maxWidth: "680px" }}>
          <input
            type="email"
            placeholder="info@gmail.com"
            className="w-full h-24 p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300 border border-red-300"
          />
          <button
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-red-700 hover:bg-red-800 text-white p-3 rounded-full shadow-lg transition"
            aria-label="Send"
            style={{ height: "48px", width: "48px" }}
          >
            <FaTelegram className="text-lg" />
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white flex flex-col items-center py-10 px-4 sm:px-8 lg:px-16 rounded-lg  relative bottom-2 shadow-lg">
        <div className="flex flex-col sm:flex-row justify-evenly items-center w-full max-w-screen-xl">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center text-center mb-8 sm:mb-0">
            <img
              src={Logo}
              alt="Fry Networks Logo"
              className="w-20 h-20 mb-4 filter invert"
            />
            <img src={logotext} alt="logotext" className="filter invert hue-rotate-180" />
          </div>

          {/* Column 2: Description & Social Media Links */}
          <div className="text-center mb-8 sm:mb-0">
            <h3 className="text-xl font-apex mb-4">Fry Networks</h3>
            <p className="text-sm font-apex mb-4 max-w-xs sm:max-w-none">
              NFT ALGO is the world’s leading NFTs marketplace where you can discover, sell, and bid NFTs and get rich.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="hover:text-gray-200">
                <FaTelegram className="text-xl" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaYoutube className="text-xl" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaDiscord className="text-xl" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaTiktok className="text-xl" />
              </a>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="text-center">
            <h4 className="text-lg font-apex mb-2">About</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:underline font-apex">About NFT</a>
              </li>
              <li>
                <a href="#" className="hover:underline font-apex">Live Auctions</a>
              </li>
              <li>
                <a href="#" className="hover:underline font-apex">Collection</a>
              </li>
              <li>
                <a href="#" className="hover:underline font-apex">Activity</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
