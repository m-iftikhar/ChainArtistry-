import mint1 from '../assets/mint1.png';
import { Link } from 'react-router-dom';

const Newcollection = () => {
  return (
    <div className="flex flex-col lg:flex-row py-10 justify-center items-start px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 bg-gradient-to-b from-pink-50 to-pink-200 min-h-screen relative">
      {/* Back Button */}
      <Link to="/mintdata">
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
        <h2 className="absolute top-[150px] text-center font-medium text-white">
          Selected
        </h2>
      </div>

      {/* Choose Button */}
      <button
  className="absolute left-1/2 transform -translate-x-1/2 hidden md:block mt-4 lg:left-44 lg:translate-x-0 bg-blue-500 text-white text-sm font-medium px-6 py-2 rounded-lg shadow"
  style={{ top: '380px' }} // Ensures the button stays positioned below the image
>
  Choose
</button>


      {/* Right Section (Form Section) */}
      <div
        className="rounded-lg shadow-md bg-white p-4 sm:p-6 md:p-8 w-full lg:max-w-[944px]"
      >
        <h1 className="text-2xl sm:text-3xl font-bold font-apex text-center mb-4">
          CREATE A COLLECTION
        </h1>

        {/* Form Fields */}
        <div className="mb-6">
          <h3 className="mb-2 font-medium font-roboto">Item Name*</h3>
          <input
            type="text"
            className="w-full h-[58px] font-roboto rounded-lg border-gray-300 border px-4 outline-none"
            placeholder="Name Your NFT"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-gray-700 mb-2 font-roboto font-medium">
            Token Symbol*
          </h3>
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

        <Link to="/mintdata">
          <button
            className="w-full sm:w-[139px] h-[53px] rounded-lg bg-button-gradient text-white text-lg font-medium mt-6"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Newcollection;
