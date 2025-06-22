import React from 'react';
import { Button } from '@/components/ui/button';

const FooterLinks: React.FC = () => {
  return (
    <p className="text-center text-sm text-muted-foreground">
      Don't have an account?{' '}
      <Button
        variant="link"
        className="h-auto p-0 font-semibold text-primary hover:no-underline"
      >
        SignUp
      </Button>
    </p>
  );
};

export default FooterLinks;
