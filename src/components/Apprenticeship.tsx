import React from 'react';
import { Users, BookOpen, Code, Briefcase, Trophy, Rocket, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Apprenticeship = () => {
  const { ref, isVisible } = useScrollAnimation();

  const programFlowSteps = [
    {
      icon: Target,
      title: "Discover What to Build",
      description: "Learn how founders think, identify problems worth solving, and validate your startup idea with real users.",
      duration: "Weeks 1-2",
      color: "from-blue-500 to-blue-600",
      side: "left",
      milestone: "🚩"
    },
    {
      icon: BookOpen,
      title: "Prototype & Test",
      description: "Create a basic prototype in Figma or no-code, launch a landing page, and gather valuable feedback.",
      duration: "Weeks 3-4",
      color: "from-green-500 to-green-600",
      side: "right",
      milestone: "🧠"
    },
    {
      icon: Code,
      title: "Build MVP with BuildStack",
      description: "Learn to code or collaborate with devs, develop your MVP and test core features with real users.",
      duration: "Weeks 5-10",
      color: "from-purple-500 to-purple-600",
      side: "left",
      milestone: "💻"
    },
    {
      icon: Briefcase,
      title: "Launch Your Brand with BrandStack",
      description: "Design your visual identity, create content, run real ad campaigns, and drive initial traffic and users.",
      duration: "Weeks 11-16",
      color: "from-indigo-500 to-indigo-600",
      side: "right",
      milestone: "🎨"
    },
    {
      icon: Users,
      title: "Operate Like a Founder with BizStack",
      description: "Learn startup operations, sales, pricing strategies, and build and manage a cross-functional team.",
      duration: "Weeks 17-20",
      color: "from-pink-500 to-pink-600",
      side: "left",
      milestone: "💼"
    },
    {
      icon: Trophy,
      title: "Structure & Pitch Your Startup",
      description: "Register your company, split equity, build your pitch deck and investor narrative for Demo Day.",
      duration: "Weeks 21-24",
      color: "from-orange-500 to-orange-600",
      side: "right",
      milestone: "📊"
    },
    {
      icon: Rocket,
      title: "Post-Cohort Growth Paths",
      description: "Internship, startup placement, freelance projects, or join Apiman Studio to build your startup with support.",
      duration: "Weeks 25-36 (Optional)",
      color: "from-red-500 to-red-600",
      side: "left",
      milestone: "🚀"
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
            <span className="text-orange-600 dark:text-orange-400">Apiman Cohort Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            24 Weeks in 7 Key Milestones - From idea validation to Demo Day and beyond
          </p>
        </div>

        {/* Compact Vertical Curved Path Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* SVG Curved Path - Shorter and More Compact */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 z-10">
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 700" 
              preserveAspectRatio="none"
              style={{ width: '160px', marginLeft: '-80px' }}
            >
              <defs>
                <linearGradient id="compactPathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="15%" stopColor="#10b981" />
                  <stop offset="30%" stopColor="#8b5cf6" />
                  <stop offset="45%" stopColor="#6366f1" />
                  <stop offset="60%" stopColor="#ec4899" />
                  <stop offset="75%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ef4444" />
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
                d="M 50 0 Q 35 90, 50 180 Q 65 270, 50 360 Q 35 450, 50 540 Q 65 630, 50 700"
                stroke="url(#compactPathGradient)"
                strokeWidth="4"
                fill="none"
                className="drop-shadow-lg"
                filter="url(#orangeGlow)"
              />
              
              {/* Dotted overlay for animation with orange tint */}
              <path
                d="M 50 0 Q 35 90, 50 180 Q 65 270, 50 360 Q 35 450, 50 540 Q 65 630, 50 700"
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
                  <div className={`w-80 group relative ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
                    {/* Multiple layered orange glows */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-orange-400/25 to-orange-600/25 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/20 to-orange-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg"></div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-orange-300/15 to-orange-800/15 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                    
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 group-hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-orange-200 dark:group-hover:border-orange-700">
                      {/* Milestone Emoji & Phase Number */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{step.milestone}</div>
                          <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-orange-200 dark:group-hover:shadow-orange-800`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                            {index + 1}
                          </div>
                        </div>
                        <span className="text-xs text-orange-600 dark:text-orange-400 font-semibold bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 px-3 py-1.5 rounded-full border border-orange-200 dark:border-orange-700">
                          {step.duration}
                        </span>
                      </div>

                      {/* Content - Enhanced with orange hover effects */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                        {step.description}
                      </p>

                      {/* Enhanced progress indicator with orange gradient */}
                      <div className="mt-4">
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full transition-all duration-1000 group-hover:w-full shadow-sm`}
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
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg flex items-center justify-center border-2 border-orange-200 dark:border-orange-700">
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>
                    {/* Enhanced pulsing rings with orange */}
                    <div className="absolute inset-0 w-6 h-6 bg-orange-400 rounded-full animate-ping opacity-25"></div>
                    <div className="absolute -inset-1 w-8 h-8 bg-orange-300 rounded-full animate-ping opacity-15 delay-300"></div>
                  </div>

                  {/* Enhanced connection line from path */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-0.5 bg-gradient-to-${isLeft ? 'l' : 'r'} from-orange-300 via-gray-300 dark:via-gray-600 to-transparent`}></div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="w-80"></div>
                </div>
              );
            })}
          </div>

          {/* Enhanced milestone markers with orange theme */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-12 bottom-12 pointer-events-none z-15">
            {[15, 30, 45, 60, 75, 90].map((position, index) => (
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
        <div className={`mt-16 grid md:grid-cols-4 gap-4 animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-800' : ''}`}>
          <div className="text-center bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 shadow-md border border-orange-100 dark:border-orange-900/30 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">24 Weeks</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">Complete Journey</div>
          </div>
          <div className="text-center bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 shadow-md border border-orange-100 dark:border-orange-900/30 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">7 Milestones</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">Key Achievements</div>
          </div>
          <div className="text-center bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 shadow-md border border-orange-100 dark:border-orange-900/30 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">1:1 Mentorship</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">Personal Guidance</div>
          </div>
          <div className="text-center bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 shadow-md border border-orange-100 dark:border-orange-900/30 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">Demo Day</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">Pitch to VCs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apprenticeship;