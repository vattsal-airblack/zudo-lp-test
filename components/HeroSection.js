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
          <h1 className="font-instrument-serif text-[45px] leading-[58.5px] text-center text-white mb-4">
            India's largest
            <br />
            learning app for
          </h1>
          
          {/* Highlighted Text with Bright Glowing Effect */}
          <div className="relative">
            <h2 className="font-instrument-serif text-[45px] leading-[58.5px] text-center">
              <span className="relative inline-block">
                {/* Background glow effect */}
                <span 
                  className="absolute inset-0 text-white blur-sm opacity-80"
                  style={{
                    filter: 'blur(4px)',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.4)',
                  }}
                >
                  creators & builders
                </span>
                
                {/* Main bright white text */}
                <span 
                  className="relative text-white"
                  style={{
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.5)',
                    filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.8))',
                  }}
                >
                  creators & builders
                </span>
              </span>
            </h2>
          </div>
        </div>

        {/* App Download Buttons */}
        <div className="flex flex-row gap-4 justify-center items-center mb-12">
          {/* Google Play Button */}
          {showGooglePlay && (
            <button
              className="w-[140px] h-[50px] flex items-center justify-center"
              onClick={handleGooglePlayClick}
            >
              <Image
                src="/images/play-store.png"
                alt="Get it on Google Play"
                width={140}
                height={50}
                className="object-contain"
              />
            </button>
          )}

          {/* App Store Button (Coming Soon) */}
          {showAppStore && (
            <button
              className="w-[140px] h-[50px] flex items-center justify-center cursor-not-allowed"
              onClick={handleAppStoreClick}
            >
              <Image
                src="/images/apple-store.png"
                alt="Download on the App Store"
                width={140}
                height={50}
                className="object-contain"
              />
            </button>
          )}
        </div>

        {/* Trust Indicators - Aligned with Store Buttons */}
        <div className="flex items-center space-x-3 -mt-6 text-white justify-center">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                <div className={`w-full h-full ${
                  i === 1 ? 'bg-gradient-to-br from-orange-400 to-red-500' :
                  i === 2 ? 'bg-gradient-to-br from-blue-400 to-purple-500' :
                  'bg-gradient-to-br from-green-400 to-blue-500'
                }`}></div>
              </div>
            ))}
          </div>
          <span className="text-sm font-medium">Trusted by 10 Lakh+ Indians 🇮🇳</span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
