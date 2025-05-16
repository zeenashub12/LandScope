import React, { useRef, useState } from 'react';
import './app.css';

function App() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [landInfo, setLandInfo] = useState<string[] | null>(null);
  const [walletConnected, setWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    setWalletConnected(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setLandInfo([
          'Land Type: Agricultural',
          'Size: 250 sqm',
          'Location: Ghana - Volta Region',
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app-wrapper">
      <header className="hero">
        <h1> 🌍 LandScope</h1>
        <p className="tagline">In a world where land disputes and unclear ownership records are all too common, we’re using the power of Artificial Intelligence and Blockchain to bring clarity, trust, and empowerment to landowners.

Our platform provides cutting-edge tools that analyze land data from images, detect encroachments, and verify land details in real-time.</p>
        <p className="mission">Detect, Verify, and Mint Land Ownership NFTs</p>
        <button
          className="scroll-btn"
          onClick={() => fileInputRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started
        </button>
      </header>

      <main className="app-container">
        <section className="wallet-section">
          {!walletConnected ? (
            <button className="connect-btn" onClick={handleConnectWallet}>
              Connect Wallet
            </button>
          ) : (
            <p>Wallet Connected ✅</p>
          )}
        </section>

        <div className="card">
          <h2>Upload Land Image</h2>
          <p>Choose an image of the land to analyze and extract land details.</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="file-input"
          />

          {imagePreview && (
            <div className="preview-section">
              <h3>Preview</h3>
              <img src={imagePreview} alt="Land preview" className="preview-img" />
            </div>
          )}

          {landInfo && (
            <div className="land-info">
              <h3>Detected Info</h3>
              <ul>
                {landInfo.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
              <button className="mint-button">Mint NFT</button>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 LandScope. All rights reserved.</p>
        <p> Created by Zeenat at Base Hackathon 2025.</p>
        <div className="footer-links">
  <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
  <a href="https://github.com/yourusername/landscope" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
</div>

      </footer>
    </div>
  );
}

export default App;
