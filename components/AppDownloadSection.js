import React from 'react';
import Image from 'next/image';

const AppDownloadSection = ({ onAppStoreClick, onGooglePlayClick }) => {
  return (
    <section className="relative w-full  mt-12 flex items-center justify-center overflow-hidden">
      <div 
        className="w-4/5 max-w-6xl mx-auto app-download-container h-[660px] md:h-[500px]"
        style={{
          border: '2px solid transparent',
          borderRadius: '16px',
          background: 'linear-gradient(0deg, #1E1E28, #1E1E28) padding-box, linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%) border-box',
          boxShadow: '0px 0px 6px 0px rgba(255, 90, 31, 0.5)'
        }}
      >
      {/* Mobile Layout */}
      <div className="block md:hidden relative w-full h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/mobile-app-bg.png"
            alt="Mobile App Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col px-4 py-8">
          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {/* Main Heading */}
            <div className="text-center">
              <h1 className="font-instrument-serif text-white text-5xl md:text-6xl font-bold leading-tight">
                The Journey<br />
                Starts Here
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="text-center">
              <p className="font-inter text-white text-md text-center leading-relaxed">
                One app. Thousands of passions.<br />
                All you need is <span className="font-bold">15 minutes a day</span>.
              </p>
            </div>
            
            {/* App Store Buttons */}
            <div className="flex space-x-4 z-20">
              <button onClick={onGooglePlayClick}>
                <Image
                  src="/images/play-store.png"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  style={{
                    borderRadius: '6px',
                    border: '1px solid'
                  }}
                />
              </button>
              
              <button onClick={onAppStoreClick}>
                <Image
                  src="/images/apple-store.png"
                  alt="Coming soon on App Store"
                  width={120}
                  height={40}
                  style={{
                    borderRadius: '6px',
                    border: '1px solid'
                  }}
                />
              </button>
            </div>
          </div>
          
          {/* Phone Mockup - Sticky to Bottom */}
          <div className="flex justify-center items-baseline mt-[28px]">
            <Image
              src="/images/mobile-app-last.png"
              alt="Mobile App Screen"
              width={200}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/desktop-app-bg.png"
            alt="Desktop App Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center">
          {/* Left Content */}
          <div className="flex-1 pl-16">
            {/* Main Heading */}
            <div 
              className="mb-8"
              style={{
                width: '477px',
                height: '78px',
                position: 'absolute',
                top: '101.85px',
                left: '73px'
              }}
            >
              <h1 className="font-instrument-serif text-white text-5xl lg:text-6xl font-bold leading-tight">
                The Journey Starts Here
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="mt-32">
              <p className="font-inter text-white text-lg lg:text-xl leading-relaxed max-w-md">
                One app. Thousands of passions.<br />
                All you need is <span className="font-bold">15 minutes a day</span>.
              </p>
            </div>
            
            {/* App Store Buttons */}
            <div className="mt-12 flex space-x-6 z-20 relative">
              <button onClick={onGooglePlayClick}>
                <Image
                  src="/images/play-store.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={45}
                />
              </button>
              
              <button onClick={onAppStoreClick}>
                <Image
                  src="/images/apple-store.png"
                  alt="Coming soon on App Store"
                  width={140}
                  height={45}
                />
              </button>
            </div>
          </div>
          
          {/* Right Side - Desktop Mockup */}
          <div className="flex-1 flex justify-center items-center pr-16 mt-[70px]">
            <div className="relative">
              <Image
                src="/images/desktop-mobile-last.png"
                alt="Desktop App Screen"
                width={250}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
