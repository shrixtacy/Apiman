import { useState } from 'react';
import { 
  ArrowRight, 
  Play, 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Code, 
  Briefcase, 
  Award, 
  Target, 
  Rocket,
  BookOpen,
  Trophy,
  ChevronDown,
  ChevronUp,
  Phone,
  MessageCircle,
  Globe
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CohortPage = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  // Fake Google Form URL - replace this with your actual form URL later
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe_FAKE_FORM_ID_REPLACE_WITH_REAL/viewform";

  const learningModules = [
    {
      icon: Users,
      title: "Mentorship from Industry Leaders",
      description: "1:1 guidance from professionals working at top companies like Google, Microsoft, and successful startups.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Build 3 Real Projects",
      description: "Create portfolio-worthy applications that solve real problems and showcase your skills to employers.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Master Industry Tools",
      description: "Learn the exact technologies and frameworks used by leading companies in your chosen field.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "Peer Community & Feedback",
      description: "Collaborate with like-minded individuals and receive constructive feedback on your work.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const timeline = [
    {
      week: "Weeks 1-2",
      title: "🚩 Discover What to Build",
      description: "Learn how founders think, identify problems worth solving, and validate your startup idea with real users",
      icon: Target
    },
    {
      week: "Weeks 3-4",
      title: "🧠 Prototype & Test",
      description: "Create a basic prototype in Figma or no-code, launch a landing page, and gather feedback",
      icon: BookOpen
    },
    {
      week: "Weeks 5-10",
      title: "💻 Build MVP with BuildStack",
      description: "Learn to code or collaborate with devs, develop your MVP and test core features",
      icon: Code
    },
    {
      week: "Weeks 11-16",
      title: "🎨 Launch Your Brand with BrandStack",
      description: "Design your visual identity, create content, run real ad campaigns, and drive initial traffic and users",
      icon: Briefcase
    },
    {
      week: "Weeks 17-22",
      title: "💼 Operate Like a Founder with BizStack",
      description: "Learn startup operations, sales, pricing, and build and manage a cross-functional team",
      icon: Users
    },
    {
      week: "Weeks 21-24",
      title: "📊 Structure & Pitch Your Startup",
      description: "Register your company, split equity, build your pitch deck and investor narrative for Demo Day",
      icon: Trophy
    },
    {
      week: "Weeks 25-36 (Optional)",
      title: "🚀 Post-Cohort Growth Paths",
      description: "Internship, startup placement, freelance projects, or join Apiman Studio to build your startup with support",
      icon: Rocket
    }
  ];

  const mentors = [
    {
      name: "Akash Kumar",
      role: "Tech Mentor @ Zomato",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      expertise: "Full Stack Development"
    },
    {
      name: "Riya Sharma",
      role: "Startup Coach | 2 Funded Startups",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      expertise: "Business Strategy"
    },
    {
      name: "Priya Patel",
      role: "Design Lead @ Flipkart",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      expertise: "UI/UX Design"
    },
    {
      name: "Rahul Singh",
      role: "Engineering Manager @ Microsoft",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      expertise: "Cloud Architecture"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      path: "Tech Development",
      quote: "The mentorship was incredible. I went from knowing basic HTML to building full-stack applications and landed a job at a top startup.",
      project: "Built an AI-powered task management app",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Michael Chen",
      path: "Design & Marketing",
      quote: "The real-world projects and feedback from industry mentors helped me build a portfolio that got me hired immediately.",
      project: "Designed a complete brand identity for a fintech startup",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Emily Rodriguez",
      path: "Startups & Ventures",
      quote: "I launched my own startup during the cohort and raised $50K in seed funding with the pitch deck we created.",
      project: "Founded EcoTech Solutions",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    }
  ];

  const faqs = [
    {
      question: "Do I need prior experience to join the cohort?",
      answer: "No prior experience is required! Our cohort is designed to take you from beginner to job-ready. We start with fundamentals and gradually build up to advanced concepts with personalized mentorship."
    },
    {
      question: "Can I get a job after completing the cohort?",
      answer: "Yes! We have a 95% placement rate. Our career support includes resume building, interview preparation, portfolio development, and direct connections with our hiring partner network."
    },
    {
      question: "What's the time commitment required?",
      answer: "The cohort requires 15-20 hours per week, including live sessions, project work, and self-study. Sessions are scheduled in the evenings and weekends to accommodate working professionals."
    },
    {
      question: "How is this different from online courses?",
      answer: "Unlike pre-recorded courses, our cohort offers live mentorship, real-time feedback, peer collaboration, industry projects, and personalized career guidance throughout your 6-month journey."
    },
    {
      question: "What if I can't keep up with the pace?",
      answer: "Our mentors provide personalized support to ensure no one falls behind. We also offer additional 1:1 sessions and extended project timelines when needed. Your success is our priority."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with the program quality within the first month, we'll provide a full refund."
    },
    {
      question: "Can I switch between different tracks during the cohort?",
      answer: "While we recommend sticking to your chosen track for the best results, we do allow track switches within the first 4 weeks with mentor approval and a brief transition plan."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-20 transition-colors duration-300 grid-background">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-orange-500/25 to-orange-400/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-6">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold">
                    <Calendar className="w-4 h-4" />
                    Starts July 20
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                    <Clock className="w-4 h-4" />
                    6 Months
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">
                    <Globe className="w-4 h-4" />
                    Online + Mentor Support
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
                  AP1.25 - <span className="text-orange-600 dark:text-orange-400">The 1st</span><br />
                  <span className="text-orange-600 dark:text-orange-400">Cohort</span> of 2025
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                  Master your chosen field by building real-world projects with industry mentors and a supportive peer community
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Register Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="group border-2 border-orange-500 text-orange-600 dark:text-orange-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-50 dark:hover:bg-gray-900 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Try a Bootcamp
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <span>Limited to 25 students</span>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.9/5 from past cohorts</span>
                </div>
              </div>
            </div>

            {/* Right Visual - Floating PNG */}
            <div className="relative">
              <div className="relative transform hover:scale-105 transition-all duration-700 ease-out">
                {/* Main floating image container */}
                <div className="relative">
                  <img
                    src="/cc j.png"
                    alt="Cohort Learning Experience Illustration"
                    className="w-full h-auto max-w-lg mx-auto animate-float"
                  />
                  
                  {/* Floating shadow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-3xl blur-3xl transform translate-y-8 scale-110 opacity-50 animate-pulse"></div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow">
                  <span className="text-white font-bold text-lg">6M</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce-slow animate-delay-500">
                  <Users className="w-6 h-6 text-white" />
                </div>
                
                {/* Additional floating particles */}
                <div className="absolute top-1/4 -left-8 w-4 h-4 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-1/3 -right-6 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75 animate-delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75 animate-delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section 
        ref={ref}
        className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300 grid-background"
      >
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              What You'll <span className="text-orange-600 dark:text-orange-400">Learn & Experience</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              A comprehensive learning experience designed to transform you into an industry-ready professional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningModules.map((module, index) => {
              const IconComponent = module.icon;
              const delay = `animate-delay-${(index + 1) * 200}`;
              return (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll ${isVisible ? `animate-fade-in-scale ${delay}` : ''}`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    {module.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Timeline Section */}
      <section className="py-16 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300 grid-background">
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              <span className="text-orange-600 dark:text-orange-400">Apiman Cohort Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              24 Weeks in 7 Key Milestones - From idea validation to Demo Day and beyond
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((phase, index) => {
              const IconComponent = phase.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                          {phase.week}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        {phase.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Your Mentors Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300 grid-background">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Meet Your <span className="text-orange-600 dark:text-orange-400">Mentors & Trainers</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Learn from industry professionals who've been where you want to go
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                  {mentor.name}
                </h3>
                <p className="text-orange-600 dark:text-orange-400 text-sm font-semibold mb-2 transition-colors duration-300">
                  {mentor.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">
                  {mentor.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Try Bootcamp Section */}
      <section className="py-16 bg-gray-900 dark:bg-black relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Confused? Try a <span className="text-orange-400">Bootcamp</span> First
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Still unsure? Experience our teaching methodology through a 4-7 day preview bootcamp before committing to the full cohort.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">Hands-on workshops and mini-projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">1-on-1 mentor interactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">Meals and networking included</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">Certificate of participation</span>
                </div>
              </div>

              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                Register for Bootcamp
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Play className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Bootcamp Experience</h3>
                <p className="text-gray-300 text-sm">Get a taste of our immersive learning environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300 grid-background">
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Past Student <span className="text-orange-600 dark:text-orange-400">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Real results from real students who transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-orange-600 dark:text-orange-400 text-sm transition-colors duration-300">
                      {testimonial.path}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm italic transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-200 dark:border-orange-700/30">
                  <p className="text-orange-700 dark:text-orange-300 text-xs font-semibold transition-colors duration-300">
                    Project: {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300 grid-background">
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Frequently Asked <span className="text-orange-600 dark:text-orange-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Everything you need to know about joining our cohort
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 overflow-hidden ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your Future with <span className="text-orange-100">Cohort 1?</span>
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join 25 ambitious individuals on a transformative 6-month journey to career success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-orange-600 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              Talk to Our Team
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-orange-100 text-sm">
            <span>🔥 Only 8 spots left</span>
            <span>⏰ Early bird pricing ends soon</span>
            <span>💯 100% placement support</span>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-green-500 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      <Footer />
    </>
  );
};

export default CohortPage;