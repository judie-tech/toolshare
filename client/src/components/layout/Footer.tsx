import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool as Tool, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company and Mission */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Tool className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">ToolShare</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering communities through resource sharing. Borrow and lend tools to help each other grow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-orange-500">
                  Browse Tools
                </Link>
              </li>
              <li>
                <Link to="/lend" className="text-gray-400 hover:text-orange-500">
                  Lend a Tool
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-orange-500">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-orange-500">
                  My Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-orange-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-orange-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-400 hover:text-orange-500">
                  Safety Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Innovation Hub, <br />
                  Tech Street, Nairobi, <br />
                  Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">+254 (0) 712 345 678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">support@toolshare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 ToolShare. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/terms" className="hover:text-orange-500">Terms</Link>
            <Link to="/privacy" className="hover:text-orange-500">Privacy</Link>
            <Link to="/cookies" className="hover:text-orange-500">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;