
import { FaRegCopy } from "react-icons/fa";
import image1 from "../assets/images1.png";
import image2 from "../assets/images2.png";
import image3 from "../assets/images3.png";
import image4 from "../assets/images4.png";



const cardsData = [
  {
    title: "DRAGON WORLD",
    description: "Amet mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque.",
    image: image1,
  },
  {
    title: "FANTASY",
    description: "Sed vitae orci mollis, ultrices augue id, laoreet tellus. Nunc sed tincidunt.",
    image: image2,
  },
  {
    title: "DRAGON HOUSE",
    description: "Sed vitae orci mollis, ultrices augue id, laoreet tellus.",
    image: image3,
  },
  {
    title: "PRINCESS",
    description: "Sed vitae fermentum neque. Nunc sed tincidunt enim.",
    image: image4,
  },
  {
    title: "SPACE TEAM",
    description: "Nunc sed tincidunt enim, sed ultricies nisl.",
    image: image2,
  },
  {
    title: "SEA CREATURE",
    description: "Nunc sed tincidunt enim, sed ultricies nisl.",
    image: image1,
  },
  {
    title: "PIXEL GIRL",
    description: "Sed vitae fermentum neque. Nunc sed tincidunt enim.",
    image: image3,
  },
  {
    title: "SHADOW FIGHTER",
    description: "Sed vitae fermentum neque. Nunc sed tincidunt enim.",
    image: image4,
  },
];

function PromptExamples() {
  return (
    <div className="py-16 px-4 md:px-6">
      <h2 className="text-3xl font-apex font-semibold text-start ml-4 mb-12 md:ml-80">PROMPT EXAMPLES</h2>
      <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-2">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative flex bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-shadow w-[577px] h-[200px]"
          >
            {/* Image Section */}
            <div className="relative w-1/3">
              <img src={card.image} alt={card.title} className="object-cover h-full w-[312px] rounded-md" />
              {/* Copy Icon positioned on the right border of the image */}
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg"
                aria-label="Copy"
              >
                <FaRegCopy className="text-red-600  text-xl" />
              </button>
            </div>

            {/* Text Section */}
            <div className="p-4 w-2/3">
              <h3 className="text-lg font-apex text-gray-800">{card.title}</h3>
              <p className="text-sm font-apex text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromptExamples;