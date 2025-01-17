import heroimage1 from '../assets/heroimage1.png';
import heroimage2 from '../assets/heroimage1.png';
import heroimage3 from '../assets/heroimage1.png';
import heroimage4 from '../assets/heroimage1.png';
import heroimage5 from '../assets/heroimage1.png';
import './Homehero.css'
import hands from '../assets/hands.png';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center  justify-center text-center px-4 py-8 h-screen md:px-2 md:py-8">


    
      <div
        className="absolute flex items-center justify-center mt-0"
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
        <div className="absolute w-[800px] h-[400px] bg-red-500 opacity-30 shadow-lg" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", filter: "blur(100px)", marginTop: '20px' }}></div>
        <div className="absolute transform -rotate-4 left-[-60px] top-[42px] w-[225.69px] h-[300.71px] animation-l-to-r" style={{ marginTop: '20px' }}>
          <img
            src={heroimage1}
            alt="Hero Image 3"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
        <div className="absolute transform -rotate-4 left-[80px] top-[19.04px] w-[266.67px] h-[355.31px] animation-l-to-r" style={{ marginTop: '20px' }}>
          <img
            src={heroimage2}
            alt="Hero Image 4"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
        <img
          src={heroimage3}
          alt="Hero Image 1"
          className="relative z-20 rounded-lg w-[308.36px] h-[410.96px] animation-u-to-d"
          style={{
            left: "0px",
            gap: "0px",
            opacity: "0px",
            marginLeft: "-40px",
            marginRight: "-40px",
            marginTop: '20px',
          }}
        />
        <div className="absolute transform rotate-4 right-[70px] top-[19.04px] w-[266.67px] h-[355.31px] z-10 animation-r-to-l" style={{ marginTop: '20px' }}>
          <img
            src={heroimage5}
            alt="Hero Image 2"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
        <div className="absolute transform rotate-4 right-[-90px] top-[42px] w-[225.69px] h-[300.71px] z-0 animation-r-to-l" style={{ marginTop: '20px' }}>
          <img
            src={heroimage4}
            alt="Hero Image 5"
            className="relative z-10 rounded-lg w-full h-full"
          />
        </div>
      </div>

      
      <img
        src={hands}
        alt="Hands Background"
        className="absolute bottom-0 w-full h-auto opacity-1 z-0"
        style={{
          width: "100%",
          height: "auto",
          top:"40%",
          maxWidth: "1920px",
          maxHeight: "1080px",
          bottom: "-170px", // Adjust this value to move the image down
        }}
      />
    </div> 
  );
};

export default Hero;