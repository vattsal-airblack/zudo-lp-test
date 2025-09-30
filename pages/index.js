import Head from 'next/head';
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
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Zudo - India's Largest Learning App for Creators & Builders | 1000+ Premium Courses</title>
        <meta name="title" content="Zudo - India's Largest Learning App for Creators & Builders | 1000+ Premium Courses" />
        <meta name="description" content="Join 10+ lakh learners on Zudo! Learn from real experts with 1000+ bite-sized courses on Instagram growth, YouTube earnings, home businesses & more. Download now!" />
        <meta name="keywords" content="online learning, creator courses, Instagram growth, YouTube earnings, home business, entrepreneurship, skill development, online education, creator economy, business courses, beauty courses, fashion courses, language learning" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Zudo - India's Largest Learning App for Creators & Builders" />
        <meta property="og:description" content="Join 10+ lakh learners on Zudo! Learn from real experts with 1000+ bite-sized courses on Instagram growth, YouTube earnings, home businesses & more." />
        <meta property="og:image" content="https://res.cloudinary.com/dtks0l86r/image/upload/v1755672449/zudo/app/category-page/user-image-1_zbscgk.png" />
        <meta property="og:url" content="https://zudoapp.com" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="Zudo - India's Largest Learning App for Creators & Builders" />
        <meta property="twitter:description" content="Join 10+ lakh learners on Zudo! Learn from real experts with 1000+ bite-sized courses on Instagram growth, YouTube earnings, home businesses & more." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dtks0l86r/image/upload/v1755672449/zudo/app/category-page/user-image-1_zbscgk.png" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Zudo" />
        <meta name="publisher" content="Zudo" />
        <meta name="copyright" content="Zudo" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        
        {/* App Store Links */}
        {/* <meta name="apple-itunes-app" content="app-id=com.zudo" /> */}
        <meta name="google-play-app" content="app-id=com.zudo" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://zudoapp.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "Zudo",
              "description": "India's largest learning app for creators and builders with 1000+ premium courses",
              "url": "https://zudoapp.com",
              "applicationCategory": "EducationApplication",
              "operatingSystem": ["Android", "iOS"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "1000000"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Zudo",
                "url": "https://zudoapp.com"
              }
            })
          }}
        />
        
        {/* Course Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Zudo Premium Courses",
              "description": "1000+ premium courses on Instagram growth, YouTube earnings, home businesses, beauty, fashion, and more",
              "provider": {
                "@type": "Organization",
                "name": "Zudo",
                "url": "https://zudoapp.com"
              },
              "courseMode": "online",
              "educationalLevel": "beginner",
              "inLanguage": "en-IN"
            })
          }}
        />
      </Head>
      
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
    </>
  );
}
