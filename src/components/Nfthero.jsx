import { useState } from 'react';
import nfthero from '../assets/nfthero.png';
import style1 from '../assets/style1.png';
import style2 from '../assets/style2.png';
import style3 from '../assets/style3.png';
import style4 from '../assets/style4.png';
import style5 from '../assets/style5.png';
// import style6 from '../assets/style6.png';
import { FaPlus, FaTimes } from 'react-icons/fa';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showStyles, setShowStyles] = useState(false); // To show styles

  const handleGenerateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowStyles(false); // Close styles if modal closes
  };

  const handleAddStylesClick = () => {
    setShowStyles(true); // Show the styles when Add Styles is clicked
  };

  return (
    <>
      <div className="min-h-screen font-apex mt-[150px]  bg-gradient-to-b from-white to-pink-100">
        {/* Hero Section */}
        <div className="text-center   px-4 ">
          <h1 className="text-2xl sm:text-3xl  lg:text-[64px] font-apex font-normal ">
            CREATE YOUR OWN <span className="text-red-600">MASTERPIECE</span>
          </h1>
        </div>

        {/* Centered Image */}
        <div className="flex justify-center items-center mt-10 px-4 lg:mt-12">
          <img
            className="rounded-lg shadow-md w-full sm:w-[90%] md:w-[80%] lg:w-[1320px] lg:h-[496px] object-cover"
            src={nfthero}
            alt="NFT"
          />
        </div>

        <div className="text-center font-roboto mt-4 text-gray-600 font-normal text-[18px] sm:text-base">
          Get OnBoard And Earn Money Like Pro
        </div>

        {/* Search Bar */}
        <div className="mt-8 px-4 sm:px-6">
          <div className="bg-gray-100 rounded-lg font-apex flex items-center p-4 shadow-md w-full md:w-[1002px] md:h-[70px]  mx-auto">
            <input
              type="text"
              placeholder="Fantasy Creature holding a sword..."
              className="flex-grow bg-transparent outline-none font-roboto text-gray-700"
            />
            <button
              onClick={handleGenerateClick}
              className="bg-red-600 text-white px-4 py-2 font-roboto rounded-lg hover:bg-red-700 text-sm sm:text-base"
            >
              Generate
            </button>
          </div>
        </div>

        {/* Dropdowns and Add Styles Button */}
        <div className="flex flex-wrap justify-evenly items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4 px-4">
          <div className="bg-gray-100 rounded-lg p-2 md:w-[202px] justify-center text-center pt-4 md:h-[58px] font-roboto shadow-md w-full sm:w-auto">
            <select className="w-full sm:w-auto bg-transparent outline-none text-gray-700 font-apex cursor-pointer">
              <option>Single NFT</option>
              <option>Batch NFT</option>
            </select>
          </div>

          <div className="flex items-center  space-x-2">
            <span className="text-gray-700 font-apex">Supply</span>
            <input
              type="number"
              defaultValue="10"
              className="bg-gray-100 rounded-lg p-2 w-[139px] h-[58px] outline-none shadow-md  text-center"
            />
          </div>

          <button
            onClick={handleAddStylesClick}
            className="flex items-center bg-gray-100 w-[198px] h-[58px] text-center justify-center rounded-lg p-2 shadow-md space-x-2"
          >
            <span className="text-gray-700 font-roboto">Add Styles</span>
            <FaPlus className="text-gray-700" />
          </button>
        </div>

        {/* Styles Modal (appears when Add Styles is clicked) */}
        {showStyles && (
          <div className="fixed inset-0 flex w-[504px] h-full justify-center items-center bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 pb-2 shadow-lg w-11/12 max-w-md mx-auto">
              {/* Close Icon */}
              <button
                className="absolute top-2  text-gray-700 hover:text-gray-900"
                onClick={handleCloseModal}
              >
                <FaTimes size={20} />
              </button>

              <h2 className="text-center text-2xl font-apex font-semibold mb-4">Choose a Style</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Style 1 */}
                <div className="bg-gray-100 rounded-lg p-2 text-center">
                  <img
                    src={style1}
                    alt="Style 1"
                    className="w-full h-40 object-cover rounded-lg mb-2"
                  />
                  <p className="text-gray-700">Style 1</p>
                </div>

                {/* Style 2 */}
                <div className="bg-gray-100 rounded-lg p-2 text-center">
                  <img
                    src={style2}
                    alt="Style 2"
                    className="w-full h-40 object-cover rounded-lg mb-2"
                  />
                  <p className="text-gray-700">Style 2</p>
                </div>

                {/* Style 3 */}
                <div className="bg-gray-100 rounded-lg p-2 text-center">
                  <img
                    src={style3}
                    alt="Style 3"
                    className="w-full h-40 object-cover rounded-lg mb-2"
                  />
                  <p className="text-gray-700">Style 3</p>
                </div>

                {/* Style 4 */}
                <div className="bg-gray-100 rounded-lg p-2 text-center">
                  <img
                    src={style4}
                    alt="Style 4"
                    className="w-full h-40 object-cover rounded-lg mb-2"
                  />
                  <p className="text-gray-700">Style 4</p>
                </div>

                {/* Style 5 */}
                <div className="bg-gray-100 rounded-lg p-2 text-center">
                  <img
                    src={style5}
                    alt="Style 5"
                    className="w-full h-40 object-cover rounded-lg mb-2"
                  />
                  <p className="text-gray-700">Style 5</p>
                </div>

                {/* Style 6 */}
                <div className="bg-gray-100 rounded-lg p-2 text-center">
                  <img
                    src={style5}
                    alt="Style 6"
                    className="w-full h-40 object-cover rounded-lg mb-2"
                  />
                  <p className="text-gray-700">Style 6</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal for Generate NFT (unchanged from original code) */}
      {isModalOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 pb-2 shadow-lg w-11/12 max-w-md mx-auto">
              <button
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                onClick={handleCloseModal}
              >
                <FaTimes size={20} />
              </button>
              <h2 className="text-center text-2xl font-apex font-semibold mb-6">Generate NFT</h2>
              <div className="flex flex-col space-y-6">
                <div>
                  <label className="block font-medium mb-2">Type</label>
                  <select className="w-full bg-gray-100 font-roboto text-gray-700 p-3 rounded-md border border-red-500 outline-none">
                    <option>Single NFT</option>
                    <option>Collectible</option>
                    <option>Gaming</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium font-roboto mb-2">Prompt</label>
                  <input
                    type="text"
                    placeholder="Describe your NFT..."
                    className="w-full bg-gray-100 p-3 border font-roboto border-red-500 rounded-lg outline-none"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 font-roboto">Payment Method</label>
                  <select className="w-full bg-gray-100 p-3 font-roboto outline-none">
                    <option>Credit Card</option>
                    <option>Crypto Wallet</option>
                    <option>PayPal</option>
                  </select>
                </div>

                <Link to="/nftpagemint">
                  <button
                    onClick={handleCloseModal}
                    className="bg-button-gradient text-white py-2 px-6 rounded-xl font-roboto mr-11 hover:bg-red-700 mx-auto"
                  >
                    Confirm
                  </button>
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default App;
