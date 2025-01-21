import PropTypes from 'prop-types';

const CollectionCard = ({ title, creator, creatorImage, images }) => (
  <div className="border rounded-lg shadow-lg p-4 w-full max-w-sm mx-auto transition-transform hover:scale-105">
      {/* Large Images Grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {images.slice(0, 2).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Artwork"
            className="rounded-lg w-full h-32 object-cover"
          />
        ))}
      </div>
      {/* Small Images Grid */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {images.slice(2, 6).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Artwork"
            className="rounded-lg w-full h-24 object-cover"
          />
        ))}
      </div>
      {/* Creator Info */}
      <div className="flex items-center gap-4">
        <img
          src={creatorImage}
          alt={creator}
          className="w-[68px] h-[68px] rounded-md border-2 "
        />
        <div>
          <p className="font-bold text-[18px] font-roboto">{title}</p>
          <p className="text-gray-500 text-sm font-roboto">Created by {creator}</p>
        </div>
      </div>
    </div>
);

CollectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  creatorImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CollectionCard;
