
import { Link } from "react-router-dom";
import { LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-health-secondary text-xl font-bold">
                W.O.M.B
              </Link>
              <span className="ml-2 text-xs text-gray-500">Wellness Optimal Mind Body</span>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/dashboard" className="text-gray-700 hover:text-health-primary px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-health-primary px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-health-primary px-3 py-2 rounded-md text-sm font-medium">
              News
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-health-primary px-3 py-2 rounded-md text-sm font-medium">
              Contact Us
            </Link>
            <Link to="/live-session" className="text-gray-700 hover:text-health-primary px-3 py-2 rounded-md text-sm font-medium">
              Live Session
            </Link>
            
            {isAuthenticated ? (
              <button 
                onClick={logout}
                className="ml-4 flex items-center gap-1 text-sm px-4 py-2 leading-none border rounded text-health-danger border-health-danger hover:border-transparent hover:text-white hover:bg-health-danger"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            ) : (
              <Link 
                to="/login"
                className="ml-4 text-sm px-4 py-2 leading-none border rounded text-health-primary border-health-primary hover:border-transparent hover:text-white hover:bg-health-primary"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-health-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/dashboard" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-health-primary"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-health-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/news" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-health-primary"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-health-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/live-session" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-health-primary"
              onClick={() => setIsOpen(false)}
            >
              Live Session
            </Link>
            
            {isAuthenticated ? (
              <button 
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-1 mt-2 px-3 py-2 rounded-md text-base font-medium text-health-danger hover:bg-red-50"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            ) : (
              <Link 
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-health-primary hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
