import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer at Google",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      text: "APIMAN transformed my career completely. The hands-on approach and industry mentors gave me the confidence to land my dream job.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Mobile App Developer at Microsoft",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      text: "The practical training and live projects prepared me for real-world challenges. Best investment I've made in my career.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Cloud Engineer at Amazon",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      text: "From zero to hero in 6 months! The curriculum is perfectly aligned with industry needs. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-16 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300 grid-background"
    >
      {/* Enhanced background decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-400/22 to-orange-600/22 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            What Our <span className="text-orange-600 dark:text-orange-400">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Real stories from real people who transformed their careers with APIMAN
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const delay = `animate-delay-${(index + 1) * 200}`;
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 cursor-pointer animate-on-scroll ${isVisible ? `animate-fade-in-scale ${delay}` : ''}`}
              >
                {/* Enhanced Orange blur effect around active card */}
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-400/15 to-orange-600/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-7 h-7 text-orange-500 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic text-sm transition-colors duration-300">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -inset-1 bg-gradient-to-br from-orange-400/25 to-orange-600/25 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;