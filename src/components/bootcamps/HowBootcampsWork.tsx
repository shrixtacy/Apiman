import React from 'react';
import { Users, Code, Briefcase, Network } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const HowBootcampsWork = () => {
  const { ref, isVisible } = useScrollAnimation();

  const activities = [
    {
      icon: Users,
      title: "Sample Live Sessions",
      description: "Experience our mentor-led interactive sessions and get a feel for our teaching methodology and learning environment.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Mini-Projects",
      description: "Work on hands-on mini-projects that give you a taste of the real-world applications you'll build in our cohorts.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Briefcase,
      title: "Mentorship Previews",
      description: "Meet and interact with our industry mentors and trainers to understand the quality of guidance you'll receive.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Network,
      title: "Peer Collaboration & Networking",
      description: "Connect with like-minded individuals, participate in group activities, and build your professional network.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-16 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300 grid-background"
    >
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            What You'll Do in a <span className="text-orange-600 dark:text-orange-400">Preview Bootcamp</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            A comprehensive preview experience designed to give you a complete taste of our 6-month cohort programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            const delay = `animate-delay-${(index + 1) * 200}`;
            return (
              <div
                key={index}
                className={`group relative text-center animate-on-scroll ${isVisible ? `animate-fade-in-scale ${delay}` : ''}`}
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm transition-colors duration-300">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowBootcampsWork;