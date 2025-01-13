import nfthero from '../assets/nfthero.png'

// import { FaPlus } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen font-apex">
      {/* Hero Section */}
      {/* Tagline */}
      <div className="text-center mt-12 " style={{ width: '100%' }}>
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
          src={nfthero}  // Make sure to use the appropriate image source here
          alt="NFT"
        />
      </div>

      <div className="text-center font-apex mt-4">Get OnBoard And Earn Money Like Pro</div>

      {/* Search Bar */}
      <div className="mt-8 px-4 md:px-6" style={{ width: '1002px', margin: '0 auto', height:'70px'}}>
        <div className="bg-gray-100 rounded-lg font-apex flex items-center p-4 shadow-md h-full">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="flex-grow bg-transparent outline-none text-gray-700"
          />
          <button className="bg-red-600 text-white font-apex px-4 py-2 rounded-lg hover:bg-red-700">
            Generate
          </button>
        </div>
      </div>

      {/* Dropdowns and Add Styles Button */}
      <br />
      <div className="flex justify-evenly items-center space-x-4" style={{ width: '100%', margin: '0 auto' }}>
        {/* Single NFT Dropdown */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-md">
          <select className="bg-transparent outline-none text-gray-700 font-apex cursor-pointer">
            <option>Single NFT</option>
            <option>Batch NFT</option>
          </select>
        </div>

        {/* Supply Input */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-apex">Supply</span>
          <input
            type="number"
            defaultValue="10"
            className="bg-gray-100 rounded-lg p-2 outline-none shadow-md w-16 text-center"
          />
        </div>

        {/* Add Styles Button */}
        <button className="flex items-center bg-gray-100 rounded-lg p-2 shadow-md space-x-2">
          <span className="text-gray-700 font-apex">Add Styles</span>
          {/* <FaPlus className="text-gray-700" /> */}
        </button>
      </div>
    </div>
  );
}

export default App;
