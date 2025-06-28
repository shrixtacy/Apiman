import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Cohorts', href: '/cohort' },
    { name: 'Bootcamps', href: '/bootcamps' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/contact' }
  ];

  const smoothScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    setIsOpen(false);
    
    // Handle anchor links for home page
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault();
        smoothScrollTo(href.substring(1));
      } else {
        // If not on home page, navigate to home first, then scroll
        window.location.href = href;
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold hover:text-orange-700 dark:hover:text-orange-500 transition-all duration-300 relative group flex items-center"
            >
              <img src="/apiman-logo.svg" alt="APIMAN" className="h-12 mr-3" />
              <span className="text-orange-600 dark:text-orange-400">API</span><span className="text-gray-900 dark:text-white">MAN</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-all duration-300 relative group py-2 px-1"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-orange-50 dark:bg-orange-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <ThemeToggle />
            <Link
              to="/contact"
              className="ml-6 flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-all duration-300 px-4 py-2 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:shadow-md ripple-effect"
            >
              <Phone className="w-4 h-4" />
              Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-md ripple-effect"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl mt-2 shadow-lg border border-gray-200/20 dark:border-gray-700/20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium transition-all duration-300 rounded-lg mx-2 hover:shadow-md ripple-effect"
                onClick={(e) => handleNavClick(link.href, e)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 px-6">
              <Link
                to="/contact"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-all duration-300 w-full py-2 px-3 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:shadow-md ripple-effect"
              >
                <Phone className="w-4 h-4" />
                Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;