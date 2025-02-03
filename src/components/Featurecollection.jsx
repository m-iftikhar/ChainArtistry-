import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import newcard1 from "../assets/newcard1.png";
import newcard2 from "../assets/newcard2.png";
import newcard3 from "../assets/newcard3.png";
import newcard4 from "../assets/newcard4.png";
import prvbtn from '../assets/prvbtn.png';
import nextbtn from '../assets/nextbtn.png';

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

const FeatureCollection = () => {
  return (
    <div className="py-10 px-5 w-full ">
      <div className="relative max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-5">
          <div>
            <h2 className="md:text-[64px] text-5xl font-apex font-normal ml-4 md:ml-0">
              Featured Collection
            </h2>
            <p className="text-gray-500 font-roboto ml-4 md:ml-0">
              Explore our exclusive featured collection, showcasing innovative.
            </p>
            
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex space-x-4 mt-4 md:mt-0">
            <img src={prvbtn} alt="prev" className="swiper-button-prev h-[48px] w-[48px] cursor-pointer" />
            <img src={nextbtn} alt="next" className="swiper-button-next h-[48px] w-[48px] cursor-pointer" />
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          className="mySwiper"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <img
                src={card.img}
                alt={`Card ${card.id}`}
                className="rounded-lg w-full md:w-[308px] h-auto md:h-[411px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureCollection;
