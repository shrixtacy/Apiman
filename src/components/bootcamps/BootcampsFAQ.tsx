import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const BootcampsFAQ = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's included in the preview bootcamp?",
      answer: "Our preview bootcamps include sample live sessions, mini-projects, mentorship previews, peer collaboration activities, guest speaker sessions, networking opportunities, meals and refreshments, and a certificate of participation."
    },
    {
      question: "How does this lead to the 6-month cohort?",
      answer: "The preview bootcamp gives you a complete taste of our teaching methodology and helps you choose the right path (Tech, Design & Marketing, or Startups). You'll receive priority access and discounts for our 6-month cohort programs."
    },
    {
      question: "What's the time commitment for preview bootcamps?",
      answer: "Preview bootcamps run for 4-7 days with intensive daily sessions. This includes hands-on workshops, mentor interactions, mini-projects, and networking activities. Full schedule details are provided upon registration."
    },
    {
      question: "Can I attend multiple preview bootcamps?",
      answer: "Yes, you can attend preview bootcamps for different paths to help you make an informed decision about which 6-month cohort program best fits your career goals and interests."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={ref}
      className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300 grid-background"
    >
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Frequently Asked <span className="text-orange-600 dark:text-orange-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Everything you need to know about our preview bootcamps and how they connect to our cohort programs
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const delay = `animate-delay-${(index + 1) * 200}`;
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden animate-on-scroll ${isVisible ? `animate-fade-in-scale ${delay}` : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
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

export default BootcampsFAQ;