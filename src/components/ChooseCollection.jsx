import images1 from '../assets/images1.png';
import images2 from '../assets/images2.png';
import images3 from '../assets/images3.png';
import images4 from '../assets/images4.png';
import { Link } from 'react-router-dom';

const ChooseCollection = () => {
  return (
    <div className="flex justify-center items-center min-h-[150vh] bg-gradient-to-b from-pink-100 to-pink-200">

      {/* Main Box Container */}
      <div className="relative flex flex-col items-center bg-white shadow-lg w-full  max-w-[1164px] h-[730px] p-6 rounded-lg">
        {/* Back Button (inside the box, aligned to the left side) */}
        <Link to="/mintdata">
          <button className="absolute left-6 top-6 border border-black bg-white w-[100px] h-[50px] rounded-md font-medium">
            Back
          </button>
        </Link>

        {/* Heading Text */}
        <h1 className="text-3xl font-semibold mb-8 font-apex">CHOOSE COLLECTION</h1>

        {/* Collection Divs */}
        <div className="space-y-4 w-full font-roboto">
          {[images1, images2, images3, images4].map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full max-w-[628px] h-[91px] bg-gray-100 rounded-lg p-4 mx-auto"
            >
              {/* Left Side: Image and Text */}
              <div className="flex items-center">
                <img src={image} alt="Collection" className="h-[61px] w-[61px] mr-4" />
                <div>
                  <p className="text-lg font-medium">Wonderful Artwork</p>
                  <p className="text-sm text-gray-500">Items: 1.4k</p>
                </div>
              </div>

              {/* Right Side: Select Button */}
              <button className="px-4 py-2 bg-gray-300 rounded-md text-sm font-medium">
                Select
              </button>
            </div>
          ))}
        </div>

        {/* Next Button (inside the box, at the bottom-right corner) */}
<Link to="/mintdata"><button className="absolute bottom-6 right-6 px-6 py-2 bg-button-gradient font-roboto text-white rounded-md font-medium">
          Next
        </button></Link>
      </div>
    </div>
  );
};

export default ChooseCollection;
