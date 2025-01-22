import SellerTop from '../assets/SellerTop.png';

const Sellerhero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 mt-8 md:mt-12 lg:mt-16">
      {/* Tagline */}
      <div className="text-center lg:text-left lg:w-[679px] w-[244px] mb-8 lg:mb-0 px-4 md:px-6 ">
        <h1 className="text-3xl sm:text-4xl md:text-[64px] font-apex font-bold  mb-4">
          TOP <br />
          <span className="text-4xl sm:text-5xl md:text-[64px] font-apex text-red-600 font-bold">
            SELLER
          </span>
        </h1>
       
      </div>

      {/* Image */}
      <div className="lg:w-[495px] h-[525px] flex justify-center px-4 md:px-6 lg:px-8">
        <img
          src={SellerTop}
          alt="NFT Collection"
          className="w-full max-w-xs sm:max-w-sm md:max-w-[495px] lg:max-w-lg h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Sellerhero;
