import React, { useEffect } from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginFormCard from '../components/Login/LoginFormCard';

/**
 * The main login page for the application.
 * It utilizes a central layout to position the login form card.
 */
const IndexPage: React.FC = () => {
  // Apply dark mode on mount by adding the 'dark' class to the html element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');

    // Cleanup on unmount
    return () => {
      root.classList.remove('dark');
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <MainAppLayout>
      <LoginFormCard />
    </MainAppLayout>
  );
};

export default IndexPage;