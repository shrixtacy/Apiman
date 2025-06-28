import { Search, CreditCard, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const RegistrationProcess = () => {
  const { ref, isVisible } = useScrollAnimation();

  // Fake Google Form URL - replace this with your actual form URL later
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe_FAKE_FORM_ID_REPLACE_WITH_REAL/viewform";

  const steps = [
    {
      icon: Search,
      title: "Choose Preview Bootcamp",
      description: "Browse our three preview bootcamps and select the one that aligns with your interests and career goals."
    },
    {
      icon: CreditCard,
      title: "Register & Pay",
      description: "Complete the registration process with payment. Limited seats available for each preview bootcamp session."
    },
    {
      icon: Calendar,
      title: "Attend & Experience",
      description: "Join your 4-7 day intensive preview experience with meals, certificate, and networking opportunities included."
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className={`text-center mb-12 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              How to Register for a <span className="text-orange-600 dark:text-orange-400">Preview Bootcamp</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const delay = `animate-delay-${(index + 1) * 200}`;
              return (
                <div
                  key={index}
                  className={`text-center animate-on-scroll ${isVisible ? `animate-fade-in-scale ${delay}` : ''}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className={`text-center animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-600' : ''}`}>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Register for a Preview Bootcamp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationProcess;