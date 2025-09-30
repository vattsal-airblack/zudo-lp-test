import Image from 'next/image';
import { useEffect, useRef } from 'react';

const PhoneMockupSection = () => {
  const mobileScrollRef = useRef(null);
  const desktopScrollRef = useRef(null);

  // Category data
  const categories = [
    { name: 'Business', image: '/images/business-category.png' },
    { name: 'Instagram', image: '/images/instagram-category.png' },
    { name: 'Fashion', image: '/images/fashion-category.png' },
    { name: 'Beauty', image: '/images/beauty-category.png' },
    { name: 'YouTube', image: '/images/youtube-category.png' },
    { name: 'Nutrition', image: '/images/butrition-category.png' },
  ];

  // Duplicate categories for infinite scroll
  const duplicatedCategories = [...categories, ...categories, ...categories];

  // Animation function for scroll containers
  const createScrollAnimation = (containerRef, scrollSpeed = 0.5) => {
    const container = containerRef.current;
    if (!container) return null;

    let animationId;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one set of categories
      if (scrollPosition >= container.scrollWidth / 3) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return animationId;
  };

  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Start mobile animation
      const mobileAnimationId = createScrollAnimation(mobileScrollRef, 0.5);
      
      // Start desktop animation
      const desktopAnimationId = createScrollAnimation(desktopScrollRef, 0.3);

      return () => {
        if (mobileAnimationId) {
          cancelAnimationFrame(mobileAnimationId);
        }
        if (desktopAnimationId) {
          cancelAnimationFrame(desktopAnimationId);
        }
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative w-full pb-10 bg-black overflow-hidden">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center">
          {/* iPhone Mockup */}
          <div className="relative mb-8">
            <Image
              src="/images/iphone-mockup.png"
              alt="iPhone Mockup"
              width={172}
              height={360}
              className="object-contain"
              priority
            />
            {/* Video inside iPhone screen */}
            <div className="absolute top-[14px] left-[8px] w-[156px] h-[328px] rounded-[20px] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://res.cloudinary.com/dtks0l86r/video/upload/v1759228541/zudo/website/New_video_website_3_nlz2jj.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Auto-scrolling Categories */}
          <div className="w-full">
            <div 
              ref={mobileScrollRef}
              className="flex gap-4 overflow-hidden scroll-container"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'auto',
                touchAction: 'none'
              }}
            >
              {duplicatedCategories.map((category, index) => (
                <div key={index} className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-xl overflow-hidden mb-2">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white text-sm font-medium text-center">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="relative w-full">
          {/* Background Categories - Behind iPhone */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              ref={desktopScrollRef}
              className="flex gap-8 overflow-hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {duplicatedCategories.map((category, index) => (
                <div key={index} className="flex-shrink-0 flex flex-col items-center opacity-60">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden mb-3">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white text-lg font-medium text-center">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* iPhone Mockup - Centered */}
          <div className="relative z-10 flex justify-center">
            <div className="relative">
              <Image
                src="/images/iphone-mockup.png"
                alt="iPhone Mockup"
                width={300}
                height={600}
                className="object-contain"
                priority
              />
              {/* Video inside iPhone screen */}
              <div className="absolute top-[25px] left-[14px] w-[272px] h-[570px] rounded-[35px] overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://res.cloudinary.com/dtks0l86r/video/upload/v1759228541/zudo/website/New_video_website_3_nlz2jj.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar and ensure proper scrolling */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
        .scroll-container {
          -webkit-overflow-scrolling: auto;
          overflow-x: auto;
          overflow-y: hidden;
        }
      `}</style>
    </section>
  );
};

export default PhoneMockupSection;
