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
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Dropdown for category */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <select className="p-2 border rounded-md w-40">
            <option>Category</option>
          </select>
          <span className="text-sm sm:text-base md:text-lg">Last 30 days</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-transparent">
          <div className="space-y-4">
            {/* Heading row */}
            <div className="w-full bg-gray-200 shadow-md rounded-lg p-4 flex items-center justify-between text-xs sm:text-sm md:text-base">
              <div className="w-1/12 text-center">ID</div>
              <div className="w-3/12 sm:w-2/12 text-center">Name</div>
              <div className="w-2/12 text-center">Volume</div>
              <div className="hidden sm:block w-2/12 text-center">Followers</div>
              <div className="hidden md:block w-2/12 text-center">Percent</div>
              <div className="hidden lg:block w-2/12 text-center">Floor Price</div>
              <div className="w-2/12 text-center">Items</div>
            </div>

            {/* Data rows */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="w-full bg-white shadow-md rounded-lg p-4 flex flex-wrap sm:flex-nowrap items-center justify-between text-xs sm:text-sm md:text-base"
              >
                {/* ID and Name */}
                <div className="flex items-center w-1/3 sm:w-2/12 mb-2 sm:mb-0">
                  <span className="font-medium pr-2">{sellers[0].id}</span>
             <Link to="/jacobjones">   <img
                    src={sellers[0].avatar}
                    alt={sellers[0].name}
                    className="w-8 h-8 rounded-full mr-2"
                  /> </Link>
                  <span className="font-semibold">{sellers[0].name}</span>
                </div>

                {/* Volume */}
                <div className="text-center w-1/3 sm:w-2/12">{sellers[0].volume}</div>

                {/* Followers */}
                <div className="hidden sm:block text-center w-2/12">
                  {sellers[0].followers}
                </div>

                {/* Percent */}
                <div className="hidden md:block text-center w-2/12 text-green-500">
                  {sellers[0].percent}
                </div>

                {/* Floor Price */}
                <div className="hidden lg:flex items-center justify-center w-2/12 space-x-1">
                  <FaEthereum className="text-gray-500" />
                  <span>{sellers[0].floorPrice}</span>
                </div>

                {/* Items */}
                <div className="text-center w-1/3 sm:w-2/12">{sellers[0].items}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellercategories;
