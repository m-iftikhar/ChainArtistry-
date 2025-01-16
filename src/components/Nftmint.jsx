import mint1 from '../assets/mint1.png';
import mint2 from '../assets/mint2.png';
import mint3 from '../assets/mint3.png';
import mint4 from '../assets/mint4.png';
import { Link } from 'react-router-dom';

const Nftmint = () => {
  const images = [mint1, mint2, mint3, mint4, mint1, mint2, mint3, mint4, mint1, mint2];

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-10 m-auto font-roboto">
      {/* Top Section */}
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center text-gray-700">
          <h1 className="border border-gray text-center p-3 w-[130px] rounded-lg">
            Collection
          </h1>
          <h2 className="text-base sm:text-lg">10/10 Generated</h2>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center">
          <h1 className="text-sm sm:text-base lg:w-40">Select NFT to Mint</h1>
          <Link to="/mintdata">
            <button className="w-28 sm:w-32 h-[35px] rounded-lg bg-gradient-to-r from-[#d65d5d] to-[rgba(253,0,0,1)] text-white">
              MINT NFT
            </button>
          </Link>
        </div>
      </div>

      {/* Grid Section for Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={image}
              alt={`NFT ${index + 1}`}
              className="w-full h-auto sm:w-[200px] md:w-[288px] sm:h-[180px] md:h-[245px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nftmint;
