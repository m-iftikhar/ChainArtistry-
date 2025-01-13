
import PropTypes from 'prop-types';

const CollectionCard = ({ title, creator, creatorImage, images }) => (
  <div className="border rounded-lg shadow-md p-4  bg-white hover:shadow-lg transition w-[417px] h-[301px] ">
    <div className="grid grid-cols-3 gap-2 mb-4">
      {images.slice(0, 6).map((image, index) => (
        <img key={index} src={image} alt={`${title} ${index + 1}`} className="w-full h-auto rounded" />
      ))}
    </div>
    <div className="flex items-center">
      <img src={creatorImage} alt={creator} className="w-10 h-10 rounded-md border mr-3" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">Created by {creator}</p>
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
