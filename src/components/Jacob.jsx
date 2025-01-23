import jocab from '../assets/jocab.png';
import jacobcollect1 from '../assets/jacobcollect1.png';
import jacobcollect2 from '../assets/jacobcollect2.png';
import jacobcollect3 from '../assets/jacobcollect3.png';
import jacobcollect4 from '../assets/jacobcollect4.png';
import jacobcollect5 from '../assets/jacobcollect5.png';
import jacobcollect6 from '../assets/jacobcollect6.png';
import jacobcollect7 from '../assets/jacobcollect7.png';
import jacobcollect8 from '../assets/jacobcollect8.png';
import jacobcollect9 from '../assets/jacobcollect9.png';


const Jacob = () => {
  const cards = [
    { name: 'ART WORK', items: 'Item 1.5k', image: jacobcollect1 },
    { name: 'ART WORK', items: 'Item 1.5k', image: jacobcollect2 },
    { name: 'ART WORK', items: 'Item 1.5k', image: jacobcollect3 },
    { name: 'ART WORK', items: 'Item 1.5k', image: jacobcollect4 },
    { name: 'ART WORK', items: 'Item 1.5k', image: jacobcollect5 },
    { name: 'ART WORK', items: 'Item 1.5k', image: jacobcollect6 },
    { name: 'ART WORK', items: 'Item 1.5k', image: jacobcollect7 },
    { name: 'ART WORK', items: 'Item 1.5k', image: jacobcollect8 },
    { name: 'ART WORK', items: 'Item 1.5k', image: jacobcollect9 },
  ];

  return (
    <div className="flex flex-col items-center mt-[100px] justify-center relative">
      <div
  className="flex flex-col items-center justify-center mt-8"
  style={{
    width: '90%', // Use percentage to adapt to smaller screens
    maxWidth: '755px', // Maintain the original width for laptop/desktop
    height: 'auto', // Allow height to adjust dynamically
  }}
>
  <h1
    className="font-apex"
    style={{
      color: 'red',
      fontSize: '6vw', // Adjust font size based on screen width
      maxFontSize: '96px', // Maintain the original font size for larger screens
      fontWeight: '700',
      lineHeight: '1.2em', // Relative line height for flexibility
      textAlign: 'center',
    }}
  >
    JOCAB JONES
  </h1>
  <span
    style={{
      fontFamily: 'Apex Mk2',
      fontSize: '4vw', // Adjust font size for smaller screens
      maxFontSize: '64px', // Maintain the original font size for larger screens
      fontWeight: '700',
      lineHeight: '1.2em',
      textAlign: 'center',
    }}
  >
    COLLECTION
  </span>
</div>

<img
  src={jocab}
  alt="Jocab"
  className="w-full max-w-[1320px] h-auto"
  style={{
    top: '200px',
    left: '50%',
    transform: 'translateX(-50%)',
    position: 'absolute',
  }}
/>


      {/* Cards Section */}
      <div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-0"
  style={{
    marginTop: '700px', // Maintain margin for larger screens
  }}
>
  {cards.map((card, index) => (
    <div
      key={index}
      className="bg-white shadow-md w-full max-w-[417px] h-auto p-4 rounded-lg mx-auto"
    >
      <div className="p-4">
        <h3 className="font-bold font-roboto text-lg ">{card.name}</h3>
        <p className="text-sm font-roboto ">{card.items}</p>
      </div>
      <img
        src={card.image}
        alt={card.name}
        className="w-full max-w-[387px] h-auto rounded-lg object-cover mx-auto"
      />
    </div>
  ))}
</div>

    </div>
   
  );
};

export default Jacob;
