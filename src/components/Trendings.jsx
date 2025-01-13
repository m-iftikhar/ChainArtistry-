
import trending1 from "../assets/trending1.png";
import trending2 from "../assets/trending2.png";
import trending3 from "../assets/trending3.png";
import trending4 from "../assets/trending4.png";
import trending5 from "../assets/trending5.png";
import trending6 from "../assets/trending6.png";
import trending7 from "../assets/trending7.png";
import trending8 from "../assets/trending8.png";
import proflie from '../assets/proflie.png'
const Trendings = () => {
  const nfts = [
    {
      id: 1,
      title: "Stella Nova",
      username: "@stellanova",
      image: trending1,
      price: "42.02",
    },
    {
      id: 2,
      title: "Stella Nova",
      username: "@stellanova",
      image: trending2,
      price: "42.02",
    },
    {
      id: 3,
      title: "Stella Nova",
      username: "@stellanova",
      image: trending3,
      price: "42.02",
    },
    {
      id: 4,
      title: "Stella Nova",
      username: "@stellanova",
      image: trending4,
      price: "42.02",
    },
    {
      id: 5,
      title: "Stella Nova",
      username: "@stellanova",
      image: trending5,
      price: "42.02",
    },
    {
      id: 6,
      title: "Stella Nova",
      username: "@stellanova",
      image: trending6,
      price: "42.02",
    },
    {
      id: 7,
      title: "Stella Nova",
      username: "@stellanova",
      image: trending7,
      price: "42.02",
    },
    {
      id: 8,
      title: "Stella Nova",
      username: "@stellanova",
      image: trending8,
      price: "42.02",
    },
  ];

  return (
    <div className="py-10  px-5 " >
      <div className="container max-w-6xl mx-auto ">
        {/* Heading */}
        <h1 style={{ marginLeft: "16px" }} className="text-4xl font-extrabold text-gray-800 mb-8" >
          Trending NFTs
        </h1>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  ">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="bg-white rounded-lg  shadow-lg  w-[270px] h-[392px] overflow-hidden hover:scale-105  transform transition duration-300 relative border border-gray-200"
            >
              {/* Top Section with Icon and Name */}
              <div className="flex items-center gap-4 p-4">
                {/* Icon */}
                <div className="bg-gray-200 p-2 rounded-full">
                  <img
                    src={proflie}
                    alt={nft.username}
                    className="w-10 h-10 rounded-full "
                  />
                </div>
                {/* Text */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {nft.title}
                  </h2>
                  <p className="text-sm text-gray-500">{nft.username}</p>
                </div>
              </div>
              {/* Image Section */}
              <div className="relative">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="rounded-md object-cover w-[292px] h-[314px]"
                />
                {/* Buttons on the Image */}
                <div className="absolute inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-full hover:bg-red-600 transition">
                    Buy
                  </button>
                  <p className="text-sm text-white font-medium bg-black/50 px-3 py-1 rounded-full">
                    ${nft.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trendings;