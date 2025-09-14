import React, { useState } from 'react';
import Image from 'next/image';

const FAQsSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ is open by default

  const faqs = [
    {
      question: "What is Zudo?",
      answer: "Zudo is a learning app focused on creators and microentrepreneurs, with courses in domains such as fashion, nutrition, beauty, digital, and so on."
    },
    {
      question: "Is Zudo free?",
      answer: "Zudo offers both free and premium content. You can access basic courses for free, while advanced courses and exclusive content are available with our premium subscription."
    },
    {
      question: "What is the refund policy?",
      answer: "We offer a 7-day money-back guarantee for all premium subscriptions. If you're not satisfied with your purchase, you can request a full refund within 7 days of your subscription."
    },
    {
      question: "Can I download Zudo on an iPhone?",
      answer: "Yes! Zudo is available on both iOS and Android devices. You can download it from the App Store for iPhone users and Google Play Store for Android users."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="relative w-full bg-black py-16">
      <div className="relative">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-center py-8">
          <div className="relative flex flex-col justify-center items-center w-full px-8">
            
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
                FAQs
              </h2>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-center py-16">
          <div className="relative flex items-center justify-center w-full max-w-4xl px-12">
            <div>
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
                  FAQs
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Content */}
      <div className="relative w-[90%] md:w-[80%] m-auto flex justify-center items-center py-8 md:py-16">
        <div className="w-full max-w-4xl px-4 md:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#16161F] border border-[#1E1E28] rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-[#1E1E28] transition-colors duration-200"
                >
                  <h3 
                    className={`font-inter text-base md:text-lg pr-4 ${
                      openFAQ === index ? 'font-bold' : 'font-semibold'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-white transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4 md:px-8 md:py-6 border-t border-[#1E1E28]">
                    <p className="text-[#DCDCDC] font-inter text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
