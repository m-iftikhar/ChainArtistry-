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
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-4xl text-center relative">
        {/* Tagline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-apex mb-10 md:mb-16">
          TURN YOUR IMAGINATION <br /> INTO DIGITAL ASSET
        </h1>

        {/* Search Bar in Middle */}
        <div className="relative inline-block z-10 mb-10">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="w-full lg:w-96 p-4 border rounded-full shadow focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            className="absolute right-2 top-2.5 px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600"
          >
            Generate
          </button>
        </div>

        {/* Left Side Images */}
        <div className="absolute top-12 left-[-30px] md:left-[-80px] hidden lg:block">
          <img
            src={digitalasset1}
            alt="Left 1"
            className="w-20 md:w-32 lg:w-40 h-20 md:h-32 lg:h-40 rounded-md mb-4 transform translate-x-8 translate-y-0"
          />
          <img
            src={digitalasset2}
            alt="Left 2"
            className="w-24 md:w-36 lg:w-48 h-24 md:h-36 lg:h-48 rounded-md mb-4 transform translate-x-8 translate-y-4"
          />
          <img
            src={digitalasset3}
            alt="Left 3"
            className="w-24 md:w-36 lg:w-48 h-24 md:h-36 lg:h-48 rounded-md mb-4 transform translate-x-0 translate-y-12"
          />
          <img
            src={digitalasset4}
            alt="Left 4"
            className="w-24 md:w-36 lg:w-48 h-24 md:h-36 lg:h-48 rounded-md transform translate-x-[80px] translate-y-12"
          />
        </div>

        {/* Right Side Images */}
        <div className="absolute top-12 right-[-30px] md:right-[-80px] hidden lg:block">
          <img
            src={digitalasset5}
            alt="Right 1"
            className="w-20 md:w-32 lg:w-40 h-20 md:h-32 lg:h-40 rounded-md mb-4 transform translate-x-[-80px] translate-y-0"
          />
          <img
            src={digitalasset6}
            alt="Right 2"
            className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-md mb-4 transform translate-x-16 translate-y-4"
          />
          <img
            src={digitalasset7}
            alt="Right 3"
            className="w-24 md:w-36 lg:w-48 h-24 md:h-36 lg:h-48 rounded-md mb-4 transform translate-x-16 translate-y-8"
          />
          <img
            src={digitalasset8}
            alt="Right 4"
            className="w-24 md:w-36 lg:w-48 h-24 md:h-36 lg:h-48 rounded-md transform translate-x-[-80px] translate-y-12"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
