import { useState } from "react";
import { Link } from "react-router-dom";

const Setting = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleUploadClick = () => {
    setShowUploadModal(true);
  };

  const handleCloseModal = () => {
    setShowUploadModal(false);
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Store the image as a data URL for preview
      };
      reader.readAsDataURL(file); // Read the file as data URL
    }
  };

  const handleUploadImage = () => {
    // Implement your file upload logic here
    alert("Image uploaded successfully!");
    setShowUploadModal(false); // Close modal after upload
  };

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Buttons Section */}
      <div className="flex space-x-4 mt-6 border border-gray-400 rounded-md p-2 sm:absolute sm:top-[140px] sm:left-[300px] sm:gap-0">
        <Link to="/profile">
          <button className="bg-red-600 text-white font-apex px-4 py-2 rounded-md w-[100px] h-[50px]">
            Profile
          </button>
        </Link>
        <button className="text-black font-apex px-4 py-2 rounded-md w-[100px] h-[50px]">
          Setting
        </button>
      </div>

      {/* Main Content */}
      <div
        className="w-full max-w-screen-xl mx-auto text-white p-8 rounded-lg mt-[200px]"
        style={{ height: "1794px", opacity: 1 }}
      >
        {/* Banner Upload */}
        <div className="relative bg-gray-300 w-full max-w-[1320px] rounded-lg mx-auto" style={{ height: "305px" }}>
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg">
            Upload Banner
          </button>
        </div>

        {/* Profile Upload */}
        <div className="relative flex justify-center mt-10">
          <div className="w-[100px] h-[100px] bg-gray-300 rounded-full flex items-center justify-center border-2 border-dashed border-gray-500">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="text-2xl font-bold text-gray-500">+</span>
            )}
          </div>
        </div>
        <div className="text-center mt-2">
          <button
            className="bg-white text-black px-4 py-2 rounded-lg"
            onClick={handleUploadClick}
          >
            Upload Profile
          </button>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-black font-apex mb-2">Display Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full sm:w-[817px] h-[58px] border border-gray-300 text-black px-4 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-black font-roboto mb-2">Bio</label>
            <textarea
              placeholder="Enter Bio"
              className="w-full sm:w-[817px] h-[170px] border border-gray-300 text-black px-4 py-2 rounded-lg"
            ></textarea>
          </div>

          <div>
            <label className="block text-black font-roboto mb-2">E-Mail</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full sm:w-[817px] h-[58px] border border-gray-300 text-black px-4 py-2 rounded-lg"
            />
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-black font-apex font-semibold text-2xl mb-4">SOCIAL LINKS</h3>
            <div className="space-y-4">
              {["Website", "X(Twitter)", "Discord", "Instagram"].map((label) => (
                <div key={label} className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder={`Enter ${label}`}
                    className="flex-1 w-full sm:w-[817px] h-[58px] border border-gray-300 text-black px-4 py-2 rounded-l-lg"
                  />
                  <button className="bg-red-500 text-white px-4 py-2 sm:absolute right-28 rounded-md w-[120px] sm:w-[130px] flex-shrink-0">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </form>

        {/* Save Changes */}
        <div className="mt-8 text-left">
          <Link to="/profile">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
              Save Changes
            </button>
          </Link>
        </div>
      </div>

      {/* Upload Profile Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="text-2xl text-center font-apex mb-4">Upload Image</h2>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-[179px] h-[129px] bg-gray-200 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center mb-4">
                <span className="text-gray-500 mb-2">Drag and Drop</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-input"
                />
                <label
                  htmlFor="file-input"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer"
                >
                  Upload Image
                </label>
              </div>
            </div>
            {profileImage && (
              <button
                onClick={handleUploadImage}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 mt-4"
              >
                Confirm Upload
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Setting;
