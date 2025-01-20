import { Link } from "react-router-dom";
import profilepic from "../assets/profilepic.png";
import banner from "../assets/banner.png";

function Profiletop() {
  return (
    <div className="flex flex-col items-center w-full px-4">
      {/* Buttons Section */}
      <div
        className="flex space-x-4 mt-6 border border-gray-400 rounded-md p-2 sm:absolute sm:top-[140px] sm:left-[300px] sm:gap-0"
      >
        <button
          className="bg-red-600 text-white font-apex px-4 py-2 rounded-md w-[100px] h-[50px]"
        >
          Profile
        </button>
        <Link to="/setting">
          <button
            className="text-black font-apex px-4 py-2 rounded-md w-[100px] h-[50px]"
          >
            Setting
          </button>
        </Link>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center gap-4 mt-10 w-full">
        {/* Profile Banner Section */}
        <div className="relative w-full max-w-[1320px] h-[200px] sm:h-[344px] mt-[60px] sm:mt-[110px]">
          <img
            src={banner}
            alt="Profile Banner"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute top-4 right-4 bg-red-500 text-white py-2 px-4 rounded-[15px]">
            Follow
          </button>
        </div>

        {/* Profile Info Section */}
        <div className="flex flex-col items-center relative text-center">
          <img
            src={profilepic}
            alt="Profile Icon"
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full mt-[-40px] sm:mt-[-50px] border-4 border-white"
          />
          <h1 className="text-xl sm:text-2xl font-bold mt-4">WILLIAM AHARANA</h1>
          <div className="flex gap-4 sm:gap-6 mt-2 text-sm sm:text-lg">
            <span>99 Followers</span>
            <span>26 Following</span>
            <span>12 Items</span>
          </div>
          <div className="mt-4">
            <button className="bg-white text-black py-2 px-4 sm:px-6 rounded-[15px] border-2 border-black">
              10.89 FRY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiletop;
