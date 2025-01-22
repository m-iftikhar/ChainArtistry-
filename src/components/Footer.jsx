import { FaTelegram, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaDiscord, FaTiktok } from "react-icons/fa";
import Logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";

function Footer() {
  return (
    <div>
      {/* Email Section */}
      <div className="text-center py-12 px-4">
        <h2 className="text-[40px] md:text-[64px] font-bold mb-6 font-oxanium">
          Ready for the Next NFT Drop?
        </h2>
        <div
          className="relative mx-auto font-roboto h-[76px] md:h-[96px]"
          style={{ maxWidth: "680px" }}
        >
          <input
            type="email"
            placeholder="info@gmail.com"
            className="placeholder-red-500 w-full h-full p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 border border-red-400"
          />
          <button
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-button-gradient text-white p-3 rounded-xl shadow-lg transition"
            aria-label="Send"
            style={{ height: "60px", width: "76px" }}
          >
            <FaTelegram className="text-[28px] md:text-[36px] m-auto" />
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white flex flex-col items-center py-10 px-6 sm:px-8 lg:px-16 rounded-lg relative bottom-2 shadow-lg">
        <div className="flex flex-col sm:flex-row justify-evenly items-center w-full max-w-screen-xl gap-8">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center text-center">
            <img
              src={Logo}
              alt="Fry Networks Logo"
              className="w-16 h-16 md:w-20 md:h-20 mb-4 filter invert"
            />
            <img
              src={logotext}
              alt="logotext"
              className="filter invert hue-rotate-180"
            />
          </div>

          {/* Column 2: Description & Social Media Links */}
          <div className="text-center">
            <p className="text-[16px] md:text-[20px] font-roboto font-semibold mb-4 max-w-xs sm:max-w-none">
              NFT ALGO is the world’s leading NFTs marketplace where you can
              discover, sell, and bid NFTs and get rich.
            </p>
            <div className="flex justify-center gap-3 sm:gap-4 mt-4">
              <a href="#" className="hover:text-gray-200">
                <FaTelegram className="text-[30px] md:text-[40px]" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaTwitter className="text-[30px] md:text-[40px]" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaLinkedin className="text-[30px] md:text-[40px]" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaInstagram className="text-[30px] md:text-[40px]" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaYoutube className="text-[30px] md:text-[40px]" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaDiscord className="text-[30px] md:text-[40px]" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaTiktok className="text-[30px] md:text-[40px]" />
              </a>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="text-center">
            <h4 className="text-[20px] md:text-[24px] roboto font-bold mb-2">
              About
            </h4>
            <ul className="text-[16px] md:text-[20px] font-normal font-roboto space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About NFT
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Live Auctions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Activity
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
