import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Industries', path: '/industries' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'certification & Awards', path: '/certification' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar - Exactly like Nicdark */}
      <div className="bg-gray-900 border-b border-gray-800 py-3 hidden lg:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Left Side - Contact Info */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={14} className="text-yellow-500" />
                <span>+91 8292111172</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={14} className="text-yellow-500" />
                <span>jyadavst@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={14} className="text-yellow-500" />
                <span>Ahmedabad, Gujarat</span>
              </div>
            </div>

            {/* Right Side - Social & Timing */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Clock size={14} className="text-yellow-500" />
                <span>Mon - Sat: 8:00 - 18:00</span>
              </div>
              <div className="w-px h-4 bg-gray-700"></div>
              <div className="flex items-center space-x-3">
                <Facebook size={16} className="text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
                <Twitter size={16} className="text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
                <Instagram size={16} className="text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
                <Linkedin size={16} className="text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-2xl py-3' 
          : 'bg-white py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">TCS</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                  TRIVENI
                </h1>
                <p className="text-sm text-gray-600 font-medium tracking-wider">
                  CONSTRUCTION SOLUTION
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-2 py-3 font-semibold transition-all duration-300 relative group ${
                    isActive(item.path)
                      ? 'text-yellow-600'
                      : 'text-gray-800 hover:text-yellow-600'
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 ${
                      isActive(item.path) ? 'w-full' : 'group-hover:w-full'
                    }`}></span>
                  </span>
                </Link>
              ))}
              
              {/* CTA Button */}
              {/* <Link 
                to="/contact"
                className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Free Quote
              </Link> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
              <div className="container mx-auto px-6 py-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                      <Link
                        to={item.path}
                        className={`block py-4 px-4 font-semibold text-lg transition-all duration-300 ${
                          isActive(item.path)
                            ? 'text-yellow-600 bg-yellow-50 rounded-lg'
                            : 'text-gray-800 hover:text-yellow-600'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                
                {/* Mobile CTA */}
                {/* <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link 
                    to="/contact"
                    className="block text-center bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Free Quote
                  </Link>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;