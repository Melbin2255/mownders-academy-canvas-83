
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Mownder's Academy</h3>
            <p className="mb-4 text-gray-400">
              Expert educational consultancy specializing in college admissions and career guidance. Transform your academic journey with personalized support.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-400 transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">College Admissions</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">Career Counseling</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">Test Preparation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">Academic Tutoring</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>123 Education Lane, Academic City, CA 94000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@mownders.academy" className="hover:text-primary-400 transition-colors">info@mownders.academy</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-primary-400 transition-colors">(555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p>© {currentYear} Mownder's Academy. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-primary-400 transition-colors px-3">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-primary-400 transition-colors px-3">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
