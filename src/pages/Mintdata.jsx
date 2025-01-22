import mint1 from '../assets/mint1.png';
import { FaPlus,FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
       <Link  to="/nftpagemint">   <button
          className="absolute top-28 left-3 bg-white text-[20px] font-normal w-[126px] h-[64px] px-4 py-2 rounded-lg shadow"
        >
          Back
        </button> </Link>
      <div
        className="rounded-lg p-3 mt-16 shadow-md bg-white flex justify-center items-center relative"
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
        className="rounded-lg shadow-md mt-16 lg:h-[1320px] bg-white p-4 sm:p-6 md:p-8"
        style={{ maxWidth: '944px', width: '100%' }}
      >
        <h1 className="text-[40px] sm:text-2xl font-normal font-apex text-center mb-4">MINT YOUR NFT</h1>

        
        <div className="mb-6">
          <h3 className="mb-2 font-medium  font-roboto text-[20px]">Item Name*</h3>
          <input
            type="text"
            className="w-full h-[58px] lg:w-[817px] font-roboto rounded-lg border-gray-300 border px-4 outline-none"
            placeholder="Name Your NFT"
          />
        </div>

        
        <div className="mb-6">
          <h3 className=" mb-2 font-roboto font-medium text-[20px]">Token Symbol*</h3>
          <input
            type="text"
            className="w-full h-[58px] lg:w-[817px] font-roboto rounded-lg border-gray-300 border px-4 outline-none"
            placeholder="CGPT, for example"
          />
        </div>

        
        <div className="mb-6">
          <h3 className="mb-2 font-roboto font-medium text-[20px]">Description</h3>
          <textarea
            className="w-full h-[158px] lg:w-[817px] font-roboto rounded-lg border-gray-300 border p-4 outline-none resize-none"
            placeholder="Provide a detailed description of the item"
          ></textarea>
        </div>

        
        <div className="mb-6 font-roboto">
          <div className='flex justify-between'>
          <p className="font-medium text-[20px] font-roboto mb-2">Choose a collection:</p>
          <Link to="/choosecollection">
          <p className="font-medium mb-2 text-gray-500 font-roboto text-[16px] relative right-16 underline">Choose from existed</p> </Link>
          </div>
          <p className="text-gray-500 text-[16px] font-roboto font-normal mb-4">This is the collection where your item will appear.</p>
          <div className="flex flex-col sm:flex-row gap-4 font-roboto">
            <div className="flex items-center px-4 py-2 lg:w-[396px] lg:h-[91px] rounded-lg bg-white border border-gray-300 shadow-md">
              <img src={mint1} className="w-[61px] h-[61px] rounded-lg object-cover" alt="Collection" />
              <span className="text-[18px] font-medium ml-4">Wonderful Artworks</span>
            </div>

            <Link to="/newcollection"> <div className="flex items-center lg:w-[396px] lg:h-[91px]  px-4 font-roboto py-2 rounded-lg bg-white border border-gray-300 shadow-md">
              <FaPlus className="w-[61px] h-[61px] rounded-lg bg-gray-200 p-2" />
              <span className="text-[18px] font-medium ml-4">Create New Collection</span>
            </div></Link>
          </div>
        </div>

        
        <div className="mb-6 font-roboto">
          <p className="mb-2 font-roboto font-medium text-[20px]">Add Traits</p>
          <p className="mb-4 font-roboto text-[18px] font-normal text-gray-600">
            Traits describe attributes of your item. They appear as filters inside 
            your collection page and are also listed out inside your item page.
          </p>
          
          <button
            onClick={handleAddTraitsClick}
            className="flex items-center gap-2 lg:w-[195px] lg:h-[58px] text-center justify-center px-4 py-2 border border-gray-400 rounded-xl text-gray-700"
          >
            Add Trait <FaPlus />
          </button>
        </div>

        
        <div className="mb-6 font-roboto">
          <h3 className=" font-roboto mb-2 font-medium text-[20px]">Royalties</h3>
          <label htmlFor="royalties" className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="royalties" className="hidden" />
              <div className="toggle-bg w-12 h-6 bg-gray-300 rounded-full cursor-pointer"></div>
              <div className="toggle-circle w-6 h-6 bg-white rounded-full absolute left-0 top-0 transition-all"></div>
            </div>
          </label>
        </div>

        
      <Link to="/profile">  <button
          className="w-full font-roboto sm:w-[139px] h-[53px] rounded-lg bg-button-gradient text-white text-lg font-medium mt-6"
        >
          Mint
        </button> </Link>
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
              className="absolute bottom-4 right-4 px-6 py-2 bg-button-gradient text-white rounded-lg"
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
