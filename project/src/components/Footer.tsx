import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">GrowthSpire</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses to achieve exponential growth through innovative marketing strategies and data-driven campaigns.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Social Media</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Content Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">PPC Advertising</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors">Blog</Link></li>
              <li><a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-emerald-400" />
                <span className="text-gray-300">saurav@growthspire.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-gray-300">+977 9813984912</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-emerald-400" />
                <span className="text-gray-300">Putali Sadak , Kathmandu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 GrowthSpire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;