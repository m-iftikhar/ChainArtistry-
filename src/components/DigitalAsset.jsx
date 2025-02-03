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
    <div className="md:min-h-screen w-full flex items-center justify-center p-4 relative ">
      <div className="w-full max-w-4xl text-center relative flex flex-col md:flex-row items-center gap-6 ">
        
        {/* Left Side Images (Hidden 2 on mobile) */}
        <div className="absolute  right-0 lg:left-[-85px] hidden sm:block space-y-4">
          <img src={digitalasset1} alt="Left 1" className="w-16 md:w-[110px] md:h-[110px] rounded-md" />
          <img src={digitalasset2} alt="Left 2" className="w-20 md:w-[160px] md:h-[160px] rounded-md hidden sm:block" />
          <img src={digitalasset3} alt="Left 3" className="w-16 md:w-[110px] md:h-[110px] rounded-md" />
          <img src={digitalasset4} alt="Left 4" className="w-20 md:w-[110px] md:h-[110px] rounded-md hidden sm:block" />
        </div>
        <div
          className="absolute w-[800px] h-[400px] bg-red-500 opacity-30 shadow-lg"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(100px)",
            marginTop: "20px",
          }}
        ></div>
        {/* Center Content */}
        <div className="flex flex-col items-center px-16">
          {/* Tagline */}
          <h1 className="text-2xl sm:text-4xl md:text-[64px] lg:text-[64px] font-apex font-normal leading-[1.2] md:leading-[1.1] lg:leading-[1]">
            TURN YOUR IMAGINATION <br /> INTO DIGITAL ASSET
          </h1>

          {/* Search Bar */}
          <div className="relative z-10 w-full mt-4">
            <input
              type="text"
              placeholder="Fantasy Creature holding a sword..."
              className="w-full md:w-[600px] lg:w-[737px] p-3 md:h-[70px] md:p-4 border rounded-full shadow focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 md:px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600">
              Generate
            </button>
          </div>
        </div>

        {/* Right Side Images (Hidden 2 on mobile) */}
        <div className="absolute  right-0 lg:right-[-85px] hidden sm:block space-y-4">

  <img src={digitalasset5} alt="Right 1" className="w-[80px] sm:w-[100px] md:w-[110px] md:h-[110px] rounded-md" />
  <img src={digitalasset6} alt="Right 2" className="w-[100px] sm:w-[130px] md:w-[160px] md:h-[160px] rounded-md hidden sm:block" />
  <img src={digitalasset7} alt="Right 3" className="w-[80px] sm:w-[100px] md:w-[110px] md:h-[110px] rounded-md" />
  <img src={digitalasset8} alt="Right 4" className="w-[100px] sm:w-[130px] md:w-[160px] md:h-[160px] rounded-md hidden sm:block" />
</div>


      </div>
    </div>
  );
}

export default App;
