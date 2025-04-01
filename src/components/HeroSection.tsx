'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Types for the HeroSection component
interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  // State for animation
  const [isVisible, setIsVisible] = useState(false);

  // Effect to trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      dir="rtl" 
      className={`relative overflow-hidden bg-white ${className}`}
      aria-labelledby="hero-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4ECDC4]/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[90vh] lg:min-h-[80vh] py-12">
          {/* Text content */}
          <div 
            className={`z-10 transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <h1 
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            >
              חנות ספרים מוביל בישראל
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
              חווית לקוח מושלמת בכל ביקור
            </p>
            
            <div className="mb-8 h-1 w-24 bg-[#4ECDC4]"></div>
            
            <p className="text-gray-600 mb-8 max-w-md">
              אנחנו חנות ספרים מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            <button 
              className="px-8 py-4 bg-[#4ECDC4] hover:bg-[#3dbdb5] text-white rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-opacity-50 shadow-lg"
              aria-label="קבע תור עכשיו"
            >
              קבע תור עכשיו
            </button>
          </div>
          
          {/* Image */}
          <div 
            className={`relative z-10 h-[50vh] lg:h-[60vh] rounded-lg overflow-hidden shadow-2xl transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <Image
              src="/health-bookstore.jpg" // Replace with your actual image path
              alt="חנות ספרים גמא - חנות ספרים מובילה בתחום הבריאות"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover object-center"
            />
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FFEEAD] rounded-full z-0"></div>
            
            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full shadow-lg">
              <span className="text-[#4ECDC4] font-bold">חנות ספרים גמא</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative shape */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[#FFEEAD]/20 -skew-y-2 transform origin-bottom-left"></div>
    </section>
  );
};

export default HeroSection;