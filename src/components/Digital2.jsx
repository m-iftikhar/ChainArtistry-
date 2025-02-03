import mobiledigital from "../assets/mobiledigital.webp";

const Digital2 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 text-center">
      
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl md:text-[64px] lg:text-[64px] font-apex font-normal leading-[1.2] md:leading-[1.1] lg:leading-[1]">
        TURN YOUR IMAGINATION <br /> INTO DIGITAL ASSET
      </h1>

      {/* Image Container */}
      <div className="relative flex justify-center items-center w-full mt-6">
        {/* Background Image */}
        <img
          src={mobiledigital}
          alt="Digital Background"
          className="w-full max-w-[90%] sm:max-w-lg md:max-w-2xl lg:max-w-[1130px] h-auto object-cover"
        />

        {/* Search Bar (Centered on Image for md & lg, below for sm) */}
        <div className="absolute top-32 md:top-1/2 lg:top-1/2 transform md:-translate-y-1/2 lg:-translate-y-1/2 w-full max-w-[737px] flex flex-col items-center">
          <div className="relative w-full flex items-center justify-center">
            <input
              type="text"
              placeholder="Fantasy Creature holding a sword..."
              className="w-full md:w-[600px] lg:w-[737px] p-3 md:h-[70px] md:p-4 border rounded-full shadow focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 md:px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital2;
