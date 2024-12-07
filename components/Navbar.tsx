import { Menu, X, HardHat } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <HardHat className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">W5 Contractors</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-orange-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-900 hover:text-orange-600 transition-colors">Services</a>
              <a href="#projects" className="text-gray-900 hover:text-orange-600 transition-colors">Projects</a>
              <a href="#team" className="text-gray-900 hover:text-orange-600 transition-colors">Our Team</a>
              <a href="#contact" className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">Contact Us</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-orange-600">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-900 hover:text-orange-600">Services</a>
            <a href="#projects" className="block px-3 py-2 text-gray-900 hover:text-orange-600">Projects</a>
            <a href="#team" className="block px-3 py-2 text-gray-900 hover:text-orange-600">Our Team</a>
            <a href="#contact" className="block px-3 py-2 text-orange-600 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}