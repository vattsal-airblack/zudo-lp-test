import Image from 'next/image';

const HeroSection = ({ 
  className = '',
  onAppStoreClick = null,
  onGooglePlayClick = null,
  showAppStore = true,
  showGooglePlay = true
}) => {
  const handleAppStoreClick = () => {
    if (onAppStoreClick) {
      onAppStoreClick();
    } else {
      // Default behavior - could show coming soon modal
      console.log('App Store coming soon');
    }
  };

  const handleGooglePlayClick = () => {
    if (onGooglePlayClick) {
      onGooglePlayClick();
    } else {
      // Default behavior - redirect to Google Play
      window.open('https://play.google.com/store/apps/details?id=com.zudo', '_blank');
    }
  };

  return (
    <section 
      className={`relative w-full flex flex-col items-center justify-center py-20 text-white ${className}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark background */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Torch spotlight effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 80% at 50% 30%, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 70%),
              radial-gradient(ellipse 50% 60% at 50% 30%, rgba(147, 51, 234, 0.6) 0%, transparent 50%)
            `,
          }}
        ></div>
        
        {/* Subtle star-like dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mt-16 w-full max-w-md mx-auto text-center">
        {/* Main Headline */}
        <div className="mb-16">
          <h1 className="font-instrument-serif text-[45px] leading-[58.5px] md:text-[60px] md:leading-[78px] lg:text-[72px] lg:leading-[93.6px] text-center text-white mb-4">
            India's largest
            <br />
            learning app for
            <br />
            <span className="relative inline-block whitespace-nowrap">
              {/* Background glow effect */}
              <span 
                className="absolute inset-0 text-white blur-sm opacity-20 whitespace-nowrap"
                style={{
                  filter: 'blur(4px)',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.4)',
                }}
              >
                creators & builders
              </span>
              
              {/* Main bright white text */}
              <span 
                className="relative text-white whitespace-nowrap"
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.5)',
                  filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))',
                }}
              >
                creators & builders
              </span>
            </span>
          </h1>
        </div>

        {/* App Download Buttons */}
        <div className="flex flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center mb-12">
          {/* Google Play Button */}
          {showGooglePlay && (
            <button
              className="w-[120px] h-[42px] sm:w-[130px] sm:h-[46px] md:w-[150px] md:h-[54px] lg:w-[170px] lg:h-[60px] xl:w-[180px] xl:h-[64px] flex items-center justify-center"
              onClick={handleGooglePlayClick}
            >
              <Image
                src="/images/play-store.png"
                alt="Get it on Google Play"
                width={180}
                height={64}
                className="object-contain w-full h-full"
              />
            </button>
          )}

          {/* App Store Button (Coming Soon) */}
          {showAppStore && (
            <button
              className="w-[120px] h-[42px] sm:w-[130px] sm:h-[46px] md:w-[150px] md:h-[54px] lg:w-[170px] lg:h-[60px] xl:w-[180px] xl:h-[64px] flex items-center justify-center cursor-not-allowed"
              onClick={handleAppStoreClick}
            >
              <Image
                src="/images/apple-store.png"
                alt="Download on the App Store"
                width={180}
                height={64}
                className="object-contain w-full h-full"
              />
            </button>
          )}
        </div>

        {/* Trust Indicators - Aligned with Store Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 -mt-6 text-white justify-center">
          <div className="flex -space-x-1 sm:-space-x-2">
            {[
              "https://res.cloudinary.com/dtks0l86r/image/upload/v1755672449/zudo/app/category-page/user-image-3_x9na2g.png",
              "https://res.cloudinary.com/dtks0l86r/image/upload/v1755672449/zudo/app/category-page/user-image-2_uybl1y.png",
              "https://res.cloudinary.com/dtks0l86r/image/upload/v1755672449/zudo/app/category-page/user-image-1_zbscgk.png"
            ].map((imageUrl, i) => (
              <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-black overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={`User ${i + 1}`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">Trusted by 10 Lakh+ Indians 🇮🇳</span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
