import Image from 'next/image';
import StackedReviewCarousel from './StackedReviewCarousel';
import PlayStoreRating from './PlayStoreRating';

const ReviewsSection = () => {
  return (
    <section className="relative w-full bg-black">
      <div className="relative">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-center py-8">
          <div className="relative flex flex-col justify-center items-center w-full px-8">
            <div className="w-full pl-8">
              <p className="text-[#777777] text-[22px] font-inter font-normal">
                Over 4000+
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
                Positive reviews
              </h2>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-center py-16">
          <div className="relative flex items-center justify-center w-full max-w-4xl px-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <p className="text-[#777777] text-[28px] font-inter font-normal">
                  Over 4000+
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
                  Positive reviews
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stacked Review Carousel Section */}
      <div className="relative w-full flex justify-center items-center py-8 md:py-16">
        <StackedReviewCarousel />
      </div>

      {/* Play Store Rating Section */}
      <div className="relative w-full flex justify-center items-center pb-8 md:pb-16">
        <PlayStoreRating />
      </div>
    </section>
  );
};

export default ReviewsSection;
