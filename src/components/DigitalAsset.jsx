import digitalasset1 from '../assets/digitalasset1.png'
import digitalasset2 from '../assets/digitalasset2.png'
import digitalasset3 from '../assets/digitalasset3.png'
import digitalasset4 from '../assets/digitalasset4.png'
import digitalasset5 from '../assets/digitalasset5.png'
import digitalasset6 from '../assets/digitalasset6.png'
import digitalasset7 from '../assets/digitalasset7.png'
import digitalasset8 from '../assets/digitalasset8.png'
function App() {
  return (
    <div className=" h-[931px] flex items-center justify-center p-4  w-[1320px]">
      <div className="w-full max-w-4xl text-center mb-96 relative">
        {/* Tagline */}
        <h1 className="text-3xl font-apex w-400  mb-44">TURN YOUR IMAGINATION <br /> INTO DIGITAL ASSET</h1>

        {/* Images */}
        {/* Left Side Images */}
        <div className="absolute top-12 left-[-100px] hidden lg:block">
          <img
            src={digitalasset1}
            alt="Left 1"
            className="w-26 h-26 rounded-md mb-4 translate-x-12 translate-y-0"
          />
          <img
            src={digitalasset2}
            alt="Left 2"
            className="w-110 h-110 rounded-md mb-4 translate-x-12 translate-y-4"
          />
          <img
            src={digitalasset3}
            alt="Left 3"
            className="w-100 h-100 rounded-md mb-4 translate-x-0 translate-y-16"
          />
          <img
            src={digitalasset4}
            alt="Left 4"
            className="w-100 h-100 rounded-md translate-x-[96px] translate-y-16"
          />
        </div>

        {/* Search Bar in Middle */}
        <div className="relative inline-block z-10">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="w-full lg:w-96 p-4 border rounded-full shadow focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            className="absolute right-2 font-apex top-2.5 px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600"
          >
            Generate
          </button>
        </div>

        {/* Right Side Images */}
        <div className="absolute top-12 right-[-100px] hidden lg:block">
          <img
            src={digitalasset5}
            alt="Right 1"
            className="w-80px h-80px rounded-md mb-4 translate-x-[-96px] translate-y-0"
          />
          <img
            src={digitalasset6}
            alt="Right 2"
            className="w-20 h-20 rounded-md mb-4 translate-x-20 translate-y-4"
          />
          <img
            src={digitalasset7}
            alt="Right 3"
            className="w-40 h-40 rounded-md mb-4 mr-10 translate-x-20 translate-y-12"
          />
          <img
            src={digitalasset8}
            alt="Right 4"
            className="w-100px h-100px rounded-md translate-x-[-96px] translate-y-16"
          />
        </div>
      </div>
    </div>
  );
}

export default App;