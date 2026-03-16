import { Link } from "react-router-dom";
import { Mail, Phone, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-background mt-8 md:mt-16">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Brand and description - takes more space on desktop */}
          <div className="md:col-span-6 space-y-2 md:space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              PP Collections
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xl">
              PP Collections is Kerala's finest curated fashion destination, built to deliver
              simplicity, elegance, and a premium shopping experience. With a thoughtfully
              designed collection, it transforms the way you discover and shop for fashion.
            </p>
          </div>

          {/* Legal section */}
          <div className="md:col-span-3 space-y-2 md:space-y-4">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">
              Legal
            </p>
            <div className="space-y-1.5 md:space-y-3">
              <div>
                <Link
                  to="/privacy"
                  className="text-xs md:text-sm text-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link
                  to="/terms"
                  className="text-xs md:text-sm text-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div className="md:col-span-3 space-y-2 md:space-y-4">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">
              Contact
            </p>
            <div className="space-y-1.5 md:space-y-3">
              <a
                href="mailto:hello@ppcollections.in"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                <span className="text-xs md:text-sm">hello@ppcollections.in</span>
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                <span className="text-xs md:text-sm">+91 12345 67890</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div
          className="max-w-7xl mx-auto px-3 md:px-4 py-3 md:py-4
                  flex flex-col md:flex-row 
                  items-center md:items-center 
                  justify-center md:justify-between 
                  text-center md:text-left
                  gap-2 md:gap-4 
                  text-[10px] md:text-xs text-gray-500 dark:text-gray-400"
        >
          {/* Copyright */}
          <p>© {new Date().getFullYear()} PP Collections. All rights reserved.</p>

          {/* Right Section */}
          <div
            className="flex flex-col sm:flex-row 
                    items-center 
                    gap-1.5 sm:gap-4"
          >
            <span className="flex items-center gap-1 text-[11px] md:text-sm text-gray-600 dark:text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Enterprise-Grade Security
            </span>

            <span className="text-[11px] md:text-sm text-gray-600 dark:text-gray-300">
              Built & Maintained by AioneSpark TechHive LLP
            </span>

            <span className="text-[11px] md:text-sm text-green-800 dark:text-green-400">
              Version 1.0.0
            </span>
          </div>
        </div>
      </div>

      {/* PWA safe area */}
      <div className="pb-safe" />
    </footer>
  );
};

export default Footer;