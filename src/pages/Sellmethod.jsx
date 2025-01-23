import { Link } from "react-router-dom";
import mint1 from '../assets/mint1.png';
import price from '../assets/price.png';
import auction from '../assets/auction.png';
import fry from '../assets/fry.png';

const Sellmethod = () => {
  return (
    <div className="flex flex-col lg:flex-row py-10 mt-[100px] justify-center items-start px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 bg-gradient-to-b from-pink-50 to-pink-200 min-h-screen relative">
      {/* Back Button */}
      <Link to="/profile">
        <button className="absolute top-3 left-3 bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-lg shadow">
          Back
        </button>
      </Link>

      {/* Left Section (Image Card) */}
      <div
        className="relative rounded-lg p-3 shadow-md bg-white flex flex-col justify-between items-center lg:mt-6"
        style={{ width: '296px', height: '300px' }}
      >
        <img
          src={mint1}
          alt="Selected NFT"
          className="w-[256px] h-[269px] rounded-xl"
        />
      </div>
     

      {/* Form Section */}
      <div className="rounded-lg shadow-md bg-white p-4 sm:p-6 md:p-8 w-full lg:max-w-[944px]">
        {/* Title */}
        <h1 className="text-center text-[40px] font-bold font-apex mb-6">Royal Samurai</h1>
        <p className="font-roboto font-semibold text-[26px]">Select Your Sell Method</p>

        {/* Sell Method */}
        <div className="flex flex-wrap  mt-10 gap-6 sm:gap-10 md:gap-12">
          <button
            className="flex flex-col items-center justify-center w-[207px] h-[217px] opacity-100"
          >
            <img
              src={price}
              alt="Fixed Price"
              className="w-32 h-32 mb-2"
            />
            
          </button>
          <button
            className="flex flex-col items-center justify-center w-[207px] h-[217px] opacity-100"
          >
            <img
              src={auction}
              alt="Auction"
              className="w-32 h-32 mb-2"
            />
        
          </button>
        </div>

        {/* Price Input */}
        <label htmlFor="schedule" className="block text-lg font-apex mb-2">
          Price
        </label>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-[126px] h-[58px] rounded-xl text-center border border-gray-300 flex justify-center gap-4 p-2">
            <img
              src={fry}
              alt="Icon"
              className="w-10 h-10 rounded-full bg-black object-cover"
            />
            <p className="font-roboto">Fry</p>
          </div>
          <input
            type="text"
            placeholder="Enter price for one item"
            className="w-full sm:w-[671px] h-[58px] p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Schedule Listing */}
        <div className="mb-6">
          <label htmlFor="schedule" className="block text-[20px] font-roboto mb-2">
            Schedule Listing
          </label>
          <select
            id="schedule"
            className="w-full sm:w-[817px] h-[58px] p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option>1 month</option>
            <option>2 months</option>
            <option>3 months</option>
          </select>
        </div>

        {/* Submit Button */}
        <Link to='/profile'>
          <button className="self-start w-full sm:w-40 py-3 text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-lg hover:scale-105 transition duration-300">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sellmethod;
