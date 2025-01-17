import boost from '../assets/boost.png';
import proflie from '../assets/proflie.png';

function BoostNFTSection() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-8 sm:px-6 lg:px-12">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Section */}
        <div className="text-white flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl  font-bold lg:text-5xl text-black font-apex leading-snug mb-4 md:mb-6">
            BOOST YOUR NFTs: <br /> ENHANCE VISIBILITY <br /> AND VALUE
          </h1>
          <p className="text-sm sm:text-base font-semibold font-roboto md:text-lg lg:text-xl  text-black mb-6 md:mb-8">
            The Boost feature is a premium service that allows NFT creators and
            collectors to elevate their listings on our marketplace. By boosting
            an NFT, you can ensure it appears prominently in search results,
            featured sections, and on the homepage, maximizing exposure to
            potential buyers.
          </p>

          <div className="flex justify-start">
            <button className="inline-flex items-center rounded-md font-roboto px-4 py-2 bg-red-600 text-white text-sm hover:bg-red-400">
              Boost <span className="ml-2">🚀</span>
            </button>
          </div>
        </div>

        {/* Right Section (NFT cards) */}
        <div className="relative flex justify-center items-center">
          {/* Background Blur Effect */}
          <div className="absolute w-full h-full bg-green-500 opacity-20 rounded-full blur-3xl" />

          {/* NFT Cards */}
          <div className="relative flex flex-wrap justify-center gap-8">
            {/* Card 1 */}
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-48 sm:w-56 lg:w-64">
              <div className="p-4 border-b border-gray-300 flex items-center space-x-2">
                <img src={proflie} alt="Icon" className="w-8 h-8 opacity-60" />
                <span className="text-black font-apex">Stella Nova</span>
              </div>
              <img
                src={boost}
                alt="NFT 1"
                className="w-full h-60 object-cover bg-red-600 opacity-95"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center">
                <button className="text-sm font-apex">In Stock: 7</button>
                <button className="text-sm font-apex">Price: 142.02</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-48 sm:w-56 lg:w-64">
              <div className="p-4 border-b border-gray-300 flex items-center space-x-2">
                <img src={proflie} alt="Icon" className="w-8 h-8 opacity-60" />
                <span className="text-black font-apex">Stella Nova</span>
              </div>
              <img
                src={boost}
                alt="NFT 2"
                className="w-full h-48 object-cover opacity-70 bg-red-600"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center">
                <button className="text-sm font-apex">In Stock: 5</button>
                <button className="text-sm font-apex">Price: 120.50</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden opacity-50 w-48 sm:w-56 lg:w-64">
              <div className="p-4 border-b border-gray-300 flex items-center space-x-2">
                <img src={proflie} alt="Icon" className="w-8 h-8 opacity-100" />
                <span className="text-black font-apex">Stella Nova</span>
              </div>
              <img
                src={boost}
                alt="NFT 3"
                className="w-full h-48 object-cover opacity-40 bg-red-600"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center">
                <button className="text-sm font-apex">In Stock: 3</button>
                <button className="text-sm font-apex">Price: 99.99</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoostNFTSection;
