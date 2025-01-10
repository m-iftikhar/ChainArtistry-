import heroimage from '../assets/heroimage.png';
import hands from '../assets/hands.png';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center top-[50px] justify-center text-center px-4 py-8 h-screen md:px-6 md:py-16">
      {/* Title and Description */}
      <div className='w-[1140px] h-[256px]  left-[387px] leading-[102px]'>
      <h1 className="text-2xl font-extrabold text-gray-900 mb-4 md:text-4xl md:mb-4 w-400 text-[96px]">
        DISCOVER, CREATE & SELL ARTWORKS.
      </h1>
      <p className="text-base text-gray-700 mb-8 md:text-lg md:mb-8">
        Discover and trade unique digital art pieces on our NFT website, where creativity meets blockchain technology.
      </p>
      </div>
     
      {/* Single Image with Embedded Background */}
    
      <div className="relative flex items-center justify-center h-[630px] w-[1920px] top-12 max-w-screen-md mx-auto mb-8">
        <img
          src={heroimage}
          alt="heroimage"
          className="relative z-10 rounded-lg shadow-lg w-full h-[410px] md:w-[921px] md:h-[416px]"
        />
      </div>

      {/* Background Hands Image */}
      <img
        src={hands}
        alt="Hands Background"
        className="absolute bottom-0 w-full h-auto opacity-100 z-0 md:w-full md:h-auto "
      />
      </div>

  );
};

export default Hero;
