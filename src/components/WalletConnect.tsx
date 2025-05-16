import React from 'react';

interface WalletConnectProps {
  walletAddress: string | null;
  connectWallet: () => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ walletAddress, connectWallet }) => {
  return (
    <div className="wallet-section">
      <button className="connect-btn" onClick={connectWallet}>
        {walletAddress
          ? `🔗 Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
          : '🔌 Connect Wallet'}
      </button>
    </div>
  );
};

export default WalletConnect;
