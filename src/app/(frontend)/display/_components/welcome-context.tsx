import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Create a context with a default value
const WelcomeContext = createContext<{
  isVisible: boolean;
  toggleVisibility: () => void;
} | undefined>(undefined);

export const WelcomeProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle function to flip the boolean value
  const toggleVisibility = () => {
    setIsVisible(true);
    console.log(isVisible)
  };

    // Reset the visibility to false after 5 seconds
    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setIsVisible(false); // Reset to false after 5 seconds
        }, 5000);
  
        // Cleanup timer on unmount or when isVisible changes
        return () => clearTimeout(timer);
      }
    }, [isVisible]);

  return (
    <WelcomeContext.Provider value={{ isVisible, toggleVisibility }}>
      {children}
    </WelcomeContext.Provider>
  );
};

// Custom hook to use the WelcomeContext
export const useWelcome = () => {
  const context = useContext(WelcomeContext);
  if (!context) {
    throw new Error('useWelcome must be used within a WelcomeProvider');
  }
  return context;
};
