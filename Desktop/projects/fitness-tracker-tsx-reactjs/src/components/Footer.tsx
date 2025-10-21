import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} FitTrack | Stay Fit, Stay healthy</p>
    </footer>
  );
};

export default Footer;
