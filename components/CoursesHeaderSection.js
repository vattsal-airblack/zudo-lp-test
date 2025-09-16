import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const CoursesHeaderSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle item (index 1) as center
  const scrollContainerRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const courseThumbnails = [
    {
      id: 1,
      title: "AM SE PAISE KAMAYE",
      category: "Business",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600548/zudo/website/Course_Thumbnail_-_1_iov7r4.png",
      description: "Learn how to earn money from social media"
    },
    {
      id: 2,
      title: "Bengali BRIDAL LOOK",
      category: "Beauty",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600548/zudo/website/Course_Thumbnail_-_2_x3lq8u.png",
      description: "Master the art of traditional Bengali bridal makeup"
    },
    {
      id: 3,
      title: "Artifi Jewell BUSINESS LAUNCH K",
      category: "Business",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600548/zudo/website/Course_Thumbnail_-_3_wl7soz.png",
      description: "Launch your artificial jewelry business successfully"
    },
    {
      id: 4,
      title: "Course Title 4",
      category: "Category",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600549/zudo/website/Course_Thumbnail_-_4_kfnul6.png",
      description: "Course description for thumbnail 4"
    },
    {
      id: 5,
      title: "Course Title 5",
      category: "Category",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600549/zudo/website/Course_Thumbnail_-_5_a99mnt.png",
      description: "Course description for thumbnail 5"
    },
    {
      id: 6,
      title: "AM SE PAISE KAMAYE",
      category: "Business",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600548/zudo/website/Course_Thumbnail_-_1_iov7r4.png",
      description: "Learn how to earn money from social media"
    },
    {
      id: 7,
      title: "Bengali BRIDAL LOOK",
      category: "Beauty",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600548/zudo/website/Course_Thumbnail_-_2_x3lq8u.png",
      description: "Master the art of traditional Bengali bridal makeup"
    },
    {
      id: 8,
      title: "Artifi Jewell BUSINESS LAUNCH K",
      category: "Business",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600548/zudo/website/Course_Thumbnail_-_3_wl7soz.png",
      description: "Launch your artificial jewelry business successfully"
    },
    {
      id: 9,
      title: "Course Title 4",
      category: "Category",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600549/zudo/website/Course_Thumbnail_-_4_kfnul6.png",
      description: "Course description for thumbnail 4"
    },
    {
      id: 10,
      title: "Course Title 5",
      category: "Category",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600549/zudo/website/Course_Thumbnail_-_5_a99mnt.png",
      description: "Course description for thumbnail 5"
    },{
      id: 11,
      title: "AM SE PAISE KAMAYE",
      category: "Business",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600548/zudo/website/Course_Thumbnail_-_1_iov7r4.png",
      description: "Learn how to earn money from social media"
    },
    {
      id: 12,
      title: "Bengali BRIDAL LOOK",
      category: "Beauty",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600548/zudo/website/Course_Thumbnail_-_2_x3lq8u.png",
      description: "Master the art of traditional Bengali bridal makeup"
    },
    {
      id: 13,
      title: "Artifi Jewell BUSINESS LAUNCH K",
      category: "Business",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600548/zudo/website/Course_Thumbnail_-_3_wl7soz.png",
      description: "Launch your artificial jewelry business successfully"
    },
    {
      id: 14,
      title: "Course Title 4",
      category: "Category",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600549/zudo/website/Course_Thumbnail_-_4_kfnul6.png",
      description: "Course description for thumbnail 4"
    },
    {
      id: 15,
      title: "Course Title 5",
      category: "Category",
      image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1757600549/zudo/website/Course_Thumbnail_-_5_a99mnt.png",
      description: "Course description for thumbnail 5"
    }
  ];

  const scrollToCenter = (index) => {
    setActiveIndex(index);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % courseThumbnails.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + courseThumbnails.length) % courseThumbnails.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Touch gesture handling
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false); // Pause auto-play during interaction
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
    
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  // Mouse drag handling for desktop
  const [mouseStart, setMouseStart] = useState(null);
  const [mouseEnd, setMouseEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setMouseEnd(null);
    setMouseStart(e.clientX);
    setIsDragging(true);
    setIsAutoPlaying(false); // Pause auto-play during interaction
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (!mouseStart || !mouseEnd) return;
    
    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
    
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };
  return (
    <section className="relative w-full bg-black">
      <div className="relative">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-center py-8">
          <div className="relative flex flex-col justify-center items-center w-full px-8">
            <div className="w-full pl-8">
              <p className="text-[#777777] text-[22px] font-inter font-normal">
                Choose from
              </p>
            </div>
            
            <div className="flex items-center gap-3 mt-2">
              <div className="flex-shrink-0">
                <Image
                  src="/images/heart-icon.png"
                  alt="Heart Icon"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              
              <h2 
                className="text-white font-instrument-serif font-normal"
                style={{
                  fontSize: '54px',
                  lineHeight: '100%',
                  letterSpacing: '-2%'
                }}
              >
                1000+ courses
              </h2>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-center pt-8">
          <div className="relative flex items-center justify-center w-full max-w-4xl px-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <p className="text-[#777777] text-[28px] font-inter font-normal">
                  Choose from
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/heart-icon.png"
                    alt="Heart Icon"
                    width={72}
                    height={72}
                    className="object-contain"
                    priority
                  />
                </div>
                
                <h2 
                  className="text-white font-instrument-serif font-normal"
                  style={{
                    fontSize: '75px',
                    lineHeight: '100%',
                    letterSpacing: '-2%'
                  }}
                >
                  1000+ courses
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Section */}
      <div className="relative">
        {/* Mobile Thumbnail Section */}
        <div className="block md:hidden py-8">
          <div className="relative w-full px-4">
            <div 
              className="relative flex justify-center items-center h-[267px] w-full"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => setIsDragging(false)}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              {/* Left Image */}
              <div 
                className="absolute cursor-pointer transition-all duration-300"
                style={{
                  width: '154px',
                  height: '206px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) translateX(-120px)',
                  opacity: 0.5,
                  borderRadius: '7px',
                  zIndex: 1
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isDragging) {
                    prevImage();
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[7px]">
                  <Image
                    src={courseThumbnails[activeIndex > 0 ? activeIndex - 1 : courseThumbnails.length - 1].image}
                    alt={courseThumbnails[activeIndex > 0 ? activeIndex - 1 : courseThumbnails.length - 1].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Center Image (Highlighted) */}
              <div 
                className="absolute cursor-pointer transition-all duration-300"
                style={{
                  width: '200px',
                  height: '267px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 1,
                  zIndex: 3
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isDragging) {
                    // Center image click - could be used for navigation or details
                  }
                }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={courseThumbnails[activeIndex].image}
                    alt={courseThumbnails[activeIndex].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right Image */}
              <div 
                className="absolute cursor-pointer transition-all duration-300"
                style={{
                  width: '154px',
                  height: '206px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) translateX(120px)',
                  opacity: 0.5,
                  borderRadius: '7px',
                  zIndex: 1
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isDragging) {
                    nextImage();
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[7px]">
                  <Image
                    src={courseThumbnails[activeIndex < courseThumbnails.length - 1 ? activeIndex + 1 : 0].image}
                    alt={courseThumbnails[activeIndex < courseThumbnails.length - 1 ? activeIndex + 1 : 0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Thumbnail Section */}
        <div className="hidden md:block">
          <div className="relative w-full flex justify-center">
            <div className="relative w-[80%] max-w-7xl">
              {/* Left Arrow */}
              <button
                onClick={() => {
                  prevImage();
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => {
                  nextImage();
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div 
                className="relative flex justify-center items-center h-[60vh] min-h-[400px] max-h-[600px] w-full"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={() => setIsDragging(false)}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
              {/* Far Left Image */}
              <div 
                className="absolute cursor-pointer transition-all duration-300"
                style={{
                  width: 'clamp(150px, 10vw, 180px)',
                  height: 'clamp(200px, 13.5vw, 240px)',
                  top: '50%',
                  left: '10%',
                  transform: 'translateY(-50%)',
                  opacity: 0.3,
                  borderRadius: '12px',
                  zIndex: 1
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isDragging) {
                    prevImage();
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[12px]">
                  <Image
                    src={courseThumbnails[activeIndex > 1 ? activeIndex - 2 : (activeIndex - 2 + courseThumbnails.length) % courseThumbnails.length].image}
                    alt={courseThumbnails[activeIndex > 1 ? activeIndex - 2 : (activeIndex - 2 + courseThumbnails.length) % courseThumbnails.length].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Left Image */}
              <div 
                className="absolute cursor-pointer transition-all duration-300"
                style={{
                  width: 'clamp(160px, 12vw, 220px)',
                  height: 'clamp(213px, 16vw, 293px)',
                  top: '50%',
                  left: '25%',
                  transform: 'translateY(-50%)',
                  opacity: 0.5,
                  borderRadius: '14px',
                  zIndex: 2
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isDragging) {
                    prevImage();
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[14px]">
                  <Image
                    src={courseThumbnails[activeIndex > 0 ? activeIndex - 1 : courseThumbnails.length - 1].image}
                    alt={courseThumbnails[activeIndex > 0 ? activeIndex - 1 : courseThumbnails.length - 1].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Center Image (Highlighted) */}
              <div 
                className="absolute cursor-pointer transition-all duration-300"
                style={{
                  width: 'clamp(180px, 14vw, 250px)',
                  height: 'clamp(240px, 18.5vw, 333px)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 1,
                  borderRadius: '16px',
                  zIndex: 5
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isDragging) {
                    // Center image click - could be used for navigation or details
                  }
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[16px]">
                  <Image
                    src={courseThumbnails[activeIndex].image}
                    alt={courseThumbnails[activeIndex].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right Image */}
              <div 
                className="absolute cursor-pointer transition-all duration-300"
                style={{
                  width: 'clamp(160px, 12vw, 220px)',
                  height: 'clamp(213px, 16vw, 293px)',
                  top: '50%',
                  right: '25%',
                  transform: 'translateY(-50%)',
                  opacity: 0.5,
                  borderRadius: '14px',
                  zIndex: 2
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isDragging) {
                    nextImage();
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[14px]">
                  <Image
                    src={courseThumbnails[activeIndex < courseThumbnails.length - 1 ? activeIndex + 1 : 0].image}
                    alt={courseThumbnails[activeIndex < courseThumbnails.length - 1 ? activeIndex + 1 : 0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Far Right Image */}
              <div 
                className="absolute cursor-pointer transition-all duration-300"
                style={{
                  width: 'clamp(150px, 10vw, 180px)',
                  height: 'clamp(200px, 13.5vw, 240px)',
                  top: '50%',
                  right: '10%',
                  transform: 'translateY(-50%)',
                  opacity: 0.3,
                  borderRadius: '12px',
                  zIndex: 1
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isDragging) {
                    nextImage();
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[12px]">
                  <Image
                    src={courseThumbnails[activeIndex < courseThumbnails.length - 2 ? activeIndex + 2 : (activeIndex + 2) % courseThumbnails.length].image}
                    alt={courseThumbnails[activeIndex < courseThumbnails.length - 2 ? activeIndex + 2 : (activeIndex + 2) % courseThumbnails.length].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="relative">
        {/* Mobile Feature Cards */}
        <div className="block md:hidden">
          <div className="relative w-full px-4 py-8">
            <div className="flex justify-center items-center gap-[5.46px]">
              <Image
                src="/images/15-min-logo.png"
                alt="Duration Icon"
                width={141.92}
                height={71.49}
                className="object-contain"
              />
              <Image
                src="/images/language-icon.png"
                alt="Language Icon"
                width={141.92}
                height={71.49}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Desktop Feature Cards */}
        <div className="hidden md:block -mt-10 mb-10">
          <div className="relative w-full">
            <div className="flex justify-center items-center gap-[8px] md:gap-[10px] lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px]">
              <Image
                src="/images/15-min-logo.png"
                alt="Duration Icon"
                width={141.92}
                height={71.49}
                className="object-contain w-[180px] h-[90px] md:w-[200px] md:h-[100px] lg:w-[220px] lg:h-[110px] xl:w-[220px] xl:h-[100px]"
              />
              <Image
                src="/images/language-icon.png"
                alt="Language Icon"
                width={141.92}
                height={71.49}
                className="object-contain w-[180px] h-[90px] md:w-[200px] md:h-[100px] lg:w-[220px] lg:h-[110px] xl:w-[220px] xl:h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHeaderSection;
