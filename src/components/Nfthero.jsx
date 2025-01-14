import { useState } from 'react';
import nfthero from '../assets/nfthero.png';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa'; // Importing the close icon
import ReactDOM from 'react-dom';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGenerateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="min-h-screen font-apex">
        {/* Hero Section */}
        <div className="text-center mt-12" style={{ width: '100%' }}>
          <h1 className="text-4xl font-apex font-bold text-gray-800 md:text-4xl">
            CREATE YOUR OWN <span className="text-red-600 text-4xl">MASTERPIECE</span>
          </h1>
        </div>

        {/* Centered Image */}
        <div
          className="flex justify-center items-center mt-6 mx-auto"
          style={{ maxWidth: '1332px', height: '100%', marginTop: '132px' }}
        >
          <img
            className="rounded-lg shadow-md w-full h-auto object-cover md:w-[1320px] md:h-[496px]"
            src={nfthero}
            alt="NFT"
          />
        </div>

        <div className="text-center font-apex mt-4">Get OnBoard And Earn Money Like Pro</div>

        {/* Search Bar */}
        <div className="mt-8 px-4 md:px-6" style={{ width: '1002px', margin: '0 auto', height: '70px' }}>
          <div className="bg-gray-100 rounded-lg font-apex flex items-center p-4 shadow-md h-full">
            <input
              type="text"
              placeholder="Fantasy Creature holding a sword..."
              className="flex-grow bg-transparent outline-none text-gray-700"
            />
            <button
              onClick={handleGenerateClick}
              className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Generate
            </button>
          </div>
        </div>

        {/* Dropdowns and Add Styles Button */}
        <br />
        <div className="flex justify-evenly items-center space-x-4" style={{ width: '100%', margin: '0 auto' }}>
          <div className="bg-gray-100 rounded-lg p-2 shadow-md">
            <select className="bg-transparent outline-none text-gray-700 font-apex cursor-pointer">
              <option>Single NFT</option>
              <option>Batch NFT</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-apex">Supply</span>
            <input
              type="number"
              defaultValue="10"
              className="bg-gray-100 rounded-lg p-2 outline-none shadow-md w-16 text-center"
            />
          </div>

          <Link to="/nftpagemint">
            <button className="flex items-center bg-gray-100 rounded-lg p-2 shadow-md space-x-2">
              <span className="text-gray-700 font-apex">Add Styles</span>
              <FaPlus className="text-gray-700" />
            </button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div
              className="bg-white rounded-lg p-6 pb-2 shadow-lg absolute"
              style={{ width: '415px', height: '580px', borderRadius: '25px' }}
            >
                <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              onClick={handleCloseModal}
            >
              <FaTimes size={20} />
            </button>
              {/* Modal Content */}
              <h2 className="text-center text-2xl font-semibold mb-6">Generate NFT</h2>
              <div className="flex flex-col space-y-6">
                {/* Select Type */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Type</label>
                  <select className="w-[353px] h-[55px] bg-gray-100 text-gray-400 p-3 rounded-md border border-red-500 outline-none ">
                    <option>Single NFT</option>
                    <option>Collectible</option>
                    <option>Gaming</option>
                  </select>
                </div>

                {/* Prompt for Text */}
                <div>
                  <label className="block text-gray-400 font-medium mb-2">Prompt</label>
                  <input
                    type="text"
                    placeholder="Describe your NFT..."
                    className="w-full bg-gray-100 p-3 h-20 border border-red-500 rounded-lg outline-none"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
                  <select className="w-[353px] h-[92px] bg-gray-100 p-3 outline-none">
                    <option>Credit Card</option>
                    <option>Crypto Wallet</option>
                    <option>PayPal</option>
                  </select>
                </div>

                {/* Confirm Button */}
                <button
                  onClick={handleCloseModal}
                  className="w-[144px] h-[43px] bg-gradient-to-r from-[#d65d5d] to-[rgba(253,0,0,1)] text-white ml-[230px] text-[18px] flex items-center justify-center rounded-xl hover:bg-red-700"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default App;
