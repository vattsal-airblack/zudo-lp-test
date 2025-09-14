import Image from 'next/image';

const ReviewCard = ({ review, isActive = false, index = 0, showFullContent = true }) => {
  return (
    <div 
      className="bg-white rounded-[10.92px] md:rounded-[21.83px] p-4 md:p-8 shadow-lg overflow-hidden"
      style={{
        height: showFullContent ? '163.75px' : '80px', // Fixed height, smaller for background cards
        width: '336.23px'
      }}
    >
      {/* User Profile Section */}
      <div className="flex items-center justify-between mb-3 md:mb-6">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Avatar */}
          <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${review.avatarColor}`}>
            <span className="text-white font-semibold text-sm md:text-lg">{review.initial}</span>
          </div>
          
          {/* User Name */}
          <h3 className="text-gray-800 font-inter font-medium text-sm md:text-lg">
            {review.name}
          </h3>
        </div>
        
        {/* Options Icon */}
        <div className="flex items-center">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            className="md:w-5 md:h-5"
          >
            <circle cx="8" cy="2" r="1.5" fill="#374151"/>
            <circle cx="8" cy="8" r="1.5" fill="#374151"/>
            <circle cx="8" cy="14" r="1.5" fill="#374151"/>
          </svg>
        </div>
      </div>

      {/* Rating and Date Section */}
      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6">
        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <svg 
              key={index}
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              className="md:w-4 md:h-4"
            >
              <path 
                d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" 
                fill="#10B981"
              />
            </svg>
          ))}
        </div>
        
        {/* Date */}
        <span className="text-gray-600 font-inter font-normal text-xs md:text-sm">
          {review.date}
        </span>
      </div>

      {/* Review Text Section - Only show if showFullContent is true */}
      {showFullContent && (
        <div className="text-gray-800 font-inter font-normal text-xs md:text-base leading-relaxed">
          <p className="line-clamp-4 overflow-hidden">
            {review.text}
          </p>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
