import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import PhoneMockupSection from '../components/PhoneMockupSection';
import ZudoPathSection from '../components/ZudoPathSection';
import CoursesHeaderSection from '../components/CoursesHeaderSection';
import RealExperts from '../components/RealExperts';
import ReviewsSection from '../components/ReviewsSection';
import AppDownloadSection from '../components/AppDownloadSection';
import localFont from "next/font/local";
import FAQsSection from '../components/FAQsSection';
import Footer from '../components/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const handleLogoClick = () => {
    // Scroll to top or navigate to home
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAppStoreClick = () => {
    // Show coming soon modal or notification
    alert('App Store version coming soon!');
  };

  const handleGooglePlayClick = () => {
    // Open Google Play Store
    window.open('https://play.google.com/store/apps/details?id=com.zudo', '_blank');
  };

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen  w-full bg-black text-white`}>
      {/* Navigation Component */}
      <Navigation 
        variant="default"
        showBorder={true}
        onLogoClick={handleLogoClick}
      />
      
      {/* Hero Section */}
      <HeroSection 
        onAppStoreClick={handleAppStoreClick}
        onGooglePlayClick={handleGooglePlayClick}
        showAppStore={true}
        showGooglePlay={true}
      />
      
      {/* Phone Mockup Section */}
      <PhoneMockupSection />
      
      
      {/* Zudo Path Section */}
      <ZudoPathSection />
      
      {/* Courses Header Section */}
      <CoursesHeaderSection />
      
      {/* Real Experts Section */}
      <RealExperts />
      
      {/* Reviews Section */}
      <ReviewsSection />
      
      {/* App Download Section */}
      <AppDownloadSection 
        onAppStoreClick={handleAppStoreClick}
        onGooglePlayClick={handleGooglePlayClick}
      />

      {/* FAQs Section */}
     <FAQsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
