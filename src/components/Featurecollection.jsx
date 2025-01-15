import { useState } from "react";
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';

const Featurecollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, image: feature1, price: "40$", title: "Card 1", name: "stellsnova", description: "stellsnova" },
    { id: 2, image: feature2, price: "14$", title: "Card 2", name: "stellsnova", description: "stella nova" },
    { id: 3, image: feature3, price: "132$", title: "Card 3", name: "stellsnova", description: "stella nova" },
    { id: 4, image: feature4, price: "36$", title: "Card 4", name: "stellsnova", description: "stella nova" },
    { id: 5, image: feature3, price: "76$", title: "Card 5", name: "stellsnova", description: "stella nova" },
    { id: 6, image: feature4, price: "34$", title: "Card 6", name: "stellsnova", description: "stella nova" },
  ];

  const cardsPerSlide = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerSlide < cards.length ? prevIndex + cardsPerSlide : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0
        ? Math.floor(cards.length / cardsPerSlide) * cardsPerSlide
        : currentIndex - cardsPerSlide
    );
  };

  return (
    <div className="py-10 px-5 w-full mt-[50px]">
      <div className="relative max-w-6xl mx-auto">
        {/* Title and Subtext */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-5">
          <div>
            <h2 className="text-xl md:text-3xl font-bold ml-2 md:ml-0">
              Featured Collection
            </h2>
            <p className="text-gray-500 text-sm md:text-base ml-2 md:ml-0">
              Explore our exclusive featured collection, showcasing innovative.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              className="bg-red-600 text-white px-4 py-2 text-xs md:text-sm rounded-full hover:bg-red-400 shadow-lg"
            >
              &#9664; {/* Previous */}
            </button>
            <button
              onClick={handleNext}
              className="bg-red-600 text-white px-4 py-2 text-xs md:text-sm rounded-full hover:bg-red-400 shadow-lg"
            >
              &#9654; {/* Next */}
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-4 overflow-hidden">
          {cards.slice(currentIndex, currentIndex + cardsPerSlide).map((card) => (
            <div
              key={card.id}
              className="relative w-[90%] sm:w-[308px] h-auto md:w-[270px] mx-2 mb-4 p-4 bg-white rounded-lg shadow-lg transition-all duration-500 ease-in-out transform scale-100"
            >
              {/* Profile Section at the Top */}
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold">
                  {card.name.charAt(0)} {/* Placeholder for an icon */}
                </div>
                <div>
                  <p className="text-gray-800 font-semibold text-sm md:text-[18px]">
                    {card.name}
                  </p>
                  <p className="text-gray-500 text-xs md:text-[11px]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Card Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-lg object-cover w-full md:w-[292px] h-[200px] md:h-[314px]"
                />
                {/* Buttons on the bottom of the image */}
                <div className="absolute inset-x-0 bottom-0 flex justify-between p-2">
                  <button className="bg-red-500 text-white px-4 py-1 md:py-2 text-xs md:text-sm rounded-lg hover:bg-red-600">
                    Buy
                  </button>
                  <p className="bg-white bg-opacity-75 text-gray-800 font-bold px-3 py-1 md:py-2 rounded-lg text-xs md:text-sm">
                    Price: {card.price}
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

export default Featurecollection;
