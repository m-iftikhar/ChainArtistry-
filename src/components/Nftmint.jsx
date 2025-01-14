
import mint1 from '../assets/mint1.png';
import mint2 from '../assets/mint2.png';
import mint3 from '../assets/mint3.png';
import mint4 from '../assets/mint4.png';
import { Link } from 'react-router-dom';

const Nftmint = () => {
  const images = [mint1, mint2, mint3, mint4, mint1, mint2, mint3, mint4, mint1, mint2];

  return (
    <div className="w-full p-8 m-auto">
      {/* Top Section */}
      <div className="flex justify-between">
        <div className="flex gap-6 items-center justify-center text-gray-700">
          <h1 className="border border-gray text-center justify-center p-3 w-[130px] rounded-lg">Collection</h1>
          <h2>10/10 Generated</h2>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <h1 className="w-40">Select NFT to Mint</h1>
          <Link to="/mintdata">
          <button className="w-32 h-[35px] rounded-lg bg-gradient-to-r from-[#d65d5d] to-[rgba(253,0,0,1)] text-white justify-center items-center">
            MINT NFT
          </button>
          </Link>
        </div>
      </div>

      {/* Grid Section for Images */}
      <div className="grid grid-cols-4 gap-6 mt-8">
        {images.map((image, index) => (
          <div key={index} className="border rounded-lg  overflow-hidden shadow-md">
            <img src={image} alt={`NFT ${index + 1}`} className="w-[288px] h-[245px] object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nftmint;
