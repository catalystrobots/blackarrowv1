import React from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <img src="/logo.svg" alt="Black Arrow Forge" className="h-12 w-auto filter brightness-0 invert" />
            <p className="text-gray-400">
              Empowering the next generation of engineers and innovators with precision CNC machining
              and advanced 3D printing technologies. From prototype to production, we're here to bring your ideas to life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Blog', href: '/blog' },
                { name: 'Request CNC Quote', href: '/quote' },
                { name: 'Get Instant 3D Print Quote', href: '/instant-quote' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:info@blackarrowforge.com" className="text-gray-400 hover:text-white transition-colors">
                  info@blackarrowforge.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">
                  2258 Holly Springs Pkwy<br />
                  Canton, GA 30115
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Black Arrow Forge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}