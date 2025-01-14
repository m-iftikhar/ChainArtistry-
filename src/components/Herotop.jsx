import nextcollectionmain from '../assets/nextcollectionmain.PNG';

const Herotop = () => {
  return (
    <div
      className="flex items-center justify-between mx-auto mt-10"
      style={{ width: '100%', height: '687.9px', maxWidth: '1280px' }}
    >
      {/* Left Text Section */}
      <div
        className="flex flex-col justify-center"
        style={{ width: '512px', height: '310px' }}
      >
        <h1
          className="font-bold text-black leading-none"
          style={{ fontSize: '64px', fontWeight: 700 }}
        >
          <span className="uppercase">NFT</span> <br />
          <span className="uppercase text-red-600">Collections</span>
        </h1>
      </div>

      {/* Right Image Section */}
      <div
        className="flex justify-center items-center"
        style={{ width: '715px', height: '687.9px' }}
      >
        <img
          src={nextcollectionmain}
          alt="NFT Collections"
          className="w-full h-full object-cover"
          style={{ borderRadius: '8px' }}
        />
      </div>
    </div>
  );
};

export default Herotop;
