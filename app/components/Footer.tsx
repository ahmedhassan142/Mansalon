import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Gentleman's</span>
                <span className="text-xl font-bold text-amber-400">Grooming</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium men's grooming salon offering expert haircuts, beard styling, and traditional barber services for the modern gentleman.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <a href="tel:+15551234567" className="hover:text-amber-400 transition-colors">(555) 123-4567</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Services</h3>
            <ul className="space-y-2">
              {['Classic Haircut', 'Beard Grooming', 'Hair Coloring', 'Royal Shave', 'Hair Treatment', 'Complete Package'].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">123 Barber Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-amber-400">(555) 123-4567</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a href="mailto:info@gentsgrooming.com" className="text-gray-300 hover:text-amber-400">info@gentsgrooming.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">Mon-Sat: 9AM-7PM, Sun: 10AM-5PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Gentleman's Grooming. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}