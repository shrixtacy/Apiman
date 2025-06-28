import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, Star, Sparkles, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        interest: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@apiman.edu",
      description: "Get in touch for any inquiries",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Tech Street, Silicon Valley",
      description: "Our main campus location",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const quickLinks = [
    { title: "General Inquiries", description: "Questions about our programs" },
    { title: "Admissions", description: "Application and enrollment" },
    { title: "Technical Support", description: "Platform and technical help" },
    { title: "Partnerships", description: "Corporate collaborations" }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Reduced height and padding */}
      <section className="relative flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-20 pb-8 transition-colors duration-300 grid-background">
        {/* Enhanced Orange Background Gradients */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-orange-400/25 to-orange-600/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-tr from-orange-500/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700/30 rounded-full text-orange-600 dark:text-orange-400 font-medium text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              Let's Connect
              <MessageCircle className="w-4 h-4" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight transition-colors duration-300">
              Get in <span className="text-orange-600 dark:text-orange-400">Touch</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
              Ready to transform your career? Have questions about our programs? We're here to help you take the next step.
            </p>
          </div>

          {/* Contact Info Cards - Smaller */}
          <div className="grid md:grid-cols-3 gap-4">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const delay = `animate-delay-${(index + 1) * 200}`;
              return (
                <div
                  key={index}
                  className={`group relative bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-on-scroll ${isVisible ? `animate-fade-in-scale ${delay}` : ''} border border-gray-200 dark:border-gray-700`}
                >
                  {/* Enhanced floating gradient ring on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-10 h-10 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {info.title}
                    </h3>
                    
                    <p className="text-base font-semibold text-orange-600 dark:text-orange-400 mb-1 transition-colors duration-300">
                      {info.value}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section - Reduced padding */}
      <section 
        ref={ref}
        className="py-12 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300 grid-background"
      >
        {/* Background Gradients */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-400/15 to-orange-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-tr from-orange-500/12 to-orange-400/12 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Contact Form - Smaller */}
            <div className={`animate-on-scroll ${isVisible ? 'animate-fade-in-left' : ''}`}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 text-sm transition-colors duration-300">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 text-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 text-sm transition-colors duration-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 text-sm"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 text-sm transition-colors duration-300">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 text-sm"
                          placeholder="What's this about?"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 text-sm transition-colors duration-300">
                          I'm Interested In
                        </label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 text-sm"
                        >
                          <option value="">Select an option</option>
                          <option value="tech-development">Tech Development Cohort</option>
                          <option value="design-marketing">Design & Marketing Cohort</option>
                          <option value="startup-ventures">Startup & Ventures Cohort</option>
                          <option value="preview-bootcamps">Preview Bootcamps</option>
                          <option value="general-inquiry">General Inquiry</option>
                          <option value="partnership">Partnership Opportunities</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 text-sm transition-colors duration-300">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none text-sm"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Additional Info - Smaller */}
            <div className={`animate-on-scroll ${isVisible ? 'animate-fade-in-right animate-delay-200' : ''}`}>
              {/* Quick Links */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <div key={index} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors duration-300 cursor-pointer">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 text-sm">
                          {link.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-sm">Monday - Friday</span>
                    <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 text-sm">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-sm">Saturday</span>
                    <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 text-sm">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-sm">Sunday</span>
                    <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 text-sm">Closed</span>
                  </div>
                  <div className="mt-3 p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700/30">
                    <p className="text-orange-700 dark:text-orange-300 text-xs font-medium transition-colors duration-300">
                      <Globe className="w-3 h-3 inline mr-1" />
                      All times are in EST (Eastern Standard Time)
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-700/30">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    Fast Response Guarantee
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300 text-sm">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold transition-colors duration-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Average response time: 4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;