import boost from '../assets/boost.png';
import proflie from '../assets/proflie.png';

function BoostNFTSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-4 md:px-12 md:py-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
    
        {/* Left Section */}
        <div className="text-white flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-apex leading-snug mb-4 md:mb-6">
            BOOST YOUR NFTs: <br /> ENHANCE VISIBILITY <br /> AND VALUE
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-apex text-black mb-4 md:mb-8">
            The Boost feature is a premium service that allows NFT creators and
            collectors to elevate their listings on our marketplace. By boosting
            an NFT, you can ensure it appears prominently in search results,
            featured sections, and on the homepage, maximizing exposure to
            potential buyers.
          </p>
          
          <div className="flex justify-start">
            <button className="inline-flex items-center font-apex px-4 py-2 bg-red-600 text-white text-sm hover:bg-red-400">
              Boost <span className="ml-2">🚀</span>
            </button>
          </div>
        </div>

        {/* Right Section (NFT cards) */}
        <div className="relative flex justify-center items-center md:flex">
          
          {/* Background Blur Effect */}
          <div className="absolute w-full h-full bg-green-500 opacity-20 rounded-full blur-3xl" />

          {/* NFT Cards */}
          <div className="absolute top-0 left-[-20px] sm:left-[-30px] md:left-[-40px] transform">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Icon and Name */}
              <div className="p-4 border-b border-gray-300 flex items-center space-x-2">
                <img src={proflie} alt="Icon" className="w-8 h-8 opacity-60" />
                <span className="text-black font-apex">Stella Nova</span>
              </div>
              
              {/* Boost Image */}
              <img
                src={boost}
                alt="NFT 1"
                className="w-32 sm:w-40 md:w-48 h-auto bg-red-600"
              />
              
              {/* Overlay with Buttons */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center rounded-b-lg">
                <button className="text-sm font-apex">In Stock: 7</button>
                <button className="text-sm font-apex">Price: 142.02</button>
              </div>
            </div>
          </div>

          <div className="absolute top-16 right-[-20px] sm:right-[-30px] md:right-[-40px] transform">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-300 flex items-center space-x-2">
                <img src={proflie} alt="Icon" className="w-8 h-8 opacity-60" />
                <span className="text-black font-apex">Stella Nova</span>
              </div>
            
              <img
                src={boost}
                alt="NFT 2"
                className="w-32 sm:w-40 md:w-48 h-auto bg-red-500"
              />
              
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center rounded-b-lg">
                <button className="text-sm font-apex">In Stock: 5</button>
                <button className="text-sm font-apex">Price: 120.50</button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-40px] sm:bottom-[-60px] md:bottom-[-80px] left-[-20px] sm:left-[-30px] md:left-[-40px] transform">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-300 flex items-center space-x-2">
                <img src={proflie} alt="Icon" className="w-8 h-8 opacity-100" />
                <span className="text-black font-apex">Stella Nova</span>
              </div>
            
              <img
                src={boost}
                alt="NFT 3"
                className="w-32 sm:w-40 md:w-48 h-28 opacity-90 bg-red-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center rounded-b-lg">
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
