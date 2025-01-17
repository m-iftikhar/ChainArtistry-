import auchero from '../assets/auchero.png';

const Auctionhero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 md:px-6 py-16 md:py-20 h-full">
      {/* Title Section */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-red-600 mb-6 leading-tight">
        AUCTIONS
      </h1>

      {/* Image Section */}
      <div className="w-full max-w-5xl flex justify-center">
        <img
          src={auchero}
          alt="NFT Collection"
          className="w-full max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[400px] xl:max-h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default Auctionhero;
