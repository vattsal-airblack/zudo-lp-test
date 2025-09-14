import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navigation = ({ 
  variant = 'default', // 'default', 'transparent', 'solid'
  showBorder = true,
  className = '',
  onLogoClick = null 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBackgroundStyle = () => {
    switch (variant) {
      case 'transparent':
        return 'bg-transparent';
      case 'solid':
        return 'bg-black/90';
      default:
        return isScrolled ? 'bg-black/80' : 'bg-black/44';
    }
  };

  const getBorderStyle = () => {
    if (!showBorder) return '';
    return 'border-b border-white/10';
  };

  return (
    <motion.nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        ${getBackgroundStyle()} 
        ${getBorderStyle()}
        backdrop-blur-[15px]
        transition-all duration-300 ease-in-out
        ${className}
      `}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative w-full h-[66px] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Content Container */}
        <div className="flex items-center justify-center w-full max-w-7xl">
          {/* Logo Container */}
          <motion.div
            className="flex items-center gap-[5.21px] cursor-pointer"
            onClick={onLogoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Logo - Using the exact SVG from Figma */}
            <div className="relative w-[83px] h-[31px]">
              <Image
                src="/images/zudo-logo.svg"
                alt="Zudo Logo"
                width={83}
                height={31}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Gradient Border Overlay */}
        {showBorder && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
