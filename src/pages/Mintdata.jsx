
import mint1 from '../assets/mint1.png';
import { FaPlus } from 'react-icons/fa';
const Mintdata = () => {
  return (
    <div className="flex justify-center items-start p-8 gap-8 bg-gradient-to-b from-pink-50 to-pink-200 min-h-screen">
      {/* Left Box */}
    
      <div
  className="rounded-lg p-3 shadow-md bg-white flex justify-center items-center relative"
  style={{ width: '296px', height: '309px' }}
>
  {/* Image with reduced opacity */}
  <img
    src={mint1}
    alt="Selected NFT"
    className="w-[256px] h-[269px] rounded-xl "
   />

  {/* Text centered over the image */}
        <h2 className="absolute font-medium text-white">Selected</h2>
    </div>

      {/* Right Box */}
      <div
        className="rounded-lg shadow-md bg-white p-6"
        style={{ width: '944px', height: '1320px' }}
      >
        <h1 className='text-[24px] font-bold text-center'>
            MINT YOUR NFT
        </h1>
        {/* Item Name */}
        <div className="mb-6">
          <h3 className=" mb-2 font-medium">Item Name*</h3>
          <input
            type="text"
            className="w-[817px] h-[58px] rounded-lg border-gray-300 border px-4 outline-none"
            placeholder="Name Your NFT"
          />
        </div>

        {/* Token Symbol */}
        <div className="mb-6">
          <h3 className="text-gray-700 mb-2 font-medium">Token Symbol*</h3>
          <input
            type="text"
            className="w-[817px] h-[58px] rounded-lg border-gray-300 border px-4 outline-none"
            placeholder="CGPT , for example"
          />
          
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="mb-2 font-medium">Description</h3>
          <h3 className='text-gray-700 mb-2'>The description will be included on the items detail page underneath its image.</h3>
          <input
            type="text"
            className="w-[817px] h-[158px] rounded-lg border-gray-300 border p-4 outline-none"
            placeholder="provided a detail description of an item "
          />
          
        </div>

        {/* Line and Choose Collection */}
        <div className="mb-6">
          <p className="  font-medium mb-2">Choose a collection:</p>
          
          <p className='text-gray mb-2'>This is collection where your item will appear</p>
          
          <div className="flex gap-4 items-center">
        
          <div className="flex flex-col px-4 py-2 rounded-lg w-[396px] bg-white gap-2 border border-gray-300 shadow-md">
  <div className="flex gap-2 items-center"> {/* Center the items vertically */}
    {/* Smaller + symbol with image */}
    <img src={mint1} className="w-[61px] h-[61px] rounded-lg object-cover" />
    <span className="text-gray-700 font-medium text-medium">Wonderful Artworks</span>
  </div>

  {/* Text below the image, inside the same border */}
  <span className="text-sm text-gray-500 mt-1 font-semibold">Items 1.5k</span> {/* Adjusted spacing */}
</div>



            {/* New Collection */}
            
  {/* Create New Collection Section with "Type to create" text inside the border */}
  <div className="flex flex-col px-4 py-2 rounded-lg w-[396px] bg-white gap-2 border border-gray-300 shadow-md">
  <div className="flex gap-2 items-center"> {/* Center the items vertically */}
    {/* Smaller + symbol with image */}
    <FaPlus className="w-[61px] h-[61px] rounded-lg bg-gray-200" />
    <span className="text-gray-700 font-medium text-medium">Create New collection</span>
  </div>

  {/* Text below the image, inside the same border */}
  <span className="text-sm text-gray-500 mt-1 font-semibold">Type to Create</span> {/* Adjusted spacing */}
</div>




           
          </div>
        </div>

        {/* Add Traits */}
        <div className="mb-6">
          <p className=" mb-2 text-lg font-semibold">Add Traits</p>
          <div className='mb-2'>
            <h1>
            Traits describe attributes of your item. They appear as filters inside your collection page and 
            are also listed out inside your item page.
            </h1>
          </div>
          <button className="p-4 gap-6 justify-center items-center border border-gray-400 flex w-[195px] h-[58px] text-gray-700 rounded-xl">
            Add Trait <FaPlus className="" />
          </button>
        </div>

        {/* Royalties */}
        <div className="mb-6">
  <h3 className="text-gray-700 mb-2 font-medium">Royalties</h3>
  
  <label htmlFor="royalties" className="flex items-center cursor-pointer">
    {/* <span className="text-gray-700 mr-2">Enable Royalties</span> */}
    <div className="relative">
      <input
        type="checkbox"
        id="royalties"
        className="hidden"
      />
      <div className="toggle-bg w-12 h-6 bg-gray-300 rounded-full cursor-pointer"></div>
      <div className="toggle-circle w-6 h-6 bg-white rounded-full absolute left-0 top-0 transition-all"></div>
    </div>
  </label>
</div>


        {/* Mint Button */}
        <button
          className="w-[139px] h-[53pxpx]  rounded-lg bg-gradient-to-r from-[#d65d5d] to-[rgba(253,0,0,1)] text-white text-lg font-medium mt-6"
        >
          Mint
        </button>
      </div>
    </div>
  );
};

export default Mintdata;
