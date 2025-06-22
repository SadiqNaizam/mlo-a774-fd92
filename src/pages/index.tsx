import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginFormCard from '../components/Login/LoginFormCard';

/**
 * The main login page for the application.
 * It utilizes a central layout to position the login form card.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginFormCard />
    </MainAppLayout>
  );
};

export default IndexPage;
