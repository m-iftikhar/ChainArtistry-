import { useState } from "react";

import newcard1 from "../assets/newcard1.png";
import newcard2 from "../assets/newcard2.png";
import newcard3 from "../assets/newcard3.png";
import newcard4 from "../assets/newcard4.png";
import prvbtn from '../assets/prvbtn.png';
import nextbtn from '../assets/nextbtn.png';

const FeatureCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, img: newcard1 },
    { id: 2, img: newcard2 },
    { id: 3, img: newcard3 },
    { id: 4, img: newcard4 },
    { id: 5, img: newcard3 },
    { id: 6, img: newcard4 },
    { id: 7, img: newcard1 },
    { id: 8, img: newcard2 },
  ];

  const cardsPerSlide = 4; // Number of cards shown per slide (for desktop)

  // Handle "Next" button
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerSlide < cards.length ? prevIndex + cardsPerSlide : 0
    );
  };

  // Handle "Previous" button
  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0
        ? Math.floor(cards.length / cardsPerSlide) * cardsPerSlide
        : currentIndex - cardsPerSlide
    );
  };

  return (
    <div className="py-10 px-5 w-full">
      <div className="relative max-w-6xl mx-auto">
        {/* Title and Subtext */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-5">
          <div>
            <h2 className="text-[64px] font-apex font-normal ml-4 md:ml-0">
              Featured Collection
            </h2>
            <p className="text-gray-500 font-roboto ml-4 md:ml-0">
              Explore our exclusive featured collection, showcasing innovative.
            </p>
          </div>

          {/* Navigation Buttons - Hidden on Small Screens */}
          <div className="hidden md:flex space-x-4 mt-4 md:mt-0">
            <img src={prvbtn} alt="prev" onClick={handlePrev} />
            <img src={nextbtn} alt="next" onClick={handleNext} />
          </div>
        </div>

        {/* Slider Section */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out flex-wrap md:flex-nowrap"
            style={{
              transform: `translateX(-${(currentIndex / cards.length) * 100}%)`,
            }}
          >
            {/* Dynamically display cards based on currentIndex */}
            {cards.slice(currentIndex, currentIndex + cardsPerSlide).map((card) => (
              <div
                key={card.id}
                className="w-full md:min-w-[calc(100%/4)] md:flex-shrink-4 mb-4 md:mb-0"
              >
                <img
                  src={card.img}
                  alt={`Card ${card.id}`}
                  className="rounded-lg shadow-lg w-full md:w-[308px] h-auto md:h-[411px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCollection;
