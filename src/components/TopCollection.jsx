
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
    <div className="w-[1319px] h-[428px] p-8">
        <div className='flex gap-[600px] '>
      <h2 className="text-4xl font-bold mb-6">Top Collections</h2>
    
        <h1 className=" text-red-600 w-400 font-bold text-2xl  ">
          View More Collections
        </h1>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {collections.map((collection, index) => (
          <CollectionCard  key={index}
          title={collection.title}
          creator={collection.creator}
          creatorImage={collection.creatorImage}
          images={collection.images}/>
        ))}
      </div>
    
    </div>
  );
};

export default TopCollections;
