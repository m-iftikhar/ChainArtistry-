import heroprofile from '../assets/heroprofile.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import sparrowlogo from '../assets/sparrowlogo.png';

const Profilehero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mt-10 px-4">
      {/* Left Section: Image */}
      <div className="w-full md:w-[482px] h-[461px]">
        <img
          src={heroprofile}
          alt="Hero Profile Artwork"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Section: Content */}
      <div className="w-full md:w-[691px] bg-gray-100 p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font apex font-bold mb-6">WONDERFUL ARTWORK</h2>

        {/* Items Section */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
          Items
        </div>

        {/* Vol Fry Section */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-6">
          VOL FRY
        </div>

        {/* Logos Section */}
        <div className="flex gap-4">
          <img
            src={sparrowlogo}
            alt="Sparrow Logo"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <img
            src={logo3}
            alt="Logo 3"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <img
            src={logo4}
            alt="Logo 4"
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-700 leading-relaxed">
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
