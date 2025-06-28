import { Target, Users, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="py-16 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300 grid-background"
    >
      {/* Enhanced Background Gradients */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/25 to-orange-600/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-orange-500/20 to-orange-400/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`animate-on-scroll ${isVisible ? 'animate-fade-in-left' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
              Your Partner For
              <span className="block text-orange-600 dark:text-orange-400">Industrial Growth</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              At APIMAN, we bridge the gap between academic learning and industry demands. 
              Our cutting-edge programs are designed to create technology leaders who can 
              navigate tomorrow's challenges today.
            </p>

            <div className="space-y-4">
              <div className={`flex items-start gap-4 animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-200' : ''}`}>
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                  <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">Industry-Focused Curriculum</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Real-world projects and cutting-edge technologies that matter in today's market</p>
                </div>
              </div>

              <div className={`flex items-start gap-4 animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-300' : ''}`}>
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">Expert Mentorship</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Learn from industry veterans with years of practical experience</p>
                </div>
              </div>

              <div className={`flex items-start gap-4 animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-400' : ''}`}>
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                  <Award className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">Guaranteed Placement</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">100% placement assistance with our industry partner network</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className={`relative animate-on-scroll ${isVisible ? 'animate-fade-in-right animate-delay-200' : ''}`}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-2xl transition-colors duration-300">
              <div className="text-center">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">50+</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">Successful Graduates</p>
                <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-800 rounded-full">
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;