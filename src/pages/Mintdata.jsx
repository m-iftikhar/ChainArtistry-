import mint1 from '../assets/mint1.png';
import { FaPlus,FaTimes } from 'react-icons/fa';
import { useState } from 'react';


const Mintdata = () => {
  const [showTraitsModal, setShowTraitsModal] = useState(false);

  const handleAddTraitsClick = () => {
    setShowTraitsModal(true);
  };

  const handleCloseModal = () => {
    setShowTraitsModal(false);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-4 sm:p-6 md:p-8 gap-6 sm:gap-8 bg-gradient-to-b from-pink-50 to-pink-200 min-h-screen">
      
      <div
        className="rounded-lg p-3 shadow-md bg-white flex justify-center items-center relative"
        style={{ width: '296px', height: '309px' }}
      >
        <img
          src={mint1}
          alt="Selected NFT"
          className="w-[256px] h-[269px] rounded-xl"
        />
        <h2 className="absolute font-medium text-white">Selected</h2>
      </div>

      
      <div
        className="rounded-lg shadow-md bg-white p-4 sm:p-6 md:p-8"
        style={{ maxWidth: '944px', width: '100%' }}
      >
        <h1 className="text-3xl sm:text-2xl font-bold font-apex text-center mb-4">MINT YOUR NFT</h1>

        
        <div className="mb-6">
          <h3 className="mb-2 font-medium  font-roboto">Item Name*</h3>
          <input
            type="text"
            className="w-full h-[58px] font-roboto rounded-lg border-gray-300 border px-4 outline-none"
            placeholder="Name Your NFT"
          />
        </div>

        
        <div className="mb-6">
          <h3 className="text-gray-700 mb-2 font-roboto font-medium">Token Symbol*</h3>
          <input
            type="text"
            className="w-full h-[58px] font-roboto rounded-lg border-gray-300 border px-4 outline-none"
            placeholder="CGPT, for example"
          />
        </div>

        
        <div className="mb-6">
          <h3 className="mb-2 font-roboto font-medium">Description</h3>
          <textarea
            className="w-full h-[158px] font-roboto rounded-lg border-gray-300 border p-4 outline-none resize-none"
            placeholder="Provide a detailed description of the item"
          ></textarea>
        </div>

        
        <div className="mb-6 font-roboto">
          <p className="font-medium mb-2">Choose a collection:</p>
          <p className="text-gray-500 mb-4">This is the collection where your item will appear.</p>
          <div className="flex flex-col sm:flex-row gap-4 font-roboto">
            <div className="flex items-center px-4 py-2 rounded-lg bg-white border border-gray-300 shadow-md">
              <img src={mint1} className="w-[61px] h-[61px] rounded-lg object-cover" alt="Collection" />
              <span className="text-gray-700 font-medium ml-4">Wonderful Artworks</span>
            </div>

            <div className="flex items-center px-4 font-roboto py-2 rounded-lg bg-white border border-gray-300 shadow-md">
              <FaPlus className="w-[61px] h-[61px] rounded-lg bg-gray-200 p-2" />
              <span className="text-gray-700 font-medium ml-4">Create New Collection</span>
            </div>
          </div>
        </div>

        
        <div className="mb-6 font-roboto">
          <p className="mb-2 text-lg font-semibold">Add Traits</p>
          <p className="mb-4 text-gray-600">
            Traits describe attributes of your item. They appear as filters inside 
            your collection page and are also listed out inside your item page.
          </p>
          <button
            onClick={handleAddTraitsClick}
            className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-xl text-gray-700"
          >
            Add Trait <FaPlus />
          </button>
        </div>

        
        <div className="mb-6 font-roboto">
          <h3 className="text-gray-700 mb-2 font-medium">Royalties</h3>
          <label htmlFor="royalties" className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="royalties" className="hidden" />
              <div className="toggle-bg w-12 h-6 bg-gray-300 rounded-full cursor-pointer"></div>
              <div className="toggle-circle w-6 h-6 bg-white rounded-full absolute left-0 top-0 transition-all"></div>
            </div>
          </label>
        </div>

        
        <button
          className="w-full font-roboto sm:w-[139px] h-[53px] rounded-lg bg-gradient-to-r from-[#d65d5d] to-[rgba(253,0,0,1)] text-white text-lg font-medium mt-6"
        >
          Mint
        </button>
      </div>

      
      {showTraitsModal && (
        <div className="fixed inset-0 font-roboto flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div
            className="bg-white rounded-lg p-6 shadow-lg relative"
            style={{ width: '618px', height: '342px' }}
          >
             <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        onClick={handleCloseModal} // Close modal handler
      >
        <FaTimes className="w-6 h-6" />
      </button>
            <h2 className="text-xl font-bold text-center mb-6">ADD TRAITS</h2>
            <div className="mb-4">
              <label className="block font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-[272px] h-[40px] rounded-lg border-gray-300 border px-4 outline-none"
                placeholder="Enter trait name"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Type</label>
              <input
                type="text"
                className="w-[272px] h-[40px] rounded-lg border-gray-300 border px-4 outline-none"
                placeholder="Enter trait type"
              />
            </div>
            <button
              onClick={handleCloseModal}
              className="absolute bottom-4 right-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mintdata;
