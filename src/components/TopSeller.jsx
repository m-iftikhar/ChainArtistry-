import { Link } from "react-router-dom";
import topseller from "../assets/topseller.png";


const sellers = [
  {
    id: 1,
    name: "Jacob Jones",
    icon: topseller,
    price: "245.5 FRY",
  },
  {
    id: 2,
    name: "Jacob Jones",
    icon: topseller,
    price: "245.5 FRY",
  },
  {
    id: 3,
    name: "Jacob Jones",
    icon: topseller,
    price: "245.5 FRY",
  },
  {
    id: 4,
    name: "Jacob Jones",
    icon: topseller,
    price: "245.5 FRY",
  },
  {
    id: 5,
    name: "Jacob Jones",
    icon: topseller,
    price: "245.5 FRY",
  },
  {
    id: 6,
    name: "Jacob Jones",
    icon: topseller,
    price: "245.5 FRY",
  },
  {
    id: 7,
    name: "Jacob Jones",
    icon: topseller,
    price: "245.5 FRY",
  },
  {
    id: 8,
    name: "Jacob Jones",
    icon: topseller,
    price: "245.5 FRY",
  },
];

const TopSeller = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-[64px] font-apex font-normal">TOP SELLER</h2>
        {/* <Link to='/viewallseller'> */}
        <Link to="/viewseller">
        <h3 className="text-red-500 text-[22px] font-roboto font-bold  cursor-pointer">View All</h3> </Link>
        {/* </Link> */}
      </div>
      {/* Sellers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sellers.map((seller) => (
          <div
            key={seller.id}
            className="flex items-center p-2  md:w-[259px] md:h-[121px]   shadow-md rounded-md bg-transparent w-full max-w-[270px] mx-auto"
          >
            {/* Icon */}
           <img
              src={seller.icon}
              alt={seller.name}
              className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[121px] md:h-[121px] py-1  rounded-md"
            /> 
            {/* Text Section */}
            <div className="ml-4">
              <h3 className="text-base md:text-[22px] font-roboto  font-bold">
                {seller.name}
              </h3>
              <p className="text-[14px] font-roboto font-bold text-gray-500">{seller.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSeller;
