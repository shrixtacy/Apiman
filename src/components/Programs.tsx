import React from 'react';
import { Code, Palette, Zap, ArrowRight, Star, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Programs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="py-12 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300 grid-background"
    >
      {/* Background Gradients - Static */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-400/15 to-orange-600/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-tr from-orange-500/12 to-orange-400/12 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-10 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Our <span className="text-orange-600 dark:text-orange-400">6-Month Cohort Program</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            A comprehensive transformation journey with mentors, industry trainers, and real-world projects
          </p>
        </div>

        {/* Single Compact Cohort Card */}
        <div className="max-w-4xl mx-auto">
          <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden animate-on-scroll ${isVisible ? 'animate-slide-in-bottom animate-delay-200' : ''} border border-gray-200 dark:border-gray-700`}>
            
            {/* Card Header - Compact */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 relative overflow-hidden">
              <div className="text-center">
                <div className="flex justify-center items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">Complete Transformation</h3>
                    <p className="text-white/90">6-Month Intensive Cohort</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white mb-1">24 Weeks</div>
                    <div className="text-white/80 text-sm">Complete Journey</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white mb-1">1:1</div>
                    <div className="text-white/80 text-sm">Mentorship</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white mb-1">100%</div>
                    <div className="text-white/80 text-sm">Placement Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Body - Compact */}
            <div className="p-6">
              {/* Three Learning Paths - Smaller */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center transition-colors duration-300">
                  Choose Your Specialization Path
                </h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Tech Development Path */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-3">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="text-base font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      Tech Development
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 transition-colors duration-300">
                      Master programming, web/app development, APIs & cloud computing
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["React", "Node.js", "Python", "AI/ML"].map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Design & Marketing Path */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-3">
                      <Palette className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="text-base font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      Design & Marketing
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 transition-colors duration-300">
                      Learn UI/UX design, visual branding, performance marketing
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["Figma", "Adobe", "Branding", "Marketing"].map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Startups & Ventures Path */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="text-base font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      Startups & Ventures
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 transition-colors duration-300">
                      Build your startup from ideation to execution and fundraising
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["Business", "Pitch", "MVP", "Growth"].map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Highlights - Compact */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center transition-colors duration-300">
                  What Makes Our Cohort Special
                </h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm transition-colors duration-300">Industry Mentors</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">Expert professionals</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm transition-colors duration-300">Real Projects</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">Portfolio-worthy apps</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm transition-colors duration-300">Flexible Schedule</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">Evening & weekend</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm transition-colors duration-300">Career Support</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">100% placement</p>
                  </div>
                </div>
              </div>

              {/* Call to Action - Compact */}
              <div className="text-center">
                <Link
                  to="/cohort"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto hover:shadow-xl hover:-translate-y-1 hover:scale-105"
                >
                  Explore the Cohort
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 transition-colors duration-300">
                  Next cohort starts in 4 weeks • Limited seats available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;