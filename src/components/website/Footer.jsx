import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Structural Fabrication',
    'Piping Works',
    'Mechanical Equipment',
    'Electrical Works',
    'Painting Services',
    'HDPE Fabrication',
    'Labor Supply',
    'ESP Commissioning'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TCS</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">TRIVENI</h3>
                <p className="text-yellow-500 text-sm font-semibold">CONSTRUCTION SOLUTION</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Delivering innovative and high-quality construction services with precision, safety, and efficiency for industrial and structural sectors.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Facebook size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Twitter size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Linkedin size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 pb-2 border-b border-yellow-500 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-yellow-500 transition-colors duration-200 group"
                  >
                    <ArrowRight size={14} className="text-yellow-500 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 pb-2 border-b border-yellow-500 inline-block">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-500 transition-colors duration-200 group">
                    <ArrowRight size={14} className="text-yellow-500 group-hover:translate-x-1 transition-transform" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 pb-2 border-b border-yellow-500 inline-block">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-yellow-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">Elysium, H-905, Shantigram</p>
                  <p className="text-gray-300">Ahmedabad - 382421, Gujarat</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-yellow-500" size={18} />
                <a 
                  href="tel:+918292111172" 
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  +91 8292111172
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-yellow-500" size={18} />
                <a 
                  href="mailto:jyadavst@gmail.com" 
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  jyadavst@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-yellow-500" size={18} />
                <span className="text-gray-300">Mon - Sat: 8:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} TRIVENI INFRA MECH PVT LTD. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;