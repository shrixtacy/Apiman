import React from 'react';
import { Users, BookOpen, Code, Briefcase, Trophy, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Apprenticeship = () => {
  const { ref, isVisible } = useScrollAnimation();

  const programFlowSteps = [
    {
      icon: Users,
      title: "Orientation",
      description: "Path introduction, meet your dedicated mentors and industry trainers, understand the cohort structure",
      duration: "Week 1",
      color: "from-blue-500 to-blue-600",
      side: "left"
    },
    {
      icon: BookOpen,
      title: "Learning Phase",
      description: "Weekly modules with live mentor sessions, interactive workshops, and peer collaboration",
      duration: "Week 2-12",
      color: "from-green-500 to-green-600",
      side: "right"
    },
    {
      icon: Code,
      title: "Micro-Projects",
      description: "Applied hands-on tasks and mini-projects to reinforce learning and build practical skills",
      duration: "Week 6-16",
      color: "from-purple-500 to-purple-600",
      side: "left"
    },
    {
      icon: Briefcase,
      title: "Industry Collaboration",
      description: "Partnered real-world experience with our industry partners and live project involvement",
      duration: "Week 12-20",
      color: "from-indigo-500 to-indigo-600",
      side: "right"
    },
    {
      icon: Trophy,
      title: "Major Project Phase",
      description: "Capstone project creation and development with mentor guidance and peer feedback",
      duration: "Week 16-22",
      color: "from-pink-500 to-pink-600",
      side: "left"
    },
    {
      icon: Rocket,
      title: "Final Showcase",
      description: "Demo Day presentation, public project display, and networking with industry professionals",
      duration: "Week 24",
      color: "from-orange-500 to-orange-600",
      side: "right"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-16 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300 grid-background"
    >
      {/* Multiple Enhanced Orange Background Gradients */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tr from-orange-500/18 to-orange-400/18 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-orange-300/15 to-orange-700/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-tr from-orange-600/12 to-orange-400/12 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/8 to-orange-800/8 rounded-full blur-[100px] animate-pulse delay-300"></div>
      
      {/* Additional floating orange elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-full blur-2xl animate-pulse delay-1200"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-orange-400/12 to-orange-500/12 rounded-full blur-2xl animate-pulse delay-800"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Your <span className="text-orange-600 dark:text-orange-400">6-Month Cohort Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            A structured program flow designed for maximum learning, building, and networking with industry mentors
          </p>
        </div>

        {/* Compact Vertical Curved Path Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* SVG Curved Path - Shorter and More Compact */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 z-10">
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 600" 
              preserveAspectRatio="none"
              style={{ width: '160px', marginLeft: '-80px' }}
            >
              <defs>
                <linearGradient id="compactPathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="20%" stopColor="#10b981" />
                  <stop offset="40%" stopColor="#8b5cf6" />
                  <stop offset="60%" stopColor="#6366f1" />
                  <stop offset="80%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                
                {/* Enhanced orange glow filter */}
                <filter id="orangeGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Compact curved path flowing downward with orange glow */}
              <path
                d="M 50 0 Q 35 80, 50 160 Q 65 240, 50 320 Q 35 400, 50 480 Q 65 560, 50 600"
                stroke="url(#compactPathGradient)"
                strokeWidth="4"
                fill="none"
                className="drop-shadow-lg"
                filter="url(#orangeGlow)"
              />
              
              {/* Dotted overlay for animation with orange tint */}
              <path
                d="M 50 0 Q 35 80, 50 160 Q 65 240, 50 320 Q 35 400, 50 480 Q 65 560, 50 600"
                stroke="#f97316"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 8"
                className="animate-pulse opacity-40"
              />
            </svg>
          </div>

          {/* Phase Cards positioned along the compact vertical curve */}
          <div className="space-y-16 relative z-20">
            {programFlowSteps.map((step, index) => {
              const IconComponent = step.icon;
              const delay = `animate-delay-${(index + 1) * 150}`;
              const isLeft = step.side === 'left';
              
              return (
                <div
                  key={index}
                  className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-6 animate-on-scroll ${isVisible ? `animate-fade-in-${isLeft ? 'left' : 'right'} ${delay}` : ''}`}
                >
                  {/* Phase Card - Enhanced with more orange gradients */}
                  <div className={`w-72 group relative ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
                    {/* Multiple layered orange glows */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-orange-400/25 to-orange-600/25 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/20 to-orange-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg"></div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-orange-300/15 to-orange-800/15 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                    
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 group-hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-orange-200 dark:group-hover:border-orange-700">
                      {/* Phase Number & Icon - Enhanced with orange accents */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-orange-200 dark:group-hover:shadow-orange-800`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                            {index + 1}
                          </div>
                        </div>
                        <span className="text-xs text-orange-600 dark:text-orange-400 font-semibold bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 px-2 py-1 rounded-full border border-orange-200 dark:border-orange-700">
                          {step.duration}
                        </span>
                      </div>

                      {/* Content - Enhanced with orange hover effects */}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                        {step.description}
                      </p>

                      {/* Enhanced progress indicator with orange gradient */}
                      <div className="mt-3">
                        <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full transition-all duration-1000 group-hover:w-full shadow-sm`}
                            style={{ width: `${((index + 1) / programFlowSteps.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced connection line with orange gradient */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-0.5 bg-gradient-to-${isLeft ? 'r' : 'l'} from-orange-300 via-gray-300 dark:via-gray-600 to-transparent`}></div>
                  </div>

                  {/* Enhanced path marker with orange theme */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg flex items-center justify-center border-2 border-orange-200 dark:border-orange-700">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    {/* Enhanced pulsing rings with orange */}
                    <div className="absolute inset-0 w-5 h-5 bg-orange-400 rounded-full animate-ping opacity-25"></div>
                    <div className="absolute -inset-1 w-7 h-7 bg-orange-300 rounded-full animate-ping opacity-15 delay-300"></div>
                  </div>

                  {/* Enhanced connection line from path */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-0.5 bg-gradient-to-${isLeft ? 'l' : 'r'} from-orange-300 via-gray-300 dark:via-gray-600 to-transparent`}></div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="w-72"></div>
                </div>
              );
            })}
          </div>

          {/* Enhanced milestone markers with orange theme */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-12 bottom-12 pointer-events-none z-15">
            {[25, 50, 75].map((position, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2"
                style={{
                  top: `${position}%`,
                  left: '50%'
                }}
              >
                <div className="w-2 h-2 bg-gradient-to-br from-orange-400/60 to-orange-600/60 rounded-full shadow-sm animate-pulse border border-orange-300/30"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Journey Stats with orange gradients */}
        <div className={`mt-12 grid md:grid-cols-3 gap-4 animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-800' : ''}`}>
          <div className="text-center bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 shadow-md border border-orange-100 dark:border-orange-900/30 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">24 Weeks</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">Complete Journey</div>
          </div>
          <div className="text-center bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 shadow-md border border-orange-100 dark:border-orange-900/30 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">6 Phases</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">Structured Learning</div>
          </div>
          <div className="text-center bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 shadow-md border border-orange-100 dark:border-orange-900/30 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">1:1 Mentorship</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">Personal Guidance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apprenticeship;