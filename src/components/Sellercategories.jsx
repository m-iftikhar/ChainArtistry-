import { FaEthereum } from "react-icons/fa";
import images1 from "../assets/images1.png";
import { Link } from "react-router-dom";

const Sellercategories = () => {
  const sellers = [
    {
      id: "01",
      name: "Jacob Jones",
      avatar: images1,
      volume: "$154.00",
      followers: "100",
      percent: "+237.67%",
      floorPrice: "4,901",
      items: "9.8k",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-6xl">
        {/* Dropdown for category */}
        <div className="flex flex-wrap justify-between ] items-center mb-6 gap-4">
          <select className="p-2 font-semibold font-roboto text-[14px] border rounded-md md:w-[133px] h-[48px] w-40">
            <option>Category</option>
          </select>
          <span className="md:text-[14px] font-roboto font-semibold sm:text-base ">Last 30 days</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-transparent">
          <div className="space-y-4">
            {/* Heading row */}
            <div className="w-full bg-gray-200 shadow-md  rounded-lg p-4 flex flex-wrap justify-between items-center text-xs sm:text-sm md:text-base">
              <div className="w-full md:w-[280px] mb-2 md:mb-0 text-[16px] sm:text-[18px] md:text-[22px] font-roboto font-semibold">
                Collections
              </div>
              <div className="w-1/3 sm:w-[156px] text-center text-[16px] sm:text-[18px] md:text-[22px] font-semibold">
                Volume
              </div>
              <div className="w-1/3 sm:w-[156px] text-center text-[16px] sm:text-[18px] md:text-[22px] font-semibold">
                Followers
              </div>
              <div className="hidden sm:block w-1/3 text-center sm:w-[156px] text-[16px] sm:text-[18px] md:text-[22px] font-semibold">
                24%
              </div>
              <div className="hidden lg:block w-1/3 text-center lg:w-[150px] text-[16px] sm:text-[18px] md:text-[22px] font-semibold">
                Floor Price
              </div>
              <div className="w-1/3 sm:w-[94px] text-center text-[16px] sm:text-[18px] md:text-[22px] font-semibold">
                Items
              </div>
            </div>

            {/* Data rows */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="w-full bg-white shadow-md rounded-lg p-4 flex flex-wrap sm:flex-nowrap items-center justify-between text-xs sm:text-sm md:text-base"
              >
                {/* ID and Name */}
                <div className="flex items-center w-full sm:w-[280px] mb-2 sm:mb-0">
                  <span className="font-medium pr-2">{sellers[0].id}</span>
                  <Link to="/jacobjones">
                    <img
                      src={sellers[0].avatar}
                      alt={sellers[0].name}
                      className="w-[50px] h-[50px] sm:w-[74px] sm:h-[74px] rounded-xl mr-2"
                    />
                  </Link>
                  <span className="font-bold pl-2 text-sm sm:text-base md:text-[22px]">
                    {sellers[0].name}
                  </span>
                </div>

                {/* Volume */}
                <div className="text-center w-1/3 sm:w-[72px]">{sellers[0].volume}</div>

                {/* Followers */}
                <div className="hidden sm:block text-center w-1/3 sm:w-[72px]">
                  {sellers[0].followers}
                </div>

                {/* Percent */}
                <div className="hidden md:block text-center w-1/3 md:w-[72px] text-green-500">
                  {sellers[0].percent}
                </div>

                {/* Floor Price */}
                <div className="hidden lg:flex items-center justify-center w-1/3 lg:w-[150px] space-x-1">
                  <FaEthereum className="text-gray-500" />
                  <span>{sellers[0].floorPrice}</span>
                </div>

                {/* Items */}
                <div className="text-center w-1/3 sm:w-[72px]">{sellers[0].items}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellercategories;
