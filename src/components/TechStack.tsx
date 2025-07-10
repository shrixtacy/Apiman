import { useState } from 'react';
import { 
  Code, /* Database, */ Globe, Smartphone, Cloud, Server, 
  Palette, Figma, Megaphone, BarChart3, Zap, TrendingUp,
  ChevronRight, Star, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState(0);

  const pathCategories = [
    {
      title: "BuildStack",
      subtitle: "Build the Future",
      description: "Hands-on mastery of tools and techniques shaping the future of tech, AI, and automation.",
      technologies: [
        { icon: Zap, name: 'AI-Powered Tools', level: 96, description: 'Automation, Prompt Engineering, AI Systems' },
        { icon: Code, name: 'Vibe Coding', level: 92, description: 'Creative & flow-based programming with JS/TS' },
        { icon: Palette, name: 'Prototype Building', level: 90, description: 'From idea to working demo using low-code + custom stacks' },
        { icon: Server, name: 'System Thinking', level: 88, description: 'Architecture, APIs & modular workflows' },
        { icon: BarChart3, name: 'Data Automation', level: 85, description: 'Google Sheets + APIs + AI workflows' },
        { icon: Smartphone, name: 'No-Code Tools', level: 89, description: 'Zapier, Make, Retool & more' },
        { icon: Cloud, name: 'Cloud Integration', level: 87, description: 'Working with Firebase, Supabase, Vercel' },
        { icon: TrendingUp, name: 'Realtime Systems', level: 90, description: 'Live collaboration tools & WebSockets' }
      ]
    },
    {
      title: "Design & Marketing",
      subtitle: "Create Impact. Drive Attention.",
      description: "Master the creative and strategic tools behind the world’s most viral brands and campaigns.",
      technologies: [
        { icon: Palette, name: 'Content Creation', level: 95, description: 'Copywriting, Video Editing & Trend Design' },
        { icon: Figma, name: 'UI/UX Design', level: 92, description: 'Figma, Prototyping, Human-Centered Design' },
        { icon: Megaphone, name: 'Social Media Strategy', level: 90, description: 'Instagram, LinkedIn & Viral Content Systems' },
        { icon: BarChart3, name: 'Multimedia Campaigns', level: 88, description: 'Motion Graphics, Storytelling, Animation' },
        { icon: TrendingUp, name: 'Performance Ads', level: 86, description: 'Meta Ads, Google Ads, UGC Funnels' },
        { icon: Globe, name: 'Brand Identity', level: 89, description: 'Color Psychology, Typography, Brand Systems' },
        { icon: Cloud, name: 'Design Ops', level: 85, description: 'Streamlined Collaboration, Versioning, Delivery' },
        { icon: Sparkles, name: 'Growth Design', level: 90, description: 'Designs that Convert, Delight & Scale' }
      ]
    },
    {
      title: "Startups & Ventures",
      subtitle: "Launch & Scale",
      description: "Build ventures from 0 to 1 with frameworks, systems, and decision-making used by real-world founders.",
      technologies: [
        { icon: Zap, name: 'Business Models', level: 93, description: 'Distribution, Revenue & Sales Channels' },
        { icon: TrendingUp, name: 'Operations & Strategy', level: 90, description: 'Risk Mitigation, Scaling Ops, Hiring' },
        { icon: BarChart3, name: 'Finance & Legality', level: 86, description: 'Equity, Registrations, Agreements' },
        { icon: Megaphone, name: 'Pitch Decks', level: 88, description: 'Investor Stories, Vision Framing, Deck Design' },
        { icon: Globe, name: 'B2B Sales', level: 84, description: 'Client Outreach, SaaS Funnels, Cold Email' },
        { icon: Cloud, name: 'D2C Sales', level: 87, description: 'Landing Pages, Retention & Conversion Tactics' },
        { icon: Sparkles, name: 'Founder Ops', level: 89, description: 'Time Management, Vision Clarity, Delegation' },
        { icon: BarChart3, name: 'Product-Market Fit', level: 90, description: 'Customer Discovery, Iteration, Validation' }
      ]
    }
  ];

  const activeData = pathCategories[activeCategory];

  return (
    <section 
      ref={ref}
      className="py-16 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300 grid-background"
    >
      {/* Background Gradients */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-400/25 to-orange-600/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tr from-orange-500/22 to-orange-400/22 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700/30 rounded-full text-orange-600 dark:text-orange-400 font-semibold mb-6">
            <Sparkles className="w-5 h-5" />
            Master Modern Technologies
            <Star className="w-5 h-5" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
            Master Modern <span className="text-orange-600 dark:text-orange-400">Tools & Skills</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            Learn industry-leading tools and methodologies with hands-on experience across three transformative paths
          </p>
        </div>

        {/* Category Selector */}
        <div className={`flex justify-center mb-16 animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-200' : ''}`}>
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-2xl p-2 border border-gray-200 dark:border-gray-700">
            {pathCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-500 relative overflow-hidden ${
                  activeCategory === index
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {activeCategory === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl transition-all duration-500" />
                )}
                <span className="relative z-10">{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Category Info */}
          <div className={`animate-on-scroll ${isVisible ? 'animate-fade-in-left animate-delay-400' : ''}`}>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl blur-3xl opacity-50 transition-all duration-1000" />
              
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-lg transition-colors duration-300">
                <div className="mb-6">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-2">
                    {activeData.title}
                  </h3>
                  <p className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-300">
                    {activeData.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
                    {activeData.description}
                  </p>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-4">
                  <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-4 transition-colors duration-300">Mastery Levels</h4>
                  {activeData.technologies.slice(0, 3).map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">{tech.name}</span>
                        <span className="text-orange-600 dark:text-orange-400 font-bold transition-colors duration-300">{tech.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden transition-colors duration-300">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/cohort"
                  className="mt-8 group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center gap-3 inline-flex"
                >
                  Explore This Path
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Tech Grid */}
          <div className={`animate-on-scroll ${isVisible ? 'animate-fade-in-right animate-delay-600' : ''}`}>
            <div className="grid grid-cols-2 gap-6">
              {activeData.technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                
                return (
                  <div
                    key={index}
                    className="group relative cursor-pointer"
                    style={{
                      transform: `translateY(${index % 2 === 0 ? '0' : '20px'})`,
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-500 blur-xl" />
                    
                    <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-all duration-500 group-hover:border-orange-500 dark:group-hover:border-orange-400 group-hover:scale-105 group-hover:-translate-y-2 shadow-lg group-hover:shadow-xl">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                        {tech.name}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                        {tech.description}
                      </p>

                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden transition-colors duration-300">
                          <div 
                            className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${tech.level}%` }}
                          />
                        </div>
                        <span className="text-orange-600 dark:text-orange-400 font-bold text-sm transition-colors duration-300">{tech.level}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-800' : ''}`}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-3 bg-gradient-to-r from-orange-500/15 via-orange-400/15 to-orange-600/15 rounded-2xl blur-2xl opacity-40" />
            
            <div className="relative bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-700/30 rounded-2xl p-6 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                Ready to Master These Skills?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 max-w-2xl mx-auto transition-colors duration-300">
                Join our preview bootcamps to experience these tools firsthand, then choose your 6-month cohort path
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/bootcamps"
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  Explore Preview Bootcamps
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/cohort"
                  className="group border-2 border-orange-500 text-orange-600 dark:text-orange-400 px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-orange-500 hover:text-white transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Star className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  View 6-Month Cohorts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;