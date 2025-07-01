import { useNavigate } from 'react-router-dom';
import Aurora from '../components/Aurora';
import Magnet from '../components/Magnet';
import TiltedCard from '../components/TiltedCard';
import RotatingText from '../components/RotatingText';

export default function Home() {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <div className="fixed inset-0 w-full h-screen">
      <Aurora 
        colorStops={["#5227FF", "#7CFF67", "#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 lg:px-20 py-6 sm:py-10 z-10 max-w-7xl mx-auto gap-8 lg:gap-0">
        {/* Left Side - TiltedCard */}
        <div className="flex flex-col gap-4 items-center order-2 lg:order-1">
          <TiltedCard
            imageSrc="/hero-image.png"
            altText="Mohamed Mujtaba"
            captionText="HIRE ME"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={20}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="flex flex-col items-center justify-center w-full h-full p-3 sm:p-4 text-white bg-black/40 backdrop-blur-sm rounded-[15px]">
                <p className="text-xs sm:text-sm mb-1 sm:mb-2">Mohamed Mujtaba</p>
              </div>
            }
          />
        </div>
        
        {/* Right Side - Hero Text */}
        <div className="flex flex-col max-w-xl text-center lg:text-left order-1 lg:order-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Mohamed Mujtaba
            <div className="mt-2">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="inline-flex items-stretch h-8 sm:h-10">
                  <div className="relative flex items-center h-full">
                    <RotatingText
                      texts={['Full-Stack', 'MERN-Stack', 'Java']}
                      mainClassName="h-full px-2 sm:px-4 bg-primary text-white font-bold flex items-center rounded-lg mr-2 shadow-glow-sm text-sm sm:text-base"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden"
                      elementLevelClassName="font-bold"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </div>
                  <div className="h-full flex items-center px-2 sm:px-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg shadow-glow-xs text-sm sm:text-base">
                    Developer
                  </div>
                </div>
              </div>
            </div>
          </h1>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0">
            <span className="text-accent font-medium">Transforming ideas into digital reality.</span> I blend artistry 
            with cutting-edge technology to create <span className="text-primary/90 font-medium">immersive experiences</span> that 
            captivate and inspire. From responsive interfaces to scalable architectures, 
            every project is crafted with <span className="text-white font-medium animate-pulse">pixel-perfect precision</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <Magnet padding={100} magnetStrength={25}>
              <button 
                onClick={handleViewProjects}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 shadow-glow-xs hover:shadow-glow-sm text-sm sm:text-base"
              >
                View Projects
              </button>
            </Magnet>
            <Magnet padding={100} magnetStrength={25}>
              <button 
                onClick={handleGetInTouch}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#7CFF67]/20 hover:bg-[#7CFF67]/30 text-white rounded-full border border-[#7CFF67]/30 backdrop-blur-sm transition-all duration-300 shadow-glow-xs hover:shadow-glow-sm text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </Magnet>
          </div>
        </div>
      </div>
    </div>
  );
}
