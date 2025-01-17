
import auction1 from '../assets/auction1.png';
import auction2 from '../assets/auction2.png';
import auction3 from '../assets/auction3.png';
import auction4 from '../assets/auction4.png';
import auction5 from '../assets/auction5.png';
import auction6 from '../assets/auction6.png';
import auction7 from '../assets/auction7.png';
import proflie from '../assets/proflie.png';
import PropTypes from "prop-types";

const Auctionpagecards = ({title}) => {
  const nfts = [
    { id: 1, title: 'Stella Nova', username: '@stellanova', image: auction1, price: '42.02' },
    { id: 2, title: 'Stella Nova', username: '@stellanova', image: auction2, price: '42.02' },
    { id: 3, title: 'Stella Nova', username: '@stellanova', image: auction3, price: '42.02' },
    { id: 4, title: 'Stella Nova', username: '@stellanova', image: auction4, price: '42.02' },
    { id: 5, title: 'Stella Nova', username: '@stellanova', image: auction5, price: '42.02' },
    { id: 6, title: 'Stella Nova', username: '@stellanova', image: auction6, price: '42.02' },
    { id: 7, title: 'Stella Nova', username: '@stellanova', image: auction7, price: '42.02' },
    { id: 8, title: 'Stella Nova', username: '@stellanova', image: auction3, price: '42.02' },
  ];

  return (
    <div className="py-10 px-5">
      <div className="container max-w-6xl mx-auto">
        {/* Heading */}
        <h1
          style={{ marginLeft: '16px' }}
          className="text-3xl md:text-4xl font-bold font-apex text-gray-800 mb-8"
        >
          {title}
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 w-full max-w-xs mx-auto border border-gray-200"
            >
              {/* Top Section with Icon and Name */}
              <div className="flex items-center gap-4 p-4">
                <div className="bg-gray-200 p-2 rounded-full">
                  <img
                    src={proflie}
                    alt={nft.username}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-base font-apex md:text-lg font-semibold text-gray-800">
                    {nft.title}
                  </h2>
                  <p className="text-sm text-gray-500 font-roboto">{nft.username}</p>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative group">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full h-[250px] md:h-[314px] rounded-md object-cover"
                />
                {/* Time Display */}
                <div
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-md shadow-lg opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                >
                  12:34:34:54
                </div>
                {/* "Bid Now" Button */}
                <button
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-[-50%] bg-red-600 text-white px-6 py-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
                >
                  Bid Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        {/* <div className="flex justify-center items-center mt-10">
         <Link to="exploreauctions"> <button className="bg-red-500 text-white px-8 font-roboto py-3 rounded-lg hover:bg-red-600 transition text-sm md:text-base">
            Explore More
          </button> </Link>
        </div> */}
      </div>
    </div>
  );
};

Auctionpagecards.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Auctionpagecards;

