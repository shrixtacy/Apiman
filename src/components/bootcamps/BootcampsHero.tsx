import { ArrowRight, Play } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const BootcampsHero = () => {
  const { ref, isVisible } = useScrollAnimation();

  // Fake Google Form URL - replace this with your actual form URL later
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe_FAKE_FORM_ID_REPLACE_WITH_REAL/viewform";

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-20 transition-colors duration-300 grid-background"
    >
      {/* Enhanced Background Gradients */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-orange-500/25 to-orange-400/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`animate-on-scroll ${isVisible ? 'animate-fade-in-left' : ''}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold mb-4">
                4-7 Day Preview • Experience Before You Commit
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
                Experience <span className="text-orange-600 dark:text-orange-400">APIMAN</span><br />
                <span className="text-orange-600 dark:text-orange-400">BUILDCAMP1.0-25</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                Get a glimpse into our comprehensive 6-month cohorts through intensive preview sessions, mentorship interactions, and hands-on mini-projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
              >
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="group border-2 border-orange-500 text-orange-600 dark:text-orange-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-50 dark:hover:bg-gray-900 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                How It Works
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>Gateway to our 6-month cohorts</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Visual - Floating PNG */}
          <div className={`relative animate-on-scroll ${isVisible ? 'animate-fade-in-right animate-delay-200' : ''}`}>
            <div className="relative">
              {/* Main floating image container */}
              <div className="relative transform hover:scale-105 transition-all duration-700 ease-out">
                <img
                  src="/Bootcamp page.png"
                  alt="Bootcamp Experience Illustration"
                  className="w-full h-auto max-w-lg mx-auto animate-float"
                />
                
                {/* Floating shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-3xl blur-3xl transform translate-y-8 scale-110 opacity-50 animate-pulse"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow">
                <span className="text-white font-bold text-lg">4-7</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce-slow delay-500">
                <span className="text-white font-bold">👥</span>
              </div>
              
              {/* Additional floating particles */}
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-orange-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute bottom-1/3 -right-6 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75 delay-1000"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75 delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampsHero;