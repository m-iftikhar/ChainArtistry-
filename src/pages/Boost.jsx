import { FaBars, FaFileAlt, FaClock, FaList, FaTags, FaInfoCircle, FaFilter } from 'react-icons/fa';
import pixacio from '../assets/pixacio.png';
import Trendings from '../components/Trendings';

const Boost = () => {
  return (
    <div className="min-h-screen p-4 gap-6 mt-[100px]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side */}
        <div>
          {/* Image */}
          <div
            className="relative bg-white rounded-xl shadow-lg overflow-hidden "
            style={{
              width: '100%',
              maxWidth: '514px',
              height: 'auto',
              top: '10px',
              left: '10px',
              gap: '0px',
              borderRadius: '20px 0px 0px 0px',
              opacity: '1',
            }}
          >
            <img
              src={pixacio}
              alt="Pixacio Item"
              className="w-full h-auto object-cover rounded-t-2xl md:rounded-l-2xl"
            />
          </div>

          {/* Description */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg mt-4"
            style={{
              width: '100%',
              maxWidth: '546px',
              height: '171px',
              gap: '2px',
              opacity: '1',
              position: 'relative',
            }}
          >
            <div className="flex items-center mb-2">
              <FaBars className="text-gray-700 mr-2" />
              <h3 className="text-lg font-bold">Description</h3>
            </div>
            <p className="text-gray-600">
              By Stella Nova
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu feugiat felis.
            </p>
          </div>

          {/* Traits */}
          <div
            className="bg-white mt-4 p-6 rounded-xl shadow-lg"
            style={{
              width: '100%',
              maxWidth: '546px',
              gap: '2px',
              opacity: '1',
              position: 'relative',
            }}
          >
            <div className="flex items-center mb-4">
              <FaFileAlt className="text-gray-700 mr-2" />
              <h3 className="text-lg font-bold">Traits</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
                  <h4 className="text-sm font-medium">Floor</h4>
                  <p className="text-gray-600">12.75 AUD</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          {/* Heading */}
          <h1 className="text-3xl font-apex mb-4 mt-10">
            PIXACIO
          </h1>
          <p className="text-gray-600 font-apex mt-4">Owned by Stella Nova</p>

          {/* Sell Box */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-6 w-full sm:w-[600px] h-auto">
            <div className="flex items-center mb-4">
              <FaClock className="text-gray-700 mr-2" />
              <h3 className="text-lg font-bold">Sale ends 18 November 2023</h3>
            </div>
            <p className="text-gray-600">Current Price</p>
            <span className="text-2xl font-bold">5.001 FRY</span>
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 w-full sm:w-[270px] h-[44px] bg-gray-200 rounded-lg hover:bg-gray-300">
                Buy Now
              </button>
              <button className="px-4 py-2 w-full sm:w-[270px] h-[44px] bg-red-500 text-white rounded-lg hover:bg-red-600">
                Make Offer
              </button>
            </div>
          </div>

          {/* Listings Box */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
            <div className="flex items-center mb-4">
              <FaList className="text-gray-700 mr-2" />
              <h3 className="text-lg font-bold">Listings</h3>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600">
                  <th>Price</th>
                  <th>USD Price</th>
                  <th>Quantity</th>
                  <th>From</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.008 FRY</td>
                  <td>$4.25</td>
                  <td>2</td>
                  <td>160D55</td>
                </tr>
              </tbody>
            </table>
            <div>
            <button className="absolute right-4 md:right-14 bg-red-500 w-[54px] h-[32px] bottom-10 rounded-md">
  Buy
</button>

            </div>
          </div>

          {/* Offers Box */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
            <div className="flex items-center mb-4">
              <FaTags className="text-gray-700 mr-2" />
              <h3 className="text-lg font-bold">Offers</h3>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600">
                  <th>Price</th>
                  <th>USD Price</th>
                  <th>Quantity</th>
                  <th>Floor Difference</th>
                  <th>From</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(8)].map((_, index) => (
                  <tr key={index}>
                    <td>0.008 FRY</td>
                    <td>$4.25</td>
                    <td>2</td>
                    <td>44% below</td>
                    <td>160D55</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Details Box */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-gray-700 mr-2" />
              <h3 className="text-lg font-bold">Details</h3>
            </div>
            <ul className="text-gray-600">
              <li>Contract Address: 0x84B8...1713</li>
              <li>Token ID: 7926</li>
              <li>Token Standard: ERC-721</li>
              <li>Chain: Algorand</li>
              <li>Creator Earnings: 6.5%</li>
            </ul>
          </div>
        </div>
      </div>

  {/* Full Width Item Activity */}
<div className="bg-white mt-8 p-6 rounded-xl shadow-lg mx-auto max-w-full lg:max-w-[1280px]">
  <div className="flex items-center mb-4">
    <FaList className="text-gray-700 mr-2" />
    <h3 className="text-lg font-bold">Item Activity</h3>
  </div>
  <div className="flex items-center mb-4">
    <FaFilter className="text-gray-700 mr-2" />
    <input
      type="text"
      placeholder="Filter activities..."
      className="w-full p-2 border border-gray-300 rounded-lg"
    />
  </div>
  <table className="w-full text-left">
    <thead>
      <tr className="text-gray-600">
        <th>Event</th>
        <th>Price</th>
        <th>From</th>
        <th>To</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>List</td>
        <td>0.008 FRY</td>
        <td>294693</td>
        <td>1 day</td>
        <td>1 day ago</td>
      </tr>
      <tr>
        <td>List</td>
        <td>0.008 FRY</td>
        <td>294693</td>
        <td>1 day</td>
        <td>1 day ago</td>
      </tr>
      <tr>
        <td>List</td>
        <td>0.008 FRY</td>
        <td>294693</td>
        <td>1 day</td>
        <td>1 day ago</td>
      </tr>
      <tr>
        <td>List</td>
        <td>0.008 FRY</td>
        <td>294693</td>
        <td>1 day</td>
        <td>1 day ago</td>
      </tr>
      {/* Add more rows if necessary */}
    </tbody>
  </table>
</div>
    <Trendings title="MORE FROM THIS COLLECTIONS"/>

    </div>

  );
};

export default Boost;
