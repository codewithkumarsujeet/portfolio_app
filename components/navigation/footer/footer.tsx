import Social from '@/components/Ui/social';
import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-slate-900 to-slate-700 text-white py-4 font-Oswald"
    >
      <div className="container px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-[1.25rem] font-semibold mb-2">About Me</h3>
            <p className="text-white text-md">
              I&apos;m a passionate developer creating modern and responsive web
              applications. Let&apos;s connect and build something great!
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-[1.25rem] font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 space-x-4 flex flex-wrap text-md items-center">
              <li>
                <a href="#home" className="text-gray-200 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-200 hover:text-white">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-200 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-[1.25rem] font-semibold mb-2">Follow Me</h3>
            <ul className="flex space-x-4">
              <Social />
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 border-t border-gray-300 pt-2 text-center">
          <p className="text-gray-200 text-xs">
            © 2024 Your Name. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default FooterSection;
