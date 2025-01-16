import nextcollectionmain from '../assets/nextcollectionmain.PNG';

const Herotop = () => {
  return (
    <div
      className="flex flex-col-reverse lg:flex-row items-center justify-center mx-auto mt-10 px-4 sm:px-6 md:px-8 lg:px-10"
      style={{ width: '100%', height: '687.9px', maxWidth: '1280px' }}
    >
       <div
        className="flex flex-col justify-center text-center lg:text-left"
        style={{ width: '100%', maxWidth: '512px', height: '310px' }}
      >
        <h1
          className="font-bold text-black leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontWeight: 700 }}
        >
          <span className="uppercase">NFT</span> <br />
          <span className="uppercase text-red-600">Collections</span>
        </h1>
      </div>
      
      <div
        className="flex justify-center items-center w-full lg:w-auto"
        style={{
          height: '100%',
        }}
      >
        <img
          src={nextcollectionmain}
          alt="NFT Collections"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      
      {/* <div
        className="flex flex-col justify-center text-center lg:text-left"
        style={{ width: '100%', maxWidth: '512px', height: '310px' }}
      >
        <h1
          className="font-bold text-black leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontWeight: 700 }}
        >
          <span className="uppercase">NFT</span> <br />
          <span className="uppercase text-red-600">Collections</span>
        </h1>
      </div> */}
    </div>
  );
};

export default Herotop;
