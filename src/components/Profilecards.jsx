
import images1 from '../assets/images1.png';
import images2 from '../assets/images2.png';
import images3 from '../assets/images3.png';
import images4 from '../assets/images4.png';
import logo from '../assets/logo.png'
import fry from  '../assets/fry.png'
import { Link, useNavigate } from 'react-router-dom';

function Profilecards() {
    const navigate = useNavigate();

    const handleBoostClick = () => {
        navigate('/boostpage'); // Replace with the actual route for the boost page
    };

    const handlePriceClick = () => {
        navigate('/boostpage'); // Navigate to boost page when price is clicked
    };

    const handleSoldClick = () => {
        navigate('/boostpage'); // Navigate to boost page when sold button is clicked
    };

    const nfts = [
        {
          id: 1,
          title: "Stella Nova",
          username: "@stellanova",
          image: images1,
          price: "42.02",
        },
        {
          id: 2,
          title: "Stella Nova",
          username: "@stellanova",
          image: images2,
          price: "42.02",
        },
        {
          id: 3,
          title: "Stella Nova",
          username: "@stellanova",
          image: images3,
          price: "42.02",
        },
        {
          id: 4,
          title: "Stella Nova",
          username: "@stellanova",
          image: images4,
          price: "42.02",
        },
        {
          id: 5,
          title: "Stella Nova",
          username: "@stellanova",
          image: images2,
          price: "42.02",
        },
        {
          id: 6,
          title: "Stella Nova",
          username: "@stellanova",
          image: images3,
          price: "42.02",
        },
        {
          id: 7,
          title: "Stella Nova",
          username: "@stellanova",
          image: images1,
          price: "42.02",
        },
        {
          id: 8,
          title: "Stella Nova",
          username: "@stellanova",
          image: images4,
          price: "42.02",
        },
        {
          id: 8,
          title: "Stella Nova",
          username: "@stellanova",
          image: images3,
          price: "42.02",
        },
        {
          id: 8,
          title: "Stella Nova",
          username: "@stellanova",
          image: images1,
          price: "42.02",
        },
        {
          id: 8,
          title: "Stella Nova",
          username: "@stellanova",
          image: images2,
          price: "42.02",
        },
        {
          id: 8,
          title: "Stella Nova",
          username: "@stellanova",
          image: images4,
          price: "42.02",
        },
      ];
  return (
    <div className="py-10  px-5">
      <div className="container max-w-7xl mx-auto">
        {/* Heading */}
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {nfts.map((nft, index) => (
            <div
              key={nft.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 relative border border-gray-200"
            >
              {/* Top Section with Icon and Name */}
              <div className="flex items-center gap-4 p-4">
                {/* Icon */}
                <div className="bg-gray-200 p-2 rounded-full">
                  <img
                    src={logo}
                    alt={nft.username}
                    className="w-10 h-10 rounded-full"
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
                  className="w-full h-56 object-cover"
                />
                {/* Buttons on the Image */}
                <div className="absolute inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-black/50 to-transparent">
                  {index === 0 ? (
                    <Link to='/sellmethod'>
                    <button className="bg-red-500 font-apex text-white text-sm px-4 py-2 rounded-full hover:bg-red-600 transition">
                      Not Minted
                    </button>
                    </Link>
                  ) : index === 1 || index === 2 ? (
                    <> 
                    
                      <button
                        className="bg-red-500 font-apex text-white text-sm px-4 py-2 rounded-full hover:bg-red-600 transition"
                        onClick={handleBoostClick}
                      >
                        Boost
                      </button>
                      <div
                        className="flex items-center bg-black/50 px-3 py-1 rounded-full cursor-pointer"
                        onClick={handlePriceClick}
                      >
                        <img src={fry} alt="Fry Icon" className="w-4 h-4 mr-1" />
                        <p className="text-sm text-white font-apex">
                          ${nft.price}
                        </p>
                      </div>
                    </>
                  ) : index === 3 ? (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          className="bg-red-500 font-apex text-white text-sm px-4 py-2 rounded-full hover:bg-red-600 transition"
                          onClick={handleSoldClick}
                        >
                          Sold
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <button
                          className="bg-red-500 font-apex text-white text-sm px-4 py-2 rounded-full hover:bg-red-600 transition"
                          onClick={handleBoostClick}
                        >
                          Boost
                        </button>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div
                          className="flex items-center bg-black/50 px-3 py-1 rounded-full cursor-pointer"
                          onClick={handlePriceClick}
                        >
                          <img src={fry} alt="Fry Icon" className="w-4 h-4 mr-1" />
                          <p className="text-sm text-white font-apex">
                            ${nft.price}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : index === 4 ? (
                    <div className="flex justify-center w-full">
                      <button
                        className="bg-red-500 font-apex text-white text-sm px-4 py-2 rounded-full hover:bg-red-600 transition"
                        onClick={handleSoldClick}
                      >
                        Minted
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        className="bg-red-500 font-apex text-white text-sm px-4 py-2 rounded-full hover:bg-red-600 transition"
                        onClick={handleBoostClick}
                      >
                        Boost
                      </button>
                      <p className="text-sm text-white font-apex bg-black/50 px-3 py-1 rounded-full">
                        ${nft.price}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  )
}

export default Profilecards