import { useState, useEffect } from 'react';

interface CookieConsent {
  accepted: boolean;
  timestamp: number;
}

const COOKIE_CONSENT_KEY = 'cookie-consent';

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем localStorage только на клиенте
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      
      if (stored) {
        try {
          const consent: CookieConsent = JSON.parse(stored);
          setHasConsent(consent.accepted);
          setIsVisible(false);
        } catch (error) {
          console.error('Error parsing cookie consent:', error);
          setIsVisible(true);
        }
      } else {
        // Если согласия нет, показываем баннер
        setIsVisible(true);
      }
    }
  }, []);

  const acceptCookies = () => {
    const consent: CookieConsent = {
      accepted: true,
      timestamp: Date.now()
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    setHasConsent(true);
    setIsVisible(false);
  };

  const declineCookies = () => {
    const consent: CookieConsent = {
      accepted: false,
      timestamp: Date.now()
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    setHasConsent(false);
    setIsVisible(false);
  };

  const resetConsent = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    setHasConsent(null);
    setIsVisible(true);
  };

  return {
    hasConsent,
    isVisible,
    acceptCookies,
    declineCookies,
    resetConsent
  };
};



