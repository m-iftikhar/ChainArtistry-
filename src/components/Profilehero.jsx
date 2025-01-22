import heroprofile from '../assets/heroprofile.png';
import main1 from '../assets/main1.png';
import main2 from '../assets/main2.png';
import main3 from '../assets/main3.png';
import main4 from '../assets/main4.png';

const Profilehero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-10 px-4 lg:px-8">
      {/* Left Section: Image */}
      <div className="w-full lg:w-[482px] h-[300px] lg:h-[461px]">
        <img
          src={heroprofile}
          alt="Hero Profile Artwork"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Section: Content */}
      <div className="w-full lg:w-[691px] bg-gray-100 p-6 lg:p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-2xl lg:text-3xl font-apex font-bold mb-4 lg:mb-6">
          WONDERFUL ARTWORK
        </h2>

        {/* Items Section */}
        <div className="flex flex-wrap gap-2">
          <div className="bg-gray-200 w-full sm:w-[322px] h-[48px] p-3 rounded-lg shadow-md mb-3">
            Items
          </div>
          <div className="bg-gray-200 w-full sm:w-[322px] h-[48px] p-3 rounded-lg shadow-md mb-3">
            VOL FRY
          </div>
          <div className="bg-gray-200 w-full sm:w-[322px] h-[48px] p-3 rounded-lg shadow-md">
            No. of Sold Items
          </div>
        </div>

        {/* Logos Section */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
        <img src={main1} alt="Link 1" className="w-[45px] h-[42px] object-cover rounded-md" />
                  <img src={main2} alt="Link 2" className="w-[116px] h-[42px] object-cover rounded-md" />
                  <img src={main3} alt="Link 3" className="w-[116px] h-[42px] object-cover rounded-md" />
                  <img src={main4} alt="Link 4" className="w-[45px] h-[42px] object-cover rounded-md" />
        </div>

        {/* Description */}
        <p className="mt-4 lg:mt-6 text-sm lg:text-base text-gray-700 leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis culpa
          perspiciatis sint ipsum exercitationem, tenetur reprehenderit esse
          quo, qui possimus odio. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Beatae laborum facere quae? Labore repellendus
          perferendis iste ad vel nesciunt consequatur totam odit incidunt
          velit est aliquid magnam pariatur, iusto eum officia facilis ullam.
          Est in odit iste asperiores deleniti.
        </p>
      </div>
    </div>
  );
};

export default Profilehero;
