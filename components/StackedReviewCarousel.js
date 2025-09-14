import { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

const StackedReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dummy review data
  const reviews = [
    {
      id: 1,
      name: "Pami shetty",
      initial: "P",
      avatarColor: "bg-red-500",
      date: "13 February 2025",
      text: "Dear Airblack, My name is Pramila Shetty and i an writing to express my gratitude for introducing me to the Zudo app. I must say the app seems to be a promising platform for all things related to beauty and makeup. From tips and tutorials to product reviews. I believe it will be a great learning experience and fun way to stay updated on the latest trends and techniques in the beauty industry. Thank you once again for introducing me to this wonderful app."
    },
    {
      id: 2,
      name: "Pooja Pradhan",
      initial: "P",
      avatarColor: "bg-blue-500",
      date: "10 February 2025",
      text: "I've been using Zudo for a few weeks now and I'm absolutely amazed by the quality of content. The beauty tutorials are so detailed and easy to follow. The instructors are knowledgeable and the app interface is user-friendly. Highly recommend to anyone interested in beauty and makeup!"
    },
    {
      id: 3,
      name: "Darshit Kumawat",
      initial: "D",
      avatarColor: "bg-green-500",
      date: "8 February 2025",
      text: "Zudo has completely transformed my understanding of beauty and makeup. The courses are comprehensive and the community is supportive. I've learned so many new techniques that I never knew existed. This app is a game-changer for anyone passionate about beauty!"
    },
    {
      id: 4,
      name: "Priya Sharma",
      initial: "P",
      avatarColor: "bg-purple-500",
      date: "5 February 2025",
      text: "The variety of courses on Zudo is incredible! From basic makeup techniques to advanced beauty tips, there's something for everyone. The instructors are professional and the content is always up-to-date with the latest trends. Love this platform!"
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      initial: "R",
      avatarColor: "bg-orange-500",
      date: "2 February 2025",
      text: "As someone new to the beauty industry, Zudo has been an excellent learning platform. The step-by-step tutorials are easy to understand and the quality of instruction is top-notch. I've gained so much confidence in my skills!"
    },
    {
      id: 6,
      name: "Sneha Patel",
      initial: "S",
      avatarColor: "bg-pink-500",
      date: "30 January 2025",
      text: "Zudo's beauty courses are simply outstanding! The instructors are experts in their field and the content is both educational and entertaining. I've learned so many new techniques and my makeup skills have improved dramatically. Highly recommend!"
    }
  ];

  // Animation state
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextReview, setNextReview] = useState(null);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % reviews.length;
      setNextReview(reviews[nextIndex]);
      setIsAnimating(true);
      
      // Complete the transition
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setIsAnimating(false);
        setNextReview(null);
      }, 800);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, reviews.length]);

  // Get visible reviews (current + next 2-3)
  const getVisibleReviews = () => {
    const visibleReviews = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % reviews.length;
      visibleReviews.push({
        ...reviews[index],
        index: i,
        isActive: i === 0
      });
    }
    return visibleReviews;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Mobile Layout */}
      <div className="md:hidden relative mt-16" style={{ width: '330px', height: '173.36px' }}>
        {/* Incoming Card - Shows next review content during animation */}
        {isAnimating && nextReview && (
          <div
            className="absolute transition-all duration-800 ease-out"
            style={{
              top: '0px',
              left: '0px',
              zIndex: 5, // Lower z-index so we can see the current card sliding behind
              opacity: 1,
              transform: 'scale(1)',
              transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <div 
              className="bg-white rounded-[10.92px] p-4 shadow-lg overflow-hidden"
              style={{
                height: '173.36px',
                width: '330px'
              }}
            >
              {/* User Profile Section */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${nextReview.avatarColor}`}>
                    <span className="text-white font-semibold text-sm">{nextReview.initial}</span>
                  </div>
                  
                  {/* User Name */}
                  <h3 className="text-gray-800 font-inter font-medium text-sm">
                    {nextReview.name}
                  </h3>
                </div>
                
                {/* Options Icon */}
                <div className="flex items-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="2" r="1.5" fill="#374151"/>
                    <circle cx="8" cy="8" r="1.5" fill="#374151"/>
                    <circle cx="8" cy="14" r="1.5" fill="#374151"/>
                  </svg>
                </div>
              </div>

              {/* Rating and Date Section */}
              <div className="flex items-center gap-3 mb-3">
                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" fill="#10B981"/>
                    </svg>
                  ))}
                </div>
                
                {/* Date */}
                <span className="text-gray-600 font-inter font-normal text-xs">
                  {nextReview.date}
                </span>
              </div>

              {/* Review Text Section */}
              <div className="text-gray-800 font-inter font-normal text-xs leading-relaxed">
                <p className="line-clamp-4 overflow-hidden">
                  {nextReview.text}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Background Cards - Stacked behind main card, showing top portions */}
        {visibleReviews.slice(1, 3).map((review, idx) => {
          const cardWidth = 330 * (1 - (idx + 1) * 0.1);
          const offsetX = (330 - cardWidth) / 2; // Center the card
          return (
            <div
              key={`bg-${review.id}-${idx}-${currentIndex}`}
              className="absolute transition-all duration-800 ease-out"
              style={{
                top: `${(idx + 1) * -40}px`, // Keep background cards in position
                left: `${offsetX}px`, // Center the card horizontally
                zIndex: 2 - idx, // Lower z-index for background
                opacity: 0.8 - (idx * 0.2),
                transform: 'scale(0.95)',
                transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
            <div 
              className="bg-white rounded-[10.92px] p-4 shadow-lg overflow-hidden"
              style={{
                height: '173.36px', // Fixed height card (150.75 * 1.15)
                width: `${330 * (1 - (idx + 1) * 0.1)}px` // 10% width reduction for each card
              }}
            >
              {/* Only show user profile section for background cards */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${review.avatarColor}`}>
                    <span className="text-white font-semibold text-sm">{review.initial}</span>
                  </div>
                  
                  {/* User Name */}
                  <h3 className="text-gray-800 font-inter font-medium text-sm">
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
                  >
                    <circle cx="8" cy="2" r="1.5" fill="#374151"/>
                    <circle cx="8" cy="8" r="1.5" fill="#374151"/>
                    <circle cx="8" cy="14" r="1.5" fill="#374151"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          );
        })}

        {/* Main Active Card - Slides down and goes behind */}
        <div
          key={`main-${visibleReviews[0].id}-${currentIndex}`}
          className="absolute transition-all duration-800 ease-out"
          style={{
            top: isAnimating ? '40px' : '0px', // Slides down during animation
            left: '0px',
            zIndex: isAnimating ? 1 : 10, // Goes behind during animation
            opacity: isAnimating ? 0.7 : 1, // Keep more visible so we can see it sliding
            transform: isAnimating ? 'scale(0.95)' : 'scale(1)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          <div 
            className="bg-white rounded-[10.92px] p-4 shadow-lg overflow-hidden"
            style={{
              height: '173.36px', // Fixed height card (150.75 * 1.15)
              width: '330px' // Fixed width card
            }}
          >
            {/* User Profile Section */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${visibleReviews[0].avatarColor}`}>
                  <span className="text-white font-semibold text-sm">{visibleReviews[0].initial}</span>
                </div>
                
                {/* User Name */}
                <h3 className="text-gray-800 font-inter font-medium text-sm">
                  {visibleReviews[0].name}
                </h3>
              </div>
              
              {/* Options Icon */}
              <div className="flex items-center">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none"
                >
                  <circle cx="8" cy="2" r="1.5" fill="#374151"/>
                  <circle cx="8" cy="8" r="1.5" fill="#374151"/>
                  <circle cx="8" cy="14" r="1.5" fill="#374151"/>
                </svg>
              </div>
            </div>

            {/* Rating and Date Section */}
            <div className="flex items-center gap-3 mb-3">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <svg 
                    key={index}
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12" 
                    fill="none"
                  >
                    <path 
                      d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" 
                      fill="#10B981"
                    />
                  </svg>
                ))}
              </div>
              
              {/* Date */}
              <span className="text-gray-600 font-inter font-normal text-xs">
                {visibleReviews[0].date}
              </span>
            </div>

            {/* Review Text Section */}
            <div className="text-gray-800 font-inter font-normal text-xs leading-relaxed">
              <p className="line-clamp-4 overflow-hidden">
                {visibleReviews[0].text}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative" style={{ width: '672.47px', height: '327.5px' }}>
        {/* Incoming Card - Shows next review content during animation */}
        {isAnimating && nextReview && (
          <div
            className="absolute transition-all duration-800 ease-out"
            style={{
              top: '0px',
              left: '0px',
              zIndex: 5, // Lower z-index so we can see the current card sliding behind
              opacity: 1,
              transform: 'scale(1)',
              transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <div 
              className="bg-white rounded-[21.83px] p-8 shadow-lg overflow-hidden"
              style={{
                height: '327.5px',
                width: '672.47px'
              }}
            >
              {/* User Profile Section */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${nextReview.avatarColor}`}>
                    <span className="text-white font-semibold text-lg">{nextReview.initial}</span>
                  </div>
                  
                  {/* User Name */}
                  <h3 className="text-gray-800 font-inter font-medium text-lg">
                    {nextReview.name}
                  </h3>
                </div>
                
                {/* Options Icon */}
                <div className="flex items-center">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="2" r="1.5" fill="#374151"/>
                    <circle cx="8" cy="8" r="1.5" fill="#374151"/>
                    <circle cx="8" cy="14" r="1.5" fill="#374151"/>
                  </svg>
                </div>
              </div>

              {/* Rating and Date Section */}
              <div className="flex items-center gap-4 mb-6">
                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} width="16" height="16" viewBox="0 0 12 12" fill="none">
                      <path d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" fill="#10B981"/>
                    </svg>
                  ))}
                </div>
                
                {/* Date */}
                <span className="text-gray-600 font-inter font-normal text-sm">
                  {nextReview.date}
                </span>
              </div>

              {/* Review Text Section */}
              <div className="text-gray-800 font-inter font-normal text-base leading-relaxed">
                <p className="line-clamp-4 overflow-hidden">
                  {nextReview.text}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Background Cards - Stacked behind main card, showing top portions */}
        {visibleReviews.slice(1, 3).map((review, idx) => {
          const cardWidth = 672.47 * (1 - (idx + 1) * 0.1);
          const offsetX = (672.47 - cardWidth) / 2; // Center the card
          return (
            <div
              key={`desktop-bg-${review.id}-${idx}-${currentIndex}`}
              className="absolute transition-all duration-800 ease-out"
              style={{
                top: `${(idx + 1) * -16}px`, // Keep background cards in position
                left: `${offsetX}px`, // Center the card horizontally
                zIndex: 2 - idx, // Lower z-index for background
                opacity: 0.8 - (idx * 0.2),
                transform: 'scale(0.95)',
                transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
            <div 
              className="bg-white rounded-[21.83px] p-8 shadow-lg overflow-hidden"
              style={{
                height: '327.5px', // Full height card
                width: `${672.47 * (1 - (idx + 1) * 0.1)}px` // 10% width reduction for each card
              }}
            >
              {/* Only show user profile section for background cards */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${review.avatarColor}`}>
                    <span className="text-white font-semibold text-lg">{review.initial}</span>
                  </div>
                  
                  {/* User Name */}
                  <h3 className="text-gray-800 font-inter font-medium text-lg">
                    {review.name}
                  </h3>
                </div>
                
                {/* Options Icon */}
                <div className="flex items-center">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 16 16" 
                    fill="none"
                  >
                    <circle cx="8" cy="2" r="1.5" fill="#374151"/>
                    <circle cx="8" cy="8" r="1.5" fill="#374151"/>
                    <circle cx="8" cy="14" r="1.5" fill="#374151"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          );
        })}

        {/* Main Active Card - Slides down and goes behind */}
        <div
          key={`desktop-main-${visibleReviews[0].id}-${currentIndex}`}
          className="absolute transition-all duration-800 ease-out"
          style={{
            top: isAnimating ? '16px' : '0px', // Slides down during animation
            left: '0px',
            zIndex: isAnimating ? 1 : 10, // Goes behind during animation
            opacity: isAnimating ? 0.7 : 1, // Keep more visible so we can see it sliding
            transform: isAnimating ? 'scale(0.95)' : 'scale(1)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          <div 
            className="bg-white rounded-[21.83px] p-8 shadow-lg overflow-hidden"
            style={{
              height: '327.5px',
              width: '672.47px'
            }}
          >
            {/* User Profile Section */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${visibleReviews[0].avatarColor}`}>
                  <span className="text-white font-semibold text-lg">{visibleReviews[0].initial}</span>
                </div>
                
                {/* User Name */}
                <h3 className="text-gray-800 font-inter font-medium text-lg">
                  {visibleReviews[0].name}
                </h3>
              </div>
              
              {/* Options Icon */}
              <div className="flex items-center">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 16 16" 
                  fill="none"
                >
                  <circle cx="8" cy="2" r="1.5" fill="#374151"/>
                  <circle cx="8" cy="8" r="1.5" fill="#374151"/>
                  <circle cx="8" cy="14" r="1.5" fill="#374151"/>
                </svg>
              </div>
            </div>

            {/* Rating and Date Section */}
            <div className="flex items-center gap-4 mb-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <svg 
                    key={index}
                    width="16" 
                    height="16" 
                    viewBox="0 0 12 12" 
                    fill="none"
                  >
                    <path 
                      d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" 
                      fill="#10B981"
                    />
                  </svg>
                ))}
              </div>
              
              {/* Date */}
              <span className="text-gray-600 font-inter font-normal text-sm">
                {visibleReviews[0].date}
              </span>
            </div>

            {/* Review Text Section */}
            <div className="text-gray-800 font-inter font-normal text-base leading-relaxed">
              <p className="line-clamp-4 overflow-hidden">
                {visibleReviews[0].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedReviewCarousel;
