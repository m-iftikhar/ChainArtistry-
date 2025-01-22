import nextcollectionmain from '../assets/nextcollectionmain.png';

const Herotop = () => {
  return (
    <div
      className="flex flex-col-reverse lg:flex-row items-center justify-center mx-auto mt-10 px-4 sm:px-6 md:px-8 lg:px-10"
      style={{ width: '100%', height: 'auto', maxWidth: '1280px' }}
    >
      {/* Text Section */}
      <div
        className="flex flex-col justify-center text-center lg:text-left"
        style={{ width: '100%', maxWidth: '512px' }}
      >
        <h1
          className="font-extrabold text-black font-apex leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span className="uppercase">NFT</span> <br />
          <span className="uppercase text-red-600">Collections</span>
        </h1>
      </div>

      {/* Image Section */}
      <div
        className="flex justify-center items-center w-full lg:w-auto"
        style={{ height: 'auto' }}
      >
        <img
          src={nextcollectionmain}
          alt="NFT Collections"
          className="w-full h-auto max-w-[714px] md:h-[687px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Herotop;
