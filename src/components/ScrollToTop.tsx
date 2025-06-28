import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      } hover:scale-110 hover:-translate-y-1`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
    </button>
  );
};

export default ScrollToTop;