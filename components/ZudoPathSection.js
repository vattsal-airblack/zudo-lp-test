"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * ZudoPathSection.jsx
 *
 * Single-file timeline:
 * - static bullets for all cards (positioned relative to container)
 * - pinned active bullet (fixed at viewport center) when a card is active
 * - contiguous orange fill that grows from first bullet to current progress point
 * - progress for card i runs from trigger[i] (when its center hits viewport center)
 *   to trigger[i+1] (when next card center hits viewport center) — prevents overlap
 *
 * Tweak constants below if you want different sensitivity/spacing.
 */

const ORANGE = "rgba(255,90,31,1)";
const GRAY = "#6B7280";
const BULLET_SIZE = 14; // px
const ACTIVATION_SPREAD = 0; // not used; logic is trigger-based
const COLUMN_WIDTH = 40; // px (timeline column)
const COLUMN_LEFT_MOBILE = 22; // px (timeline column left on mobile)
const COLUMN_CENTER_MOBILE = COLUMN_LEFT_MOBILE + COLUMN_WIDTH / 2; // center X on mobile
// Bottom trim for progress line (in px). Tweak as needed.
const MOBILE_LINE_BOTTOM_TRIM_PX = 350; // Reduce height from bottom on mobile
const DESKTOP_LINE_BOTTOM_TRIM_PX = 330; // Reduce height from bottom on desktop

// Custom bullet positioning offsets (in px). Tweak as needed.
const MOBILE_BULLET_OFFSET_X = 0; // No offset needed for mobile
const DESKTOP_BULLET_OFFSET_X = -10; // Slight left offset for desktop to align perfectly

export default function ZudoPathSection() {
  const cards = [
    {
      id: 1,
      title: "Watch Recorded Modules",
      description: "Short, sharp lessons taught by local experts in Hindi & English.",
      mobileImage:
        "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597473/zudo/website/Journey-Graphic-1-Mobile_ivhbu9.png",
      desktopImage:
        "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597474/zudo/website/Journey-Graphic-1-Desktop_gnl4hg.png",
    },
    {
      id: 2,
      title: "Take In-App Interactive Quizzes",
      description: "Built into the course to test your progress and keep you engaged.",
      mobileImage:
        "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597473/zudo/website/Journey-Graphic-2-Mobile_ctf5mx.png",
      desktopImage:
        "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597474/zudo/website/Journey-Graphic-2-Desktop_p3mtw0.png",
    },
    {
      id: 3,
      title: "Attend Group Live Classes",
      description: "Join fellow learners to connect with mentors in real time.",
      mobileImage:
        "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597473/zudo/website/Journey-Graphic-3-Mobile_lr96ty.png",
      desktopImage:
        "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597475/zudo/website/Journey-Graphic-3-Desktop_j2ulty.png",
    },
    {
      id: 4,
      title: "Unlock Unlimited Learnings with 1:1 chat with experts",
      description:
        "Keep learning deeper with your mentors and get all your queries answered.",
      mobileImage:
        "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597473/zudo/website/Journey-Graphic-4-Mobile_ezcaf7.png",
      desktopImage:
        "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597646/zudo/website/Journey-Graphic-4-Desktop_ckuumi.png",
    },
    {
      id: 5,
      title: "Take the Final Exam",
      description: "Prove your knowledge in a course-end assessment.",
      mobileImage:
        "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597473/zudo/website/Journey-Graphic-5-Mobile_phgwel.png",
      desktopImage:
        "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597478/zudo/website/Journey-Graphic-5-Desktop_ftspoc.png",
    },
    {
      id: 6,
      title: "Get Certified",
      description: "Unlock your Zudo Certificate, every time you complete a course.",
      mobileImage:
        "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597474/zudo/website/Journey-Graphic-6-Mobile_jb01tr.png",
      desktopImage:
        "https://res.cloudinary.com/dtks0l86r/image/upload/v1757597479/zudo/website/Journey-Graphic-6-Desktop_htkbq0.png",
    },
  ];

  // refs & state
  const containerRef = useRef(null);
  const cardRefs = useRef([]); // each card DOM node
  const [bulletOffsetsPx, setBulletOffsetsPx] = useState([]); // relative to container top
  const [bulletCentersOffsetPx, setBulletCentersOffsetPx] = useState([]); // center offsets relative to container top
  const [bulletAbsY, setBulletAbsY] = useState([]); // absolute Y positions of centers
  const [triggersY, setTriggersY] = useState([]); // scrollY triggers when card center aligns to viewport center
  const [fillHeightPx, setFillHeightPx] = useState(0); // computed fill height inside container
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [containerTopAbs, setContainerTopAbs] = useState(0);
  const [lineTopPx, setLineTopPx] = useState(0);
  const [lineMaxHeightPx, setLineMaxHeightPx] = useState(0);

  // Utility: clamp
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  // Utility: robust viewport center offset (accounts for iOS URL bar and safe areas)
  const getViewportCenterOffset = () => {
    const vv = typeof window !== "undefined" ? window.visualViewport : null;
    if (vv) {
      return (vv.offsetTop || 0) + vv.height / 2;
    }
    return window.innerHeight / 2;
  };

  // compute positions (call on mount and resize)
  const computePositions = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + containerRect.top;
    setContainerTopAbs(containerTop);

    const newBulletOffsets = [];
    const newBulletCentersOffset = [];
    const newBulletAbs = [];
    const newCentersAbs = [];

    for (let i = 0; i < cards.length; i++) {
      const el = cardRefs.current[i];
      if (!el) {
        newBulletOffsets.push(0);
        newBulletCentersOffset.push(0);
        newBulletAbs.push(0);
        continue;
      }
      const r = el.getBoundingClientRect();
      // Bullet should align with the card start (title top)
      const startAbs = window.scrollY + r.top;
      const centerAbs = startAbs + r.height / 2;
      const offsetPx = startAbs - containerTop;
      const centerOffsetPx = centerAbs - containerTop;
      newBulletOffsets.push(offsetPx);
      newBulletCentersOffset.push(centerOffsetPx);
      newBulletAbs.push(startAbs);
      newCentersAbs.push(centerAbs);
    }

    setBulletOffsetsPx(newBulletOffsets);
    setBulletCentersOffsetPx(newBulletCentersOffset);
    setBulletAbsY(newBulletAbs);

    // triggerY: the page scrollY value where this card's center lines up with viewport center
    const viewportCenterOffset = getViewportCenterOffset();
    // Activate strictly when the card center reaches the (dynamic) viewport center
    const newTriggers = newCentersAbs.map((absCenter) => absCenter - viewportCenterOffset);
    setTriggersY(newTriggers);

    // Compute line bounds so it never leaks beyond first/last bullets
    if (newBulletAbs.length > 0) {
      const firstAbs = newBulletAbs[0];
      const lastAbs = newBulletAbs[newBulletAbs.length - 1];
      const startAbs = firstAbs - BULLET_SIZE / 2;
      const endAbsRaw = lastAbs + BULLET_SIZE / 2;
      const endAbs = endAbsRaw + (window.innerWidth < 768 ? MOBILE_LINE_BOTTOM_TRIM_PX : DESKTOP_LINE_BOTTOM_TRIM_PX);
      const topPx = startAbs - containerTop;
      const maxH = Math.max(0, endAbs - startAbs);
      setLineTopPx(topPx);
      setLineMaxHeightPx(maxH);
    }
  }, [cards.length]);

  // update mobile flag and recompute on resize
  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
      computePositions();
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [computePositions]);

  // initial compute after mount
  useEffect(() => {
    computePositions();
    // recalc a bit later in case images load and change layout
    const t = setTimeout(() => computePositions(), 300);
    const t2 = setTimeout(() => computePositions(), 800);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [computePositions]);

  // main scroll logic powered by GSAP ScrollTrigger for precision
  useEffect(() => {
    if (!containerRef.current || triggersY.length === 0 || bulletAbsY.length === 0) return;
    // Fallback to requestAnimationFrame based scroll handling (SSR/Next friendly)
    let rafId = null;

    const update = () => {
      rafId = requestAnimationFrame(() => {
        const vv = window.visualViewport;
        const scrollY = (vv ? vv.pageTop : window.scrollY);

        // Check if we're completely past the section
        const containerBottom = containerTopAbs + (containerRef.current?.offsetHeight || 0);
        if (scrollY > containerBottom + 200) { // 200px buffer
          setActiveIndex(null);
          setFillHeightPx(0);
          return;
        }

        // Determine active interval by triggers
        let idx = null;
        for (let i = 0; i < triggersY.length; i++) {
          const start = triggersY[i];
          const end = triggersY[i + 1] !== undefined ? triggersY[i + 1] : start + (vv ? vv.height : window.innerHeight);
          if (scrollY >= start && scrollY < end) { idx = i; break; }
        }
        if (idx === null && scrollY >= triggersY[triggersY.length - 1]) {
          idx = triggersY.length - 1;
        }

        if (idx === null) {
          // Check if we're past the last card (section ended)
          const lastTrigger = triggersY[triggersY.length - 1];
          const viewportHeight = vv ? vv.height : window.innerHeight;
          const isPastLastCard = scrollY > lastTrigger + viewportHeight;
          
          // Also check if we're past the container bottom
          const containerBottom = containerTopAbs + (containerRef.current?.offsetHeight || 0);
          const isPastContainer = scrollY > containerBottom;
          
          if (isPastLastCard || isPastContainer) {
            // Section ended, hide everything
            setActiveIndex(null);
            setFillHeightPx(0);
          } else {
            // No card active but still in section
            setActiveIndex(null);
            setFillHeightPx(0);
          }
          return;
        }

        const startY = triggersY[idx];
        const endY = triggersY[idx + 1] !== undefined ? triggersY[idx + 1] : startY + (vv ? vv.height : window.innerHeight);
        const denom = endY - startY || 1;
        const rawProgress = clamp((scrollY - startY) / denom, 0, 1);

        // Use bullet offsets (card starts) to match bullet positioning exactly
        const currentBulletOffset = bulletOffsetsPx[idx];
        const nextBulletOffset = bulletOffsetsPx[idx + 1] !== undefined ? bulletOffsetsPx[idx + 1] : currentBulletOffset + (cardRefs.current[idx]?.offsetHeight || window.innerHeight * 0.6);
        
        // Progress should grow to reach the fixed bullet position at viewport center
        // The fixed bullet is always at the viewport center, so progress should grow to that point
        let fillEndOffset;
        
        // Calculate where the fixed bullet should be positioned (viewport center relative to container)
        const viewportCenter = window.innerHeight / 2;
        const fixedBulletPosition = scrollY + viewportCenter - containerTopAbs;
        
        // Progress should always end at the fixed bullet position
        // This ensures the orange line always reaches the fixed bullet
        fillEndOffset = fixedBulletPosition;

        const firstActive = scrollY >= triggersY[0];
        // Use the same offset-based calculation as line bounds
        const lineStartOffset = bulletOffsetsPx[0] - BULLET_SIZE / 2;
        const rawLineEndOffset = bulletOffsetsPx[bulletOffsetsPx.length - 1] + BULLET_SIZE / 2;
        const lineEndOffset = rawLineEndOffset + (window.innerWidth < 768 ? MOBILE_LINE_BOTTOM_TRIM_PX : DESKTOP_LINE_BOTTOM_TRIM_PX);
        const fillEndOffsetClamped = Math.min(fillEndOffset, lineEndOffset);
        const newFillHeight = firstActive ? Math.max(0, fillEndOffsetClamped - lineStartOffset) : 0;


        // Check if progress has reached the end of the timeline
        const progressReachedEnd = fillEndOffsetClamped >= lineEndOffset;
        
        if (progressReachedEnd) {
          // Progress reached the end, hide the bullet but keep progress bar orange
          setActiveIndex(null);
          setFillHeightPx(newFillHeight); // Keep the progress bar orange
        } else {
          // Normal operation
          setActiveIndex(idx);
          setFillHeightPx(newFillHeight);
        }
        
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", update);
    };
  }, [triggersY, bulletAbsY, bulletCentersOffsetPx, containerTopAbs]);

  // Recompute when DOM content (like images) load: attach load listeners to images inside cards
  useEffect(() => {
    const imgs = containerRef.current ? containerRef.current.querySelectorAll("img") : [];
    let loadedCount = 0;
    const onImgLoad = () => {
      loadedCount++;
      // recompute once a few images loaded (for safety)
      if (loadedCount >= 1) computePositions();
    };
    imgs.forEach((img) => {
      img.addEventListener("load", onImgLoad);
    });
    return () => imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
  }, [computePositions]);

  // helper to set card refs (for map)
  const setCardRef = (el, i) => {
    cardRefs.current[i] = el;
  };

  // compute container-relative top of first bullet for absolute fill positioning
  const firstBulletOffset = bulletOffsetsPx[0] || 0;

  return (
    <section
      className="relative w-full py-16 overflow-visible rounded-t-3xl border border-[#FB2E75] border-opacity-20 border-b-0"
      style={{
        background: "linear-gradient(180deg, rgba(251, 46, 117, 0.15) 0%, rgba(251, 46, 117, 0) 100%)",
      }}
    >
       <div className="relative">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-center pb-20">
          <div className="relative flex flex-col justify-start items-start w-full px-8">
            <div className="w-full">
              <p className="text-[#777777] text-[22px] font-inter font-normal">
               Follow the
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
                Zudo Path
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
                  Follw the
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
                  Zudo Path
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main container that holds timeline column + cards */}
      <div ref={containerRef} className="max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* Timeline column: absolute left on mobile, centered on desktop */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{
            left: isMobile ? 28 : "50%",
            transform: isMobile ? "none" : "translateX(-50%)",
            width: 48,
            // keep it above content for bullets
            zIndex: 10,
          }}
        >
          {/* gray base line (full) */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: 6,
              top: lineTopPx,
              height: lineMaxHeightPx,
              background: GRAY,
              borderRadius: 4,
            }}
          />

          {/* orange fill element (animated height) */}
          <motion.div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: 6,
              top: lineTopPx,
              height: Math.min(fillHeightPx, lineMaxHeightPx), // clamp to line
              background: ORANGE,
              transformOrigin: "top",
              borderRadius: 4,
            }}
            animate={{ height: Math.min(fillHeightPx, lineMaxHeightPx) }}
            transition={{ type: "spring", stiffness: 120, damping: 24 }}
          />

          {/* Static bullets for all cards (positioned relative to container) */}
          {bulletOffsetsPx.map((offset, idx) => {
            // if active card, keep static bullet invisible to show pinned fixed bullet instead
            const isActiveStatic = idx === activeIndex;
            const isCompleted = activeIndex !== null && idx < activeIndex; // bullets before active are completed
            const isFirst = idx === 0 && activeIndex !== null && activeIndex >= 0; // first bullet turns orange only after activation begins
            const topPx = offset - BULLET_SIZE / 2;
            
            // Determine bullet color: completed and active bullets are orange. First bullet becomes orange only when activated
            const shouldBeOrange = isCompleted || isActiveStatic || isFirst;
            
            // Hide bullets when we're past the last card (section ends) or when they're not needed
            const isPastLastCard = activeIndex !== null && activeIndex >= bulletOffsetsPx.length - 1 && idx > activeIndex;
            const shouldHide = (activeIndex !== null && !shouldBeOrange) || isPastLastCard;

            
            if (shouldHide) return null;
            
            return (
              <div
                key={`static-bullet-${idx}`}
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: topPx,
                  width: BULLET_SIZE,
                  height: BULLET_SIZE,
                  borderRadius: BULLET_SIZE,
                  border: `2px solid ${shouldBeOrange ? ORANGE : "#ffffff"}`,
                  background: shouldBeOrange ? ORANGE : "#ffffff",
                  boxShadow: shouldBeOrange ? `0 0 20px rgba(255,90,31,0.6)` : "none",
                  opacity: isActiveStatic ? 0 : 1, // hide only the active bullet to show fixed one
                  pointerEvents: "none",
                }}
              />
            );
          })}
      </div>

        {/* Pinned/fixed bullet at viewport center (only shown when a card is active) */}
        <motion.div
          aria-hidden
          style={{
            position: "fixed",
            left: isMobile 
              ? COLUMN_CENTER_MOBILE + MOBILE_BULLET_OFFSET_X
              : `calc(50% + ${DESKTOP_BULLET_OFFSET_X}px)`,
            transform: "translate(-50%, -50%)",
            top: "50%",
            width: BULLET_SIZE + 6,
            height: BULLET_SIZE + 6,
            borderRadius: 9999,
            zIndex: 40,
            pointerEvents: "none",
            display: activeIndex === null ? "none" : "block",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: activeIndex === null ? 0.8 : 1.12,
            opacity: activeIndex === null ? 0 : 1,
            backgroundColor: activeIndex === null ? "#fff" : ORANGE,
            boxShadow: activeIndex === null ? "none" : `0 0 20px rgba(255,90,31,0.6)`,
            border: `3px solid ${activeIndex === null ? "#fff" : ORANGE}`,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />

         {/* Cards list */}
         <div className="relative">
           {cards.map((card, i) => (
              <div 
                key={card.id} 
               ref={(el) => setCardRef(el, i)}
               className={`${isMobile ? 'mb-16 last:mb-0' : 'mb-24 last:mb-0'} relative`}
             >
               {/* Card Content */}
               <div className={isMobile ? "ml-12" : "flex items-start justify-center gap-8"}>
                 {isMobile ? (
                   // Mobile Layout
                   <>
                  <h3 
                    className="mb-3 font-inter font-bold"
                    style={{
                      background: 'linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: '18px',
                      lineHeight: '150%',
                      letterSpacing: '-2%'
                    }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-[16px] mb-6">
                    {card.description}
                  </p>
                  
                  {/* Visual Element */}
                  <div className="w-[308px] h-[250px] rounded-xl border border-[#FB2E75] border-opacity-20 overflow-hidden">
                    <Image
                      src={card.mobileImage}
                      alt={card.title}
                      width={308}
                      height={250}
                      className="w-full h-full object-cover"
                         priority={i < 2}
                    />
                  </div>
                   </>
                 ) : (
                   // Desktop Layout
                   <>
                  {/* Left Side - Title */}
                  <div className="w-1/2 pr-8 text-right">
                    <h3 
                      className="font-inter font-bold"
                      style={{
                        background: 'linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '28px',
                        lineHeight: '150%',
                        letterSpacing: '-2%',
                        textAlign: 'right'
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  
                  {/* Right Side - Description and Image */}
                  <div className="w-1/2 pl-8">
                    <p className="text-gray-300 text-[22px] mb-6">
                      {card.description}
                    </p>
                    
                    {/* Visual Element */}
                    <div className="w-[402.5px] h-[250px] rounded-xl border border-[#FB2E75] border-opacity-20 overflow-hidden">
                      <Image
                        src={card.desktopImage}
                        alt={card.title}
                        width={402.5}
                        height={250}
                        className="w-full h-full object-cover"
                           priority={i < 2}
                      />
                    </div>
                  </div>
                   </>
                 )}
                </div>
              </div>
            ))}
        </div>
      </div>
      
      {/* bottom gradient */}
      <div
        className="absolute left-0 right-0 bottom-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(251,46,117,0.15) 0%, rgba(251,46,117,0) 100%)" }}
      />
    </section>
  );
}
