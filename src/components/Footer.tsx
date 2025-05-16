import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer">
    <p>🌱 Built  by Zeenat with love at Base Africa Buildathon — LandScope © {new Date().getFullYear()}</p>
    <div className="footer-links">
      <a href="https://x.com/maalisun" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
      <a href="https://github.com/yourusername/landscope" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
    </div>
  </footer>
);

export default Footer;
