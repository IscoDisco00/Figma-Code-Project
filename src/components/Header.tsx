import { Button } from "./ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";
// FIXED: Changed the path to the standard public folder reference
import vertixLogo from "/35c21d607d287605838a5dbe9c84182974dc5cfc.png"; 

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img src={vertixLogo} alt="Vertix Group" className="h-8" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#employers"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              For Employers
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>020 8050 7080</span>
            </div>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#employers"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                For Employers
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>020 8050 7080</span>
              </div>
              <Button className="w-full">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}