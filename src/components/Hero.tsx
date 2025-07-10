import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-20 transition-colors duration-300 grid-background"
    >
      {/* Enhanced Floating Orange Gradient Background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-orange-500/25 to-orange-400/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-300/15 to-orange-700/15 rounded-full blur-[100px] animate-pulse delay-500"></div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto font-['Comic_Sans_MS',cursive]">
        {/* Logo */}
        <div className={`mb-8 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight transition-colors duration-300">
            APIMAN
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 font-medium transition-colors duration-300">
            Crafting the architects of tomorrow's technology
          </p>
        </div>

        {/* Main Headlines */}
        <div className={`mb-12 animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-200' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
            Introducing <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Beyond Degree 25</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
            A 6-month immersive cohort where you learn:<br />
            <span className="font-semibold text-orange-600 dark:text-orange-400">Design & Marketing</span>, <span className="font-semibold text-orange-600 dark:text-orange-400">AI Powered Tech</span> & <span className="font-semibold text-orange-600 dark:text-orange-400">Startup & Ventures</span>
          </p>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 leading-relaxed transition-colors duration-300 italic">
            Not your typical course. This is where mentorship meets momentum,<br />
            and learning becomes living.
          </p>
        </div>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-400' : ''}`}>
          <Link
            to="/cohort"
            className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 hover:from-orange-600 hover:to-orange-700"
          >
            Explore Cohorts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/bootcamps"
            className="group border-2 border-orange-500 text-orange-600 dark:text-orange-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-50 dark:hover:bg-gray-900 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 hover:border-orange-600 hover:shadow-lg"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Join Our Bootcamps
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;