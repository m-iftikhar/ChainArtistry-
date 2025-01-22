import proflie from '../assets/proflie.png';
import nextcollection1 from '../assets/nextcollection1.png';
import { Link } from 'react-router-dom';

const Topcards = () => {
  const categories = ["Popular", "Trending", "Sports", "Art", "Fantasy", "Photography", "Space"];
  const cards = [
    {
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      items: "1.5k",
      image: nextcollection1,
    },
    {
      title: "AMAZING CREATION",
      creator: "Sophia Brown",
      items: "2.1k",
      image: nextcollection1,
    },
    {
      title: "MAGICAL VIBES",
      creator: "Liam Wilson",
      items: "800",
      image: nextcollection1,
    },
    {
      title: "FANTASTIC DESIGN",
      creator: "Emma Davis",
      items: "1.2k",
      image: nextcollection1,
    },
    {
      title: "FANTASTIC DESIGN",
      creator: "Emma Davis",
      items: "1.2k",
      image: nextcollection1,
    },
    {
      title: "FANTASTIC DESIGN",
      creator: "Emma Davis",
      items: "1.2k",
      image: nextcollection1,
    },
    {
      title: "FANTASTIC DESIGN",
      creator: "Emma Davis",
      items: "1.2k",
      image: nextcollection1,
    },
    {
      title: "FANTASTIC DESIGN",
      creator: "Emma Davis",
      items: "1.2k",
      image: nextcollection1,
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-20 py-10 mt-10">
      
      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl font-apex font-normal leading-snug text-[32px] sm:text-[48px] md:text-[64px] text-center lg:text-left mb-10"
      >
        EXPLORE OUR COLLECTIONS
      </h2>

      {/* Categories */}
      <div
        className="flex justify-start space-x-4 sm:space-x-6 overflow-x-auto mb-12"
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-[14px] sm:text-[16px] md:text-[18px] font-roboto font-normal whitespace-nowrap ${
              category === "Popular"
                ? "bg-transparent text-red-500 border border-red-500"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Card Header */}
            <div className="flex items-center p-4 sm:p-6 space-x-4">
              <Link to="/explore" className="flex items-center space-x-4">
                <img
                  src={proflie}
                  alt="Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div>
                  <h3 className="text-sm sm:text-lg font-semibold font-apex">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-roboto">
                    Created by {card.creator}
                  </p>
                </div>
              </Link>
            </div>

            {/* Card Image */}
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <div className="absolute bottom-0 font-roboto left-0 w-full text-black bg-white bg-opacity-75 text-center text-xs sm:text-sm font-semibold py-2">
                Items: {card.items}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topcards;
