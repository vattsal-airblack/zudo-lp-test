import Image from 'next/image';

const ZudoPathSection = () => {

  const cards = [
    {
      id: 1,
      title: "Watch Recorded Modules",
      description: "Short, sharp lessons taught by local experts in Hindi & English.",
      mobileImage: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597473/zudo/website/Journey-Graphic-1-Mobile_ivhbu9.png",
      desktopImage: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597474/zudo/website/Journey-Graphic-1-Desktop_gnl4hg.png"
    },
    {
      id: 2,
      title: "Take In-App Interactive Quizzes",
      description: "Built into the course to test your progress and keep you engaged.",
      mobileImage: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597473/zudo/website/Journey-Graphic-2-Mobile_ctf5mx.png",
      desktopImage: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597474/zudo/website/Journey-Graphic-2-Desktop_p3mtw0.png"
    },
    {
      id: 3,
      title: "Attend Group Live Classes",
      description: "Join fellow learners to connect with mentors in real time.",
      mobileImage: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597473/zudo/website/Journey-Graphic-3-Mobile_lr96ty.png",
      desktopImage: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597475/zudo/website/Journey-Graphic-3-Desktop_j2ulty.png"
    },
    {
      id: 4,
      title: "Unlock Unlimited Learnings with 1:1 chat with experts",
      description: "Keep learning deeper with your mentors and get all your queries answered.",
      mobileImage: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597473/zudo/website/Journey-Graphic-4-Mobile_ezcaf7.png",
      desktopImage: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597646/zudo/website/Journey-Graphic-4-Desktop_ckuumi.png"
    },
    {
      id: 5,
      title: "Take the Final Exam",
      description: "Prove your knowledge in a course-end assessment.",
      mobileImage: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597473/zudo/website/Journey-Graphic-5-Mobile_phgwel.png",
      desktopImage: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597478/zudo/website/Journey-Graphic-5-Desktop_ftspoc.png"
    },
    {
      id: 6,
      title: "Get Certified",
      description: "Unlock your Zudo Certificate, every time you complete a course.",
      mobileImage: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597474/zudo/website/Journey-Graphic-6-Mobile_jb01tr.png",
      desktopImage: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597479/zudo/website/Journey-Graphic-6-Desktop_htkbq0.png"
    }
  ];


  return (
    <section className="relative w-full py-16 overflow-hidden rounded-t-3xl border border-[#FB2E75] border-opacity-20 border-b-0" style={{background: 'linear-gradient(180deg, rgba(251, 46, 117, 0.15) 0%, rgba(251, 46, 117, 0) 100%)'}}>
      {/* Header Section */}
      <div className="relative">
        {/* Mobile Header */}
        <div className="block md:hidden">
          <div className="relative w-full px-6 py-8 pt-0">
            <p className="text-[#777777] text-[22px] font-inter font-normal">
              Follow the
            </p>
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Image
                  src="/images/zudo-logo.png"
                  alt="Zudo Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              
              <h2 className="text-white text-[54px] font-instrument-serif font-normal">
                Zudo Path
              </h2>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative flex items-center justify-center w-full  max-w-4xl px-12 py-16">
            <div>
            <p className="text-[#777777] text-[28px] font-inter font-normal mb-6">
              Follow the
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/zudo-logo.png"
                  alt="Zudo Logo"
                  width={72}
                  height={72}
                  className="object-contain"
                  priority
                />
              </div>
              
              <h2 className="text-white text-[54px] font-instrument-serif font-normal">
                Zudo Path
              </h2>
            </div>
            </div>
          </div>
        </div>
      </div>


      {/* Content Cards Container */}
      <div className="relative z-10">
        {/* Mobile Cards Container */}
        <div className="block md:hidden">
          <div className="relative w-full px-6 py-8">
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                className="mb-16 last:mb-0 relative"
              >
                {/* Mobile Timeline Line - Individual line for each card */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-600"></div>
                
                {/* Mobile Bullet Point */}
                <div className="absolute left-2 top-0 w-4 h-4 bg-white rounded-full border-2 border-gray-600 z-10"></div>
                
                {/* Card Content - Right Side */}
                <div className="ml-12">
                  <h3 
                    className="mb-3 font-inter font-bold"
                    style={{
                      background: 'linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: '18px',
                      lineHeight: '150%',
                      letterSpacing: '-2%'
                    }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-[16px] mb-6">
                    {card.description}
                  </p>
                  
                  {/* Visual Element */}
                  <div className="w-[308px] h-[250px] rounded-xl border border-[#FB2E75] border-opacity-20 overflow-hidden">
                    <Image
                      src={card.mobileImage}
                      alt={card.title}
                      width={308}
                      height={250}
                      className="w-full h-full object-cover"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Cards Container */}
        <div className="hidden md:block w-full">
          <div className="relative w-full px-12 py-16">
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                className="mb-24 last:mb-0 relative"
              >
                {/* Desktop Timeline Line - Individual line for each card */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-600"></div>
                
                {/* Desktop Bullet Point - Center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-4 h-4 bg-white rounded-full border-2 border-gray-600 z-10"></div>
                
                {/* Desktop Layout: Both sides close to center line */}
                <div className="flex items-start justify-center gap-8">
                  {/* Left Side - Title */}
                  <div className="w-1/2 pr-8 text-right">
                    <h3 
                      className="font-inter font-bold"
                      style={{
                        background: 'linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '28px',
                        lineHeight: '150%',
                        letterSpacing: '-2%',
                        textAlign: 'right'
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  
                  {/* Center - Timeline (handled by absolute positioning above) */}
                  
                  {/* Right Side - Description and Image */}
                  <div className="w-1/2 pl-8">
                    <p className="text-gray-300 text-[22px] mb-6">
                      {card.description}
                    </p>
                    
                    {/* Visual Element */}
                    <div className="w-[402.5px] h-[250px] rounded-xl border border-[#FB2E75] border-opacity-20 overflow-hidden">
                      <Image
                        src={card.desktopImage}
                        alt={card.title}
                        width={402.5}
                        height={250}
                        className="w-full h-full object-cover"
                        priority={index < 2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* End Gradient Background */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 rounded-b-3xl pointer-events-none"
        style={{background: 'linear-gradient(180deg, rgba(251, 46, 117, 0.15) 0%, rgba(251, 46, 117, 0) 100%)'}}
      ></div>
    </section>
  );
};

export default ZudoPathSection;