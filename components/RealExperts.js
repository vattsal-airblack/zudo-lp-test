import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

// Lazy Video Component
const LazyVideo = ({ src, alt, className, style }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={className} style={style}>
      {inView ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-800 animate-pulse" />
      )}
    </div>
  );
};

const RealExperts = () => {
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const [desktopScrollPosition, setDesktopScrollPosition] = useState(0);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const desktopScrollRef = useRef(null);

  // Video data
  const videoThumbnails = [
    {
      id: 1,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228516/zudo/website/1_dxl75h.mp4"
    },
    {
      id: 2,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228520/zudo/website/2_okxens.mp4"
    },
    {
      id: 3,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228537/zudo/website/3_qxwm8y.mp4"
    },
    {
      id: 4,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228538/zudo/website/4_g2jiiz.mp4"
    },
    {
      id: 5,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228532/zudo/website/5_aujfy2.mp4"
    },
    {
      id: 6,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228539/zudo/website/6_huqzl0.mp4"
    },
    {
      id: 7,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228505/zudo/website/7_nramxo.mp4"
    },
    {
      id: 8,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228509/zudo/website/8_w4ueml.mp4"
    },
    {
      id: 9,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228544/zudo/website/9_wmygi3.mp4"
    },
    {
      id: 10,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228530/zudo/website/10_dqw1gl.mp4"
    },
    {
      id: 11,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228535/zudo/website/11_kelppy.mp4"
    },
    {
      id: 12,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228512/zudo/website/12_kcww5x.mp4"
    },
    {
      id: 13,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228522/zudo/website/13_oprsbu.mp4"
    },
    {
      id: 14,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228533/zudo/website/14_mlfptw.mp4"
    },
    {
      id: 15,
      video: "https://res.cloudinary.com/dtks0l86r/video/upload/v1759228525/zudo/website/15_xi1ikk.mp4"
    }
  ];

  // Create arrays with 10 videos each for mobile rows
  const mobileRow1 = Array(10).fill(videoThumbnails).flat();
  const mobileRow2 = Array(10).fill(videoThumbnails).flat();
  const desktopRow = Array(10).fill(videoThumbnails).flat();

  // Auto-scroll for mobile row 1 (left to right)
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition1(prev => {
        const maxScroll = scrollRef1.current?.scrollWidth - scrollRef1.current?.clientWidth || 0;
        return prev >= maxScroll ? 0 : prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll for mobile row 2 (right to left)
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition2(prev => {
        const maxScroll = scrollRef2.current?.scrollWidth - scrollRef2.current?.clientWidth || 0;
        return prev <= 0 ? maxScroll : prev - 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll for desktop row (left to right)
  useEffect(() => {
    const interval = setInterval(() => {
      setDesktopScrollPosition(prev => {
        const maxScroll = desktopScrollRef.current?.scrollWidth - desktopScrollRef.current?.clientWidth || 0;
        return prev >= maxScroll ? 0 : prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Update scroll positions
  useEffect(() => {
    if (scrollRef1.current) {
      scrollRef1.current.scrollLeft = scrollPosition1;
    }
  }, [scrollPosition1]);

  useEffect(() => {
    if (scrollRef2.current) {
      scrollRef2.current.scrollLeft = scrollPosition2;
    }
  }, [scrollPosition2]);

  useEffect(() => {
    if (desktopScrollRef.current) {
      desktopScrollRef.current.scrollLeft = desktopScrollPosition;
    }
  }, [desktopScrollPosition]);
  return (
    <section className="relative w-full bg-black">
      <div className="relative">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-center py-8">
          <div className="relative flex flex-col justify-center items-center w-full px-8">
            <div className="w-full pl-8">
              <p className="text-[#AAAAAA] text-[22px] font-inter font-normal">
                Learn from
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
                Real Experts
              </h2>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-center py-16">
          <div className="relative flex items-center justify-center w-full max-w-4xl px-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <p className="text-[#AAAAAA] text-[28px] font-inter font-normal">
                  Learn from
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
                  Real Experts
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Thumbnails Section */}
      <div className="relative">
        {/* Mobile Video Thumbnails - Two Rows */}
        <div className="block md:hidden py-8 pt-0">
          <div className="relative w-full">
            {/* First Row - Left to Right */}
            <div className="mb-4">
              <div 
                ref={scrollRef1}
                className="flex overflow-x-hidden gap-4 px-4 scrollbar-hide"
              >
                {mobileRow1.map((video, index) => (
                  <div key={`row1-${index}`} className="flex-shrink-0" style={{ width: '160px', height: '311.2603454589844px' }}>
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <LazyVideo
                        src={video.video}
                        alt="Video thumbnail"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Right to Left */}
            <div>
              <div 
                ref={scrollRef2}
                className="flex overflow-x-hidden gap-4 px-4 scrollbar-hide"
              >
                {mobileRow2.map((video, index) => (
                  <div key={`row2-${index}`} className="flex-shrink-0" style={{ width: '160px', height: '311.2603454589844px' }}>
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <LazyVideo
                        src={video.video}
                        alt="Video thumbnail"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Video Thumbnails - Single Row */}
        <div className="hidden md:block py-12 pt-0">
          <div className="relative w-full">
            <div 
              ref={desktopScrollRef}
              className="flex overflow-x-hidden gap-6 px-12 scrollbar-hide"
            >
              {desktopRow.map((video, index) => (
                <div key={`desktop-${index}`} className="flex-shrink-0" style={{ width: '260.06715393066406px', height: '400.2603454589844px' }}>
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <LazyVideo
                      src={video.video}
                      alt="Video thumbnail"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealExperts;
