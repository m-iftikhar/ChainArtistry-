import heroimage from '../assets/heroimage.png';
import hands from '../assets/hands.png';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center top-[50px] justify-center text-center px-4 py-8 h-screen md:px-6 md:py-16">
      {/* Title and Description */}
      <div className="w-[90%] max-w-[1140px] h-auto leading-[1.2] md:h-[256px] md:leading-[102px]">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-4 md:text-[64px] md:mb-4">
          DISCOVER, CREATE 
          <h1 className='md:mt-7'>& SELL ARTWORKS.</h1>
        </h1>
        <p className="text-sm text-gray-700 mb-8 md:text-lg md:mb-8">
          Discover and trade unique digital art pieces on our NFT website, where creativity meets blockchain technology.
        </p>
      </div>

      {/* Single Image with Embedded Background */}
      <div className="relative flex items-center justify-center h-auto w-full max-w-[1920px] top-12 mx-auto mb-8">
        <img
          src={heroimage}
          alt="Hero Image"
          className="relative z-10 rounded-lg shadow-lg w-[90%] max-w-[921px] h-auto md:h-[410px] md:w-[921px]"
        />
      </div>

      {/* Background Hands Image */}
      <img
        src={hands}
        alt="Hands Background"
        className="absolute bottom-0 left-0 w-full h-auto opacity-100 z-0"
      />
    </div>
  );
};

export default Hero;
