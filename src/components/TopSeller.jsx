import topseller from '../assets/topseller.png'
// import { Link } from "react-router-dom";
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
    <div className="container max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-bold">TOP SELLER</h2>
        {/* <Link to='/viewallseller'> */}
        <h3 className="text-red-500 font-medium">View All</h3>
        {/* </Link> */}
      </div>
      {/* Sellers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sellers.map((seller) => (
          <div
            key={seller.id}
            className="flex items-center p-4 shadow-md rounded-lg bg-white "
          >
            {/* Icon */}
            <img
              src={seller.icon}
              alt={seller.name}
              className="w-[116px] h-[116px] rounded-md"
            />
            {/* Text Section */}
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{seller.name}</h3>
              <p className="text-sm text-gray-500">{seller.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSeller;