import { Link } from 'react-router-dom';
import collection1 from '../assets/collection1.png';
import collection2 from '../assets/collection2.png';
import collection3 from '../assets/collection3.png';
import collection4 from '../assets/collection4.png';
import collection5 from '../assets/collection5.png';
import collection6 from '../assets/collection6.png';
import collectionprofile from '../assets/collectionprofile.png';
import CollectionCard from '../components/Collectioncard';

const TopCollections = () => {
  const collections = [
    {
      title: 'WONDERFUL ARTWORK',
      creator: 'Jacob Jones',
      creatorImage: collectionprofile,
      images: [collection1, collection2, collection3, collection4, collection5, collection6],
    },
    {
      title: 'AMAZING CREATIONS',
      creator: 'Emily Smith',
      creatorImage: collectionprofile,
      images: [collection1, collection2, collection3, collection4, collection5, collection6],
    },
    {
      title: 'FANTASTIC DESIGNS',
      creator: 'Michael Brown',
      creatorImage: collectionprofile,
      images: [collection1, collection2, collection3, collection4, collection5, collection6],
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-4 py-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 text-center sm:text-left">
        <h2 className="font-apex text-4xl font-bold  leading-[76.8px] tracking-[0.04em] text-left decoration-skip-ink">
          Top Collections
        </h2>
        <Link to="/topcollections" className="mt-2 sm:mt-0">
          <h2 className="text-blue-600 font-medium hover:underline text-lg">
            View More Collection
          </h2>
        </Link>
      </div>

      {/* Collection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {collections.map((collection, index) => (
          <CollectionCard
            key={index}
            title={collection.title}
            creator={collection.creator}
            creatorImage={collection.creatorImage}
            images={collection.images}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCollections;
