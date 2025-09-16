const PlayStoreRating = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-4 mt-8">
      {/* Stars */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <svg 
            key={index}
            width="21.22" 
            height="20.18" 
            viewBox="0 0 22 22" 
            fill="none" 
            className="w-[40px] h-[40px] md:w-[48.43px] md:h-[43.35px]"
          >
            <path 
              d="M11.1512 0.974121L8.23885 8.11259L0.542694 8.68267L6.44184 13.6647L4.59526 21.1502L11.1512 17.0852M11.1512 0.974121L14.0636 8.11259L21.7598 8.68267L15.8607 13.6647L17.7072 21.1502L11.1512 17.0852" 
              fill="#FF5A1F"
            />
          </svg>
        ))}
      </div>
      
      {/* Rating Text */}
      <p 
        className="text-white font-inter font-bold text-center text-md md:text-[24px]"
        // style={{
        //   fontSize: '18.09px',
        //   lineHeight: '100%',
        //   letterSpacing: '0%'
        // }}
      >
        4.5/5 rated on Playstore
      </p>
    </div>
  );
};

export default PlayStoreRating;
