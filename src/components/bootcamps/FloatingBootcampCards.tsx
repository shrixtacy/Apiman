import { ChevronLeft, ChevronRight, Eye, UserPlus, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { getAllBootcamps } from '../../data/bootcamps';
import { getIconComponent } from '../../utils/iconMap';
import { useState, useEffect, useRef } from 'react';

const FloatingBootcampCards = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle card active (Design)
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Fake Google Form URL - replace this with your actual form URL later
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe_FAKE_FORM_ID_REPLACE_WITH_REAL/viewform";

  // Get bootcamps from shared data source
  const bootcampCards = getAllBootcamps();

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % bootcampCards.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + bootcampCards.length) % bootcampCards.length);
  };

  const goToCard = (index: number) => {
    setActiveIndex(index);
    setLastScrollTime(Date.now());
  };

  // Enhanced wheel/trackpad scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;
      
      if (isHorizontalScroll) {
        e.preventDefault();
        
        const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
        const threshold = 15;
        
        if (now - lastScrollTime > 100 && Math.abs(delta) > threshold) {
          if (delta > 0) {
            nextCard();
          } else {
            prevCard();
          }
          
          setLastScrollTime(now);
        }
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        carousel.removeEventListener('wheel', handleWheel);
      };
    }
  }, [lastScrollTime]);

  // Touch/swipe gestures
  useEffect(() => {
    let startX = 0;
    let isDragging = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      
      const currentX = e.touches[0].clientX;
      const diffX = startX - currentX;
      
      if (Math.abs(diffX) > 50) {
        e.preventDefault();
        
        if (diffX > 0) {
          nextCard();
        } else {
          prevCard();
        }
        
        isDragging = false;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('touchstart', handleTouchStart, { passive: false });
      carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
      carousel.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        carousel.removeEventListener('touchstart', handleTouchStart);
        carousel.removeEventListener('touchmove', handleTouchMove);
        carousel.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevCard();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Calculate card position and rotation for 3 cards layout
  const getCardTransform = (index: number) => {
    const totalCards = 3;
    const isActive = index === activeIndex;
    
    // Calculate position relative to active card
    let relativePosition = index - activeIndex;
    
    // Wrap around for circular positioning
    if (relativePosition > totalCards / 2) {
      relativePosition -= totalCards;
    } else if (relativePosition < -totalCards / 2) {
      relativePosition += totalCards;
    }
    
    // Optimized spacing for 3 cards
    const cardSpacing = 200; // Increased spacing for 3 cards
    const rotationPerCard = 12; // More rotation for dramatic effect
    const verticalCurve = 35; // Enhanced curve
    
    // Calculate transforms
    const translateX = relativePosition * cardSpacing;
    const rotation = isActive ? 0 : relativePosition * rotationPerCard;
    const translateY = isActive ? -50 : Math.abs(relativePosition) * verticalCurve;
    const scale = isActive ? 1.2 : 0.8; // More dramatic scale difference
    const zIndex = isActive ? 20 : 10 - Math.abs(relativePosition);
    const opacity = isActive ? 1 : 0.6; // Better visibility for side cards
    
    return {
      transform: `
        translateX(${translateX}px) 
        translateY(${translateY}px) 
        rotate(${rotation}deg) 
        scale(${scale})
      `,
      zIndex,
      opacity
    };
  };

  // Define what students experience in each bootcamp
  const bootcampExperiences = {
    'tech-development': [
      'Sample live coding sessions',
      'Mini web development projects',
      'Mentor-guided problem solving',
      'Peer collaboration workshops',
      'Industry guest speaker sessions'
    ],
    'design-marketing': [
      'Interactive design workshops',
      'Brand strategy mini-projects',
      'UI/UX design challenges',
      'Marketing campaign creation',
      'Portfolio review sessions'
    ],
    'startup-entrepreneurship': [
      'Pitch practice sessions',
      'Business model workshops',
      'Startup idea validation',
      'Networking with entrepreneurs',
      'Funding strategy discussions'
    ]
  };

  return (
    <section 
      ref={ref}
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300 grid-background"
    >
      {/* Enhanced Background Gradients */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tr from-orange-500/18 to-orange-400/18 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            What Will You <span className="text-orange-600 dark:text-orange-400">Experience?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto transition-colors duration-300">
            Experience our intensive 4-7 day preview bootcamps and discover your path to a complete 6-month transformation journey
          </p>
          <div className="mt-4 text-sm text-orange-600 dark:text-orange-400 font-semibold">
            ✨ Preview • Experience • Choose Your 6-Month Cohort Path
          </div>
        </div>

        {/* Playing Card Fan Layout for 3 Cards */}
        <div 
          ref={carouselRef}
          className="relative h-[650px] flex items-center justify-center perspective-1000"
          style={{ touchAction: 'pan-y pinch-zoom' }}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevCard}
            className="absolute left-8 z-30 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group border-2 border-white/20"
          >
            <ChevronLeft className="w-7 h-7 text-gray-700 group-hover:text-orange-600" />
          </button>

          <button
            onClick={nextCard}
            className="absolute right-8 z-30 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group border-2 border-white/20"
          >
            <ChevronRight className="w-7 h-7 text-gray-700 group-hover:text-orange-600" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {bootcampCards.map((card, index) => {
              const IconComponent = getIconComponent(card.icon);
              const isActive = index === activeIndex;
              const cardStyle = getCardTransform(index);
              const experiences = bootcampExperiences[card.id as keyof typeof bootcampExperiences] || [];

              return (
                <div
                  key={card.id}
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={cardStyle}
                  onClick={() => goToCard(index)}
                >
                  {/* Playing Card Style - Larger for 3 cards */}
                  <div className={`w-96 h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform-gpu ${
                    isActive ? 'hover:scale-105' : 'hover:scale-95'
                  } transition-transform duration-300`}>
                    
                    {/* Latest Badge */}
                    {card.isLatest && (
                      <div className="absolute -top-3 -right-3 z-20">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4" />
                          New
                        </div>
                      </div>
                    )}
                    
                    {/* Card Header - Larger */}
                    <div className={`h-24 bg-gradient-to-r ${card.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10 p-6 flex items-center justify-between h-full">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-white/90 text-base font-medium">{card.level}</div>
                            <div className="text-white/70 text-sm">{card.duration}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-xl">★ {card.rating}</div>
                          <div className="text-white/70 text-sm">{card.students}</div>
                        </div>
                      </div>
                    </div>

                    {/* Card Body - Larger with better spacing */}
                    <div className="p-6 h-[376px] flex flex-col">
                      {/* Title Section */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-sm text-orange-600 font-semibold mb-2">
                          4-7 Day Intensive Preview
                        </p>
                        <p className="text-sm text-gray-600">
                          {card.description}
                        </p>
                      </div>

                      {/* What You'll Experience */}
                      <div className="mb-6 flex-grow">
                        <h4 className="text-base font-bold text-gray-800 mb-4">What You'll Experience:</h4>
                        <div className="space-y-3">
                          {experiences.map((experience, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-600 leading-relaxed">{experience}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Path to Full Cohort */}
                      <div className="mb-6 text-center">
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                          <p className="text-sm text-orange-700 font-semibold">
                            🎯 Gateway to 6-Month Cohort
                          </p>
                          <p className="text-sm text-orange-600 mt-1">
                            Complete transformation journey
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons - Only for active card */}
                      {isActive && (
                        <div className="space-y-3 mt-auto">
                          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-orange-500 text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 group">
                            <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            Preview Bootcamp
                          </button>
                          <a
                            href={GOOGLE_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                          >
                            <UserPlus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            Register for Preview
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Card Indicators - 3 dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {bootcampCards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-orange-500 scale-125 shadow-lg'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300 mb-6">
            Use arrow keys, scroll horizontally, or click cards to navigate
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-5xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Your Learning Journey Starts Here
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Preview (4-7 Days)</p>
                <p className="text-gray-600 dark:text-gray-300">Experience our teaching style and discover your passion</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Choose Your Path</p>
                <p className="text-gray-600 dark:text-gray-300">Select from Tech, Design & Marketing, or Startups based on your interests</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">6-Month Cohort</p>
                <p className="text-gray-600 dark:text-gray-300">Complete transformation with mentors and real projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingBootcampCards;