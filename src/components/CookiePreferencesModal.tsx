import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch"; // Assuming you have a Switch component
import { X, Settings, CheckCircle } from 'lucide-react';

// --- Cookie Logic (Simplified for demonstration) ---
interface CookieSettings {
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  // Necessary is always true
}

const COOKIE_KEY = 'cookieSettings';

const getInitialSettings = (): CookieSettings => {
  if (typeof window === 'undefined') {
    return { analytics: false, marketing: false, preferences: false };
  }
  const savedSettings = localStorage.getItem(COOKIE_KEY);
  if (savedSettings) {
    return JSON.parse(savedSettings);
  }
  // Default non-essential cookies to off until accepted
  return { analytics: false, marketing: false, preferences: false };
};

const saveSettings = (settings: CookieSettings) => {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(settings));
  // Set main consent flag to acknowledge preference was set
  localStorage.setItem('cookieConsent', 'accepted'); 
};
// ----------------------------------------------------

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState<CookieSettings>(getInitialSettings);
  const [isSaved, setIsSaved] = useState(false);

  // Synchronize component state when opened
  useEffect(() => {
    if (isOpen) {
      setSettings(getInitialSettings());
      setIsSaved(false);
    }
  }, [isOpen]);

  const handleToggle = (key: keyof CookieSettings, checked: boolean) => {
    setSettings(prev => ({ ...prev, [key]: checked }));
  };

  const handleSave = () => {
    saveSettings(settings);
    setIsSaved(true);
    // Automatically close the modal after a short delay to show success
    setTimeout(onClose, 1000); 
  };
  
  // Set all non-essential cookies to true
  const handleAcceptAll = () => {
    const allSettings: CookieSettings = { analytics: true, marketing: true, preferences: true };
    saveSettings(allSettings);
    setSettings(allSettings);
    setIsSaved(true);
    setTimeout(onClose, 500);
  };

  if (!isOpen) {
    return null;
  }

  return (
    // Modal Overlay (Fixed, covers entire screen)
    <div className="fixed inset-0 z-[10000] bg-foreground/60 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in-up">
      
      {/* Modal Content Card */}
      <Card className="w-full max-w-lg shadow-elevation animate-scale-in">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <Settings className="w-6 h-6 text-primary" />
            <CardTitle className="text-2xl font-serif font-bold">Manage Cookie Preferences</CardTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground">
            <X className="w-5 h-5" />
            <span className="sr-only">Close settings</span>
          </Button>
        </CardHeader>

        <CardContent className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            Select which categories of cookies you consent to. Necessary cookies cannot be disabled.
          </p>

          {/* Cookie Category List */}
          <div className="space-y-4 border rounded-lg p-4 bg-background">
            
            {/* 1. Necessary Cookies (Required) */}
            <div className="flex items-center justify-between py-2">
              <div>
                <h4 className="font-semibold text-foreground">Strictly Necessary</h4>
                <p className="text-xs text-muted-foreground">Required for the website to function properly (e.g., security, session management).</p>
              </div>
              <Switch checked={true} disabled className="data-[state=checked]:bg-primary" />
            </div>
            
            {/* Divider */}
            <div className="border-t border-border"></div>

            {/* 2. Analytics/Performance Cookies */}
            <div className="flex items-center justify-between py-2">
              <div>
                <h4 className="font-semibold text-foreground">Analytics & Performance</h4>
                <p className="text-xs text-muted-foreground">Allows us to count visits and traffic sources to improve site performance.</p>
              </div>
              <Switch 
                checked={settings.analytics} 
                onCheckedChange={(checked) => handleToggle('analytics', checked)} 
                className="data-[state=checked]:bg-primary" 
              />
            </div>
            
            {/* Divider */}
            <div className="border-t border-border"></div>

            {/* 3. Marketing Cookies */}
            <div className="flex items-center justify-between py-2">
              <div>
                <h4 className="font-semibold text-foreground">Marketing</h4>
                <p className="text-xs text-muted-foreground">Used by third parties to display relevant advertisements across the internet.</p>
              </div>
              <Switch 
                checked={settings.marketing} 
                onCheckedChange={(checked) => handleToggle('marketing', checked)} 
                className="data-[state=checked]:bg-primary" 
              />
            </div>
            
             {/* Divider */}
            <div className="border-t border-border"></div>

            {/* 4. Preferences/Functionality Cookies */}
            <div className="flex items-center justify-between py-2">
              <div>
                <h4 className="font-semibold text-foreground">Preferences</h4>
                <p className="text-xs text-muted-foreground">Remembers choices you make to provide enhanced, more personalized features.</p>
              </div>
              <Switch 
                checked={settings.preferences} 
                onCheckedChange={(checked) => handleToggle('preferences', checked)} 
                className="data-[state=checked]:bg-primary" 
              />
            </div>
          </div>
          
          {/* Save & Accept Buttons */}
          <div className="flex justify-between items-center pt-4">
            <Button variant="secondary" onClick={handleAcceptAll}>
                Accept All
            </Button>

            <div className='flex space-x-3 items-center'>
              {isSaved && (
                <span className="text-sm text-primary flex items-center space-x-1">
                    <CheckCircle className='w-4 h-4' />
                    <span>Saved!</span>
                </span>
              )}
              <Button onClick={handleSave} disabled={isSaved}>
                  Save Preferences
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookiePreferencesModal;