import React from 'react';
import '../styles/Design.css';

const Design: React.FC = () => {
  return (
    <div className="design-page">
      <iframe
        src="https://embed.delphi.ai/page/750b5c63-4cf8-47d5-945d-9ee7f18bf59f?landingPage=OVERVIEW"
        title="Delphi Embed"
        className="delphi-iframe"
        frameBorder="0"
        allow="clipboard-write"
      />
    </div>
  );
};

export default Design;