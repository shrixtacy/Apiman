import { Eye, Users, Award, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const WhyChooseBootcamps = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Eye,
      title: "Experience APIMAN",
      description: "Get hands-on experience with our teaching methodology, mentorship style, and learning environment before committing to a full cohort."
    },
    {
      icon: Users,
      title: "Sample Live Sessions",
      description: "Participate in actual mentor-led sessions, interactive workshops, and collaborative projects with fellow participants."
    },
    {
      icon: Award,
      title: "Certificate & Discounts",
      description: "Receive a certificate of participation and exclusive discounts or early access to our 6-month cohort programs."
    },
    {
      icon: TrendingUp,
      title: "Mentorship Previews",
      description: "Meet and interact with our industry mentors and trainers to understand the quality of guidance you'll receive."
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300 grid-background"
    >
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Why Attend Our <span className="text-orange-600 dark:text-orange-400">Preview Bootcamps?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Our preview bootcamps are designed to give you a complete taste of the APIMAN experience before you commit to a full cohort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const delay = `animate-delay-${(index + 1) * 200}`;
            return (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll ${isVisible ? `animate-fade-in-scale ${delay}` : ''}`}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-12 animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-600' : ''}`}>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            Questions About Our Preview Bootcamps? →
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBootcamps;