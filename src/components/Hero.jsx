import heroimage1 from '../assets/heroimage1.png';
import heroimage2 from '../assets/heroimage2.png';
import heroimage4 from '../assets/heroimage4.png';
import heroimage5 from '../assets/heroimage5.png';
import './Homehero.css';
import hands from '../assets/hands.png';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 py-8 h-screen md:px-2 md:py-8">
      {/* Images and Animations */}
      <div
        className="hero-images-container absolute flex flex-col md:flex-row items-center justify-center mt-0"
        style={{
          width: "921.14px",
          height: "410.96px",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          gap: "0px",
          opacity: "0px",
        }}
      >
        <div
          className="absolute w-[800px] h-[400px] bg-red-500 opacity-30 shadow-lg"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(100px)",
            marginTop: "20px",
          }}
        ></div>

        {/* Adjust for mobile: Stack images vertically */}
        <div
          className="absolute transform -rotate-4 left-[-60px] top-[42px] w-[225.69px] h-[300.71px] animation-l-to-r md:transform-none md:left-[-60px] md:top-[42px] md:rotate-0"
          style={{ marginTop: "20px" }}
        >
          <img
            src={heroimage1}
            alt="Hero Image 3"
            className="relative z-10 rounded-lg w-[225px] h-[300px]"
          />
        </div>

        <div
          className="absolute transform -rotate-4 left-[80px] top-[19.04px] w-[266.67px] h-[355.31px] animation-l-to-r md:transform-none md:left-[80px] md:top-[19.04px] md:rotate-0"
          style={{ marginTop: "20px" }}
        >
          <img
            src={heroimage2}
            alt="Hero Image 4"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>

        <img
          src={heroimage5}
          alt="Hero Image 1"
          className="relative z-20 rounded-lg w-[308.36px] h-[410.96px] animation-u-to-d md:w-[308.36px] md:h-[410.96px] md:left-0"
          style={{
            left: "0px",
            gap: "0px",
            opacity: "0px",
            marginLeft: "-40px",
            marginRight: "-40px",
            marginTop: "20px",
          }}
        />

        <div
          className="absolute transform rotate-4 right-[70px] top-[19.04px] w-[266.67px] h-[355.31px] z-10 animation-r-to-l md:transform-none md:right-[70px] md:top-[19.04px] md:rotate-0"
          style={{ marginTop: "20px" }}
        >
          <img
            src={heroimage5}
            alt="Hero Image 2"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>

        <div
          className="absolute transform rotate-4 right-[-90px] top-[42px] w-[225.69px] h-[300.71px] z-0 animation-r-to-l md:transform-none md:right-[-90px] md:top-[42px] md:rotate-0"
          style={{ marginTop: "20px" }}
        >
          <img
            src={heroimage4}
            alt="Hero Image 5"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
      </div>

      {/* Background Hands */}
      <img
        src={hands}
        alt="Hands Background"
        className="hands-background absolute bottom-0 w-full h-auto opacity-1 z-0"
        style={{
          width: "100%",
          height: "auto",
          top: "45%",
          maxWidth: "1920px",
          maxHeight: "1080px",
          bottom: "-170px", // Adjust this value to move the image down
        }}
      />
        <div className='mt-0 h-auto w-full  '>
  {/* Show the image only on mobile (max-width: 768px), otherwise hidden on larger screens */}
  <img src={heroimage2} className="block md:hidden" />
  {/* <img src={heroimage2} className="block md:hidden " /> */}
     </div>
    </div>

    
 
  );
};

export default Hero;
