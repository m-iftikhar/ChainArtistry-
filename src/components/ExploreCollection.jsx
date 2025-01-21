import pixaciomain from '../assets/pixaciomain.png';
import main1 from '../assets/main1.png';
import main2 from '../assets/main2.png';
import main3 from '../assets/main3.png';
import main4 from '../assets/main4.png';

const ExploreCollection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-8 justify-center relative px-4 md:px-8">
      {/* Image Section (Left) */}
      <div className="w-full md:w-[512px] max-w-md mx-auto relative p-2 mb-8 md:mb-0">
        <img src={pixaciomain} alt="Pxo Cards" className="w-full h-auto object-cover rounded-md" />
      </div>

      {/* Content Section (Right) */}
      <div className="w-full md:w-[674px] max-w-lg mx-auto">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="font-apex text-[36px] md:text-[64px] font-normal leading-snug md:leading-tight tracking-wide">
            Pixacio
          </h1>
        </div>

        {/* Stat Boxes */}
        <div className="w-full max-w-md mx-auto space-y-4 mb-3">
          <div className="flex justify-between items-center bg-white p-4 border border-gray-300 rounded-md">
            <span className="font-apex text-gray-800">Items Listed</span>
            <span className="font-apex text-gray-800">4342</span>
          </div>
          <div className="flex justify-between items-center bg-white p-4 border border-gray-300 rounded-md">
            <span className="font-apex text-gray-800">No. of Sold Items</span>
            <span className="font-apex text-gray-800">5322</span>
          </div>
          <div className="flex justify-between items-center bg-white p-4 border border-gray-300 rounded-md">
            <span className="font-apex text-gray-800">Vol FRY</span>
            <span className="font-apex text-gray-800">18.5</span>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full mx-auto border-t border-red-500 mb-6"></div>

        {/* Image Links */}
        <div className="w-full max-w-md mx-auto flex flex-wrap justify-between gap-4 mb-8">
          <img src={main1} alt="Link 1" className="w-[45px] h-[42px] object-cover rounded-md" />
          <img src={main2} alt="Link 2" className="w-[116px] h-[42px] object-cover rounded-md" />
          <img src={main3} alt="Link 3" className="w-[116px] h-[42px] object-cover rounded-md" />
          <img src={main4} alt="Link 4" className="w-[45px] h-[42px] object-cover rounded-md" />
        </div>

        {/* Description */}
        <div className="w-full max-w-md mx-auto text-wrap">
          <p className="text-sm md:text-base text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus asperiores consequatur accusantium maxime dolores,
            voluptates quo quisquam quam nesciunt modi aut. Voluptate earum quae beatae illo, qui veritatis quia facere?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreCollection;
