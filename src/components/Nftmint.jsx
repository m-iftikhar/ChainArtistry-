import mint1 from "../assets/mint1.png";
import mint2 from "../assets/mint2.png";
import mint3 from "../assets/mint3.png";
import mint4 from "../assets/mint4.png";
import { Link } from "react-router-dom";

const Nftmint = () => {
  const images = [mint1, mint2, mint3, mint4, mint1, mint2, mint3, mint4, mint1, mint2];

  return (
    <div className="w-full px-4 py-6 sm:px-6 md:px-8 lg:px-10 mx-auto font-roboto mt-[120px]">
      {/* Top Section */}
      <div className="flex flex-col gap-6 sm:flex-row justify-between items-center">
        <div className="flex flex-wrap gap-4 items-center text-gray-600">
          <h1 className="border border-gray text-[22px] font-semibold text-center p-3 w-[164px] h-[58px] rounded-lg">
            Collection
          </h1>
          <h2 className="text-[20px] sm:text-[22px] font-medium">10/10 Generated</h2>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <h1 className="text-[16px] sm:text-[18px] text-gray-600 lg:w-auto">Select NFT to Mint</h1>
          <Link to="/mintdata">
            <button className="w-[96px] sm:w-32 h-[37px] rounded-lg bg-button-gradient text-white">
              MINT NFT
            </button>
          </Link>
        </div>
      </div>

      {/* Grid Section for Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8 ">
        {images.map((image, index) => (
          <div
            key={index}
            className=" overflow-hidden shadow-md w-full sm:w-[220px] md:w-[288px] h-auto sm:h-[220px] md:h-[265px] mx-auto"
          >
            <img
              src={image}
              alt={`NFT ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nftmint;
