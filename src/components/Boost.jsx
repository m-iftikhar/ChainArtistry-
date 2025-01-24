import boost from '../assets/boost.png';
import proflie from '../assets/proflie.png';
import arrow from '../assets/arrow.png';
function BoostNFTSection() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-8 sm:px-6 lg:px-12">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Section */}
        <div className="text-white flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-[64px]  font-normal lg:text-5xl text-black font-apex leading-snug mb-4 md:mb-6">
            BOOST YOUR NFTs: <br /> ENHANCE VISIBILITY <br /> AND VALUE
          </h1>
          <p className="text-sm sm:text-base font-light font-roboto md:text-[18px] lg:text-[18px] text-black mb-6 md:mb-8">
            The Boost feature is a premium service that allows NFT creators and
            collectors to elevate their listings on our marketplace. By boosting
            an NFT, you can ensure it appears prominently in search results,
            featured sections, and on the homepage, maximizing exposure to
            potential buyers.
          </p>

          <div className="flex justify-start">
            <button className="inline-flex items-center justify-center w-[217px] h-[58px]  rounded-md font-roboto px-4 py-2 bg-button-gradient text-[22px] font-normal text-white ">
              Boost <span className="ml-2 w-[22px] h-[22px]">🚀</span>
            </button>
          </div>
        </div>

        {/* Right Section (NFT cards) */}
        <div className="relative flex justify-center items-center">
          {/* Background Blur Effect */}
          <div className="absolute w-full h-full bg-green-500 opacity-50 rounded-full blur-3xl" />

          {/* NFT Cards */}
          <div className="relative flex flex-wrap justify-center gap-8">
            {/* Card 1 */}
            <img src={arrow} className='w-12 h-12 mt-52 ' />
            <div className="relative bg-white rounded-lg shadow-lg p-2 h-[322px] overflow-hidden w-48 sm:w-56 lg:w-[242px]">
              <div className="p-4 border-b border-gray-300 flex items-center space-x-2">
                <img src={proflie} alt="Icon" className="w-8 h-8 opacity-60" />
                <span className="text-black font-apex">Stella Nova</span>
              </div>
              <img
                src={boost}
                alt="NFT 1"
                className="w-[228px] h-[247px] rounded-md object-cover bg-red-600 opacity-95"
              />
              
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center">
                <button className="text-sm font-apex">In Stock: 7</button>
                <button className="text-sm font-apex">Price: 142.02</button>
              </div>
            </div>
            <img src={arrow} className='w-20 h-32 mr-10  ' />


            {/* Card 2 */}
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden  p-2  h-[322px] w-48 sm:w-56 lg:w-[242px]">
              <div className="p-4 border-b border-gray-300 flex items-center space-x-2">
                <img src={proflie} alt="Icon" className="w-8 h-8 opacity-60" />
                <span className="text-black font-apex">Stella Nova</span>
              </div>
              <img
                src={boost}
                alt="NFT 2"
                className="w-[228px] h-[247px] object-cover rounded-md opacity-70 bg-red-600"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-2 flex justify-between items-center">
                <button className="text-sm font-apex">In Stock: 5</button>
                <button className="text-sm font-apex">Price: 120.50</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden  p-2 opacity-50 w-48 sm:w-56 lg:w-64">
              <div className="p-4 border-b border-gray-300 flex items-center space-x-2">
                <img src={proflie} alt="Icon" className="w-8 h-8 opacity-100" />
                <span className="text-black font-apex">Stella Nova</span>
              </div>
              <img
                src={boost}
                alt="NFT 3"
                className="w-60 h-48 object-cover opacity-40 bg-red-600"
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
