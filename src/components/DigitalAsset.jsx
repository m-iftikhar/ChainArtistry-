import digitalasset1 from '../assets/digitalasset1.png';
import digitalasset2 from '../assets/digitalasset2.png';
import digitalasset3 from '../assets/digitalasset3.png';
import digitalasset4 from '../assets/digitalasset4.png';
import digitalasset5 from '../assets/digitalasset5.png';
import digitalasset6 from '../assets/digitalasset6.png';
import digitalasset7 from '../assets/digitalasset7.png';
import digitalasset8 from '../assets/digitalasset8.png';

function App() {
  return (
    <div className=" h-[931px] w-full flex items-center   justify-center p-4  relative">
      <div className="w-full max-w-4xl text-center relative  ">
        {/* Tagline */}
        <h1 className="text-2xl sm:text-3xl md:text-[64px] lg:text-[64px] font-apex font-normal md:mb-[600px] md:leading-[1]">
  TURN YOUR IMAGINATION <br /> INTO DIGITAL ASSET
</h1>


        {/* Search Bar */}
        <div className="relative inline-block z-10 mb-6  w-full">
  <input
    type="text"
    placeholder="Fantasy Creature holding a sword..."
    className="w-full md:w-[737px] lg:w-[737px] p-3 md:h-[70px] md:p-4 border rounded-full shadow focus:outline-none focus:ring focus:ring-blue-500"
  />
  <button
    className="absolute md:right-24 right-0 top-1/2 transform -translate-y-1/2 px-4 md:px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600"
  >
    Generate
  </button>
</div>


        {/* Left Side Images */}
        <div className="absolute top-10 left-0 lg:left-[-60px] hidden sm:block">
          <img
            src={digitalasset1}
            alt="Left 1"
            className="w-12 sm:w-20 md:w-[110px] lg:w-[110px] md:h-[110px] rounded-md mb-2 md:mb-4 transform translate-x-6"
          />
          <img
            src={digitalasset2}
            alt="Left 2"
            className="w-16 sm:w-24 md:w-[160px] lg:w-[160px] md:h-[160px] rounded-md mb-2 md:mb-4 transform translate-x-4"
          />
          <img
            src={digitalasset3}
            alt="Left 3"
            className="w-20 sm:w-28 md:w-[110px] lg:w-[110px] md:h-[110px] rounded-md mb-2 md:mb-4 transform translate-x-2"
          />
          <img
            src={digitalasset4}
            alt="Left 4"
            className="w-24 sm:w-32 md:w-[110px] lg:w-[110px] md:h-[110px] rounded-md transform translate-x-8"
          />
        </div>

        {/* Right Side Images */}
        <div className="absolute top-10 right-0 lg:right-[-60px] hidden sm:block">
          <img
            src={digitalasset5}
            alt="Right 1"
            className="w-12 sm:w-20 md:w-[160px] lg:w-[160px] md:h-[160px] rounded-md mb-2 md:mb-4 transform translate-x-[-6px]"
          />
          <img
            src={digitalasset6}
            alt="Right 2"
            className="w-16 sm:w-24 md:w-[110px] lg:w-[110px] md:h-[110px] rounded-md mb-2 md:mb-4 transform translate-x-4"
          />
          <img
            src={digitalasset7}
            alt="Right 3"
            className="w-20 sm:w-28 md:w-[160px] lg:w-[160px] md:h-[160px] rounded-md mb-2 md:mb-4 transform translate-x-2"
          />
          <img
            src={digitalasset8}
            alt="Right 4"
            className="w-24 sm:w-32 md:w-[160px] lg:w-[160px] md:h-[160px] rounded-md transform translate-x-[-8px]"
          />
        </div>
      </div>

      {/* Add margin-bottom to prevent overlap */}
      
    </div>
  );
}

export default App;
