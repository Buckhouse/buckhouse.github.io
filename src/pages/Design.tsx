import React, { useEffect } from 'react';
import '../styles/Design.css';

declare global {
  interface Window {
    delphi?: any;
  }
}

const Design: React.FC = () => {
  useEffect(() => {
    // Load Delphi script dynamically
    const script = document.createElement('script');
    script.src = 'https://embed.delphi.ai/loader.js';
    script.async = true;
    script.id = 'delphi-page-bootstrap';
    document.body.appendChild(script);

    // Set configuration
    window.delphi = { ...(window.delphi ?? {}) };
    window.delphi.page = {
      config: '750b5c63-4cf8-47d5-945d-9ee7f18bf59f',
      overrides: {
        landingPage: 'OVERVIEW',
      },
      container: {
        width: '100%',
        height: '800px',
      },
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="design-page">
      <div id="delphi-page-script"></div>
    </div>
  );
};

export default Design;