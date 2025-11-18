import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { Button } from "@/components/ui/button";
import { X, Cookie } from 'lucide-react';

// Utility function to check for consent
const hasAcceptedCookies = () => localStorage.getItem('cookieConsent') === 'accepted';

// Utility function to set consent
const setCookieConsent = () => localStorage.setItem('cookieConsent', 'accepted');

// Define props interface for the function passed from App.tsx
interface CookieToastProps {
    onManagePreferences: () => void;
}

const CookieToast: React.FC<CookieToastProps> = ({ onManagePreferences }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAcceptedCookies()) {
        setIsVisible(true);
      }
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setCookieConsent();
    setIsVisible(false);
  };

  /**
   * Hides the toast and calls the function from App.tsx to open the modal.
   */
  const handleManagePreferences = () => {
    setIsVisible(false);
    onManagePreferences(); 
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-toast-container">
      <div 
        className="
          bg-card text-card-foreground p-5 shadow-elevation rounded-xl 
          border border-border flex flex-col gap-4 w-full md:max-w-md 
          animate-fade-in-up
        "
      >
        {/* Header & Close Button */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Cookie className="w-6 h-6 text-accent flex-shrink-0" />
            <h3 className="text-lg font-serif font-semibold">We Value Your Privacy</h3>
          </div>
          {/* Close button now uses the Manage Preferences handler */}
          <button onClick={handleManagePreferences} className="text-muted-foreground hover:text-foreground transition-colors p-1 -mt-1 -mr-1">
            <X className="w-5 h-5" />
            <span className="sr-only">Close cookie banner</span>
          </button>
        </div>

        {/* Content */}
        <p className="text-sm text-muted-foreground">
          We use cookies and similar technologies to enhance user experience, analyze site usage, and support our operations. 
          By clicking 'Accept', you agree to the use of these technologies. Read our 
          <Link to="/privacy" className="text-primary hover:text-accent font-medium ml-1 underline transition-colors">Privacy Policy</Link> for more details.
        </p>

        {/* Actions (Optimized for space) */}
        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleManagePreferences} 
            className="text-primary hover:bg-primary/10 order-2 sm:order-1"
          >
            Manage Preferences
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            onClick={handleAccept}
            className="bg-primary hover:bg-primary/90 order-1 sm:order-2"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieToast;