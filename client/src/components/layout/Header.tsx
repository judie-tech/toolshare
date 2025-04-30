import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PenTool as Tool, Bell, LogOut } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';

const Header: React.FC = () => {
  const { notifications, currentUser } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.read).length;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center space-x-2">
            <Tool className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">ToolShare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-orange-600 font-medium">
              Home
            </Link>
            <Link to="/tools" className="text-gray-600 hover:text-orange-600 font-medium">
              Browse Tools
            </Link>
            <Link to="/lend" className="text-gray-600 hover:text-orange-600 font-medium">
              Lend a Tool
            </Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-orange-600 font-medium">
              How It Works
            </Link>
          </nav>

          {/* User menu and actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Link to="/notifications" className="relative text-gray-600 hover:text-orange-600">
              <Bell className="h-6 w-6" />
              {unreadCount > 0 && (
                <Badge 
                  variant="primary"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0"
                >
                  {unreadCount}
                </Badge>
              )}
            </Link>
            
            {/* User avatar */}
            <Link to="/profile" className="flex items-center space-x-2">
              <Avatar 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                size="sm"
              />
              <span className="hidden md:inline text-sm font-medium">
                {currentUser.name}
              </span>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-600 hover:text-orange-600" 
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-orange-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/tools" 
                className="text-gray-600 hover:text-orange-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Browse Tools
              </Link>
              <Link 
                to="/lend" 
                className="text-gray-600 hover:text-orange-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lend a Tool
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-gray-600 hover:text-orange-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/dashboard" 
                className="text-gray-600 hover:text-orange-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Dashboard
              </Link>
              <Link 
                to="/logout" 
                className="flex items-center space-x-2 text-red-600 hover:text-red-800 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;