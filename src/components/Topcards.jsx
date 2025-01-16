import proflie from '../assets/proflie.png';
import nextcollection1 from '../assets/nextcollection1.png';

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
    <div className="min-h-screen px-6 lg:px-20 py-10 mt-10">
      
      <h2
        className="text-4xl md:text-5xl font-apex text-gray-800 mb-10"
        style={{ marginLeft: "2%" }}
      >
        EXPLORE OUR COLLECTIONS
      </h2>

    
      <div
        className="flex justify-start space-x-6 overflow-x-auto mb-12"
        style={{ marginLeft: "2%" }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full font-semibold ${
              category === "Popular"
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 w-full"
          >
            
            <div className="flex items-center p-6 space-x-6">
              <img
                src={proflie}
                alt="Icon"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm font-apex text-gray-500">
                  Created by {card.creator}
                </p>
              </div>
            </div>

            
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full text-black bg-opacity-60 text-center text-sm font-semibold py-2 rounded-t-lg">
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
