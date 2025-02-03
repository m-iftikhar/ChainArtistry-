

const Herotitle = () => {
  return (
    <div className="h-[200px] mt-[150px]   flex flex-col items-center  justify-center text-center px-6 ">
      {/* First Line: Discover & Share */}
      <h1 className="text-6xl font-apex md:text-[96px] lg:[96px] font-normal text-[#2B2B2B]  md:mt-6">
        DISCOVER CREATE &
      </h1>

      {/* Second Line: Sell Artworks */}
      <h1 className="text-6xl font-apex md:text-[96px] lg:[96px] font-normal text-[#2B2B2B]  ">
        SELL ARTWORKS.
      </h1>

      {/* Third Line: Description */}
      <p className=" font-roboto text-sm md:text-[18px] font-light text-gray-600 max-w-2xl mx-auto md:mt-2">
        Discover and trade unique digital art pieces on our NFT website, where creativity meets blockchain technology.
      </p>
    </div>
  );
};

export default Herotitle;
