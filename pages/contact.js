import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import localFont from 'next/font/local';
import Navigation from '../components/Navigation';
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

export default function Contact() {
  const router = useRouter();
  
  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Contact Us - Zudo | Get in Touch with Our Team</title>
        <meta name="description" content="Contact Zudo team for support, feedback, or inquiries. Reach us via email, phone, or visit our office in Gurugram. We're here to help with your learning journey!" />
        <meta name="keywords" content="contact Zudo, customer support, help center, Zudo support, contact information, customer service" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us - Zudo" />
        <meta property="og:description" content="Contact Zudo team for support, feedback, or inquiries. We're here to help with your learning journey!" />
        <meta property="og:url" content="https://zudoapp.com/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="Contact Us - Zudo" />
        <meta property="twitter:description" content="Contact Zudo team for support, feedback, or inquiries. We're here to help with your learning journey!" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://zudoapp.com/contact" />
        
        {/* Additional Meta */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zudo" />
      </Head>
      
      <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-full bg-black text-white`}>
      {/* Navigation */}
      <Navigation 
        variant="default"
        showBorder={true}
        onLogoClick={handleLogoClick}
      />
      
      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-orange-400">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about Zudo? Want to share feedback? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Email Contact */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">Send us an email anytime</p>
                <a 
                  href="mailto:info@airblack.com"
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  info@airblack.com
                </a>
              </div>

              {/* Phone Contact */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Mon-Fri from 9am to 6pm</p>
                <a 
                  href="tel:+919756574602"
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  +91 97565 74602
                </a>
              </div>

              {/* Location */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 text-center md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-gray-300 text-sm">
                  571, Udyog Vihar<br />
                  Phase 1, Gurugram<br />
                  Haryana 122016, India
                </p>
              </div>
            </div>

            {/* App Download Section */}
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Download Zudo App</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the full Zudo experience on your mobile device. Join 10+ lakh learners who are already transforming their lives with our premium courses.
              </p>
              <button 
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.zudo', '_blank')}
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/images/play-store.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="w-[150px] h-[50px] sm:w-[170px] sm:h-[56px]"
                />
              </button>
            </div>

            {/* Additional Information */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">We're Here to Help!</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Whether you have questions about our courses, need technical support, or want to share feedback, 
                our team is ready to assist you. We typically respond to emails within 24 hours and are available 
                for phone calls during business hours.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
      </div>
    </>
  );
}
