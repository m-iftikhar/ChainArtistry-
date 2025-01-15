

const Herotitle = () => {
  return (
    <div className="h-[200px]  flex flex-col items-center  justify-center text-center px-6 ">
      {/* First Line: Discover & Share */}
      <h1 className="text-4xl md:text-6xl font-semibold text-gray-800">
        Discover & Share
      </h1>

      {/* Second Line: Sell Artworks */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mt-2">
        Sell Artworks
      </h1>

      {/* Third Line: Description */}
      <p className="mt-4 text-sm md:text-lg font-light text-gray-600 max-w-2xl mx-auto">
        Discover and trade unique digital art pieces on our NFT website, where creativity meets blockchain technology.
      </p>
    </div>
  );
};

export default Herotitle;
