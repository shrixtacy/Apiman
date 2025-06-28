import { CheckCircle, Star, Zap, Sparkles, Heart, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  const cards = [
    {
      icon: CheckCircle,
      title: "Why We're Different",
      subtitle: "No cap! 💯",
      description: "Real mentors, real projects, real results. We're not just another bootcamp - we're your career glow-up partner.",
      highlights: ["100% Placement Vibes", "Industry BFFs", "Live Project Energy"],
      bgPattern: "🚀",
      funFact: "Our grads are literally everywhere!"
    },
    {
      icon: Star,
      title: "What You'll Get",
      subtitle: "Main character energy ✨",
      description: "Personalized learning that hits different. 24/7 support because we're always here for you, bestie.",
      highlights: ["Your Personal Learning Arc", "Always-On Support Squad", "Career Guidance That Slaps"],
      bgPattern: "⭐",
      funFact: "Support so good, it's unreal!"
    },
    {
      icon: Zap,
      title: "Why We're Built Different",
      subtitle: "That's the tea ☕",
      description: "Latest tech stack, innovation mindset, future-ready skills. We're not just keeping up - we're setting trends.",
      highlights: ["Tech Stack That's Fire", "Innovation is Our Vibe", "Future-Proof Skills Only"],
      bgPattern: "🔥",
      funFact: "Always ahead of the curve!"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-16 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300 grid-background"
    >
      {/* Enhanced Orange Background Gradients */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-400/25 to-orange-600/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tr from-orange-500/22 to-orange-400/22 rounded-full blur-3xl"></div>
      
      {/* Fun Floating Shapes */}
      <div className="absolute top-20 right-1/4 text-4xl animate-bounce delay-300">🎯</div>
      <div className="absolute bottom-32 left-1/3 text-3xl animate-bounce delay-700">💫</div>
      <div className="absolute top-1/3 right-10 text-2xl animate-bounce delay-1000">⚡</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            The Real Tea About APIMAN
            <Heart className="w-4 h-4 text-pink-500" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 transition-colors duration-300 leading-tight">
            Why <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">APIMAN</span> 
            <br />Hits Different
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300 font-medium">
            We're not your average learning platform - we're the main character moment your career needs ✨
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            const delay = `animate-delay-${(index + 1) * 200}`;
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 cursor-pointer animate-on-scroll ${isVisible ? `animate-fade-in-scale ${delay}` : ''} border border-white/20 dark:border-gray-800/20`}
              >
                {/* Enhanced floating gradient ring on hover - ALL ORANGE */}
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-400/40 to-orange-600/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/30 to-orange-700/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg"></div>
                
                {/* Fun background pattern */}
                <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  {card.bgPattern}
                </div>
                
                <div className="relative z-10">
                  {/* Animated Icon with orange gradient */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-3">
                      {card.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300 font-medium">
                    {card.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {card.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-3 group/item">
                        <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm transition-colors duration-300 group/item:text-orange-600 dark:group/item:text-orange-400">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Fun fact bubble */}
                  <div className="bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-2xl p-4 border border-orange-200/50 dark:border-orange-700/30">
                    <div className="flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      <span className="text-xs font-bold text-orange-700 dark:text-orange-300">Fun Fact:</span>
                    </div>
                    <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mt-1">
                      {card.funFact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action with Gen Z vibes */}
        <div className={`text-center mt-16 animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-800' : ''}`}>
          <div className="bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-600/10 dark:from-orange-900/20 dark:via-orange-800/20 dark:to-orange-700/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
              Ready to Level Up? 🚀
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">
              Join the APIMAN fam and watch your career transformation go viral! 📈✨
            </p>
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Let's Goooo! 
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;