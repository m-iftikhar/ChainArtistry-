import trending1 from "../assets/trending1.png";
import trending2 from "../assets/trending2.png";
import trending3 from "../assets/trending3.png";
import trending4 from "../assets/trending4.png";
import trending5 from "../assets/trending5.png";
import trending6 from "../assets/trending6.png";
import trending7 from "../assets/trending7.png";
import trending8 from "../assets/trending8.png";
import proflie from "../assets/proflie.png";
import PropTypes from "prop-types";
import bg from '../assets/bg.png'

const Trendings = ({ title }) => {
  const nfts = [
    { id: 1, title: "Stella Nova", username: "@stellanova", image: trending1, price: "42.02" },
    { id: 2, title: "Stella Nova", username: "@stellanova", image: trending2, price: "42.02" },
    { id: 3, title: "Stella Nova", username: "@stellanova", image: trending3, price: "42.02" },
    { id: 4, title: "Stella Nova", username: "@stellanova", image: trending4, price: "42.02" },
    { id: 5, title: "Stella Nova", username: "@stellanova", image: trending5, price: "42.02" },
    { id: 6, title: "Stella Nova", username: "@stellanova", image: trending6, price: "42.02" },
    { id: 7, title: "Stella Nova", username: "@stellanova", image: trending7, price: "42.02" },
    { id: 8, title: "Stella Nova", username: "@stellanova", image: trending8, price: "42.02" },
  ];

  return (
    <div className="py-10 px-5">
      <div className="container max-w-6xl mx-auto">
        {/* Heading */}
        <h1
          style={{ marginLeft: "16px" }}
          className="md:text-[64px] font-apex text-5xl  font-normmal text-gray-800 mb-8"
        >
          {title}
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              style={{
                             backgroundImage: `url(${bg})`,
                               backgroundSize: "cover",
                            backgroundPosition: "center",
                               }}
              className=" rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 relative   bg-opacity-50"
            >
              {/* Top Section with Icon and Name */}
              <div className="flex items-center gap-4 p-4">
                {/* Icon */}
                <div className="bg-gray-200 p-2 rounded-full">
                  <img
                    src={proflie}
                    alt={nft.username}
                    className="w-10 h-10 rounded-full font-apex"
                  />
                </div>
                {/* Text */}
                <div>
                  <h2 className="text-[18px] font-light font-apex text-gray-800">
                    {nft.title}
                  </h2>
                  <p className="text-[11px] font-roboto text-gray-500">{nft.username}</p>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="rounded-md object-cover w-full md:w-[292px] h-[200px] sm:h-[250px] lg:h-[314px]"
                />
                {/* Buttons on the Image */}
                <div className="absolute inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <button className="bg-red-500  w-[56px] h-[36px] text-[12px] text-white  px-4 py-2 rounded-md hover:bg-red-600 transition">
                    Buy
                  </button>
                  <p className="bg-white bg-opacity-75 text-center text-gray-800 w-[123px] h-[36px] text-[12px] font-semibold px-3 py-2 rounded-lg">
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

Trendings.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Trendings;
