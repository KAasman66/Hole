import React from 'react';

const QRCode: React.FC = () => {
  const siteUrl = 'https://kaasman66.github.io/Hole';
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(siteUrl)}`;

  return (
    <div className="qr-container">
      <h2>Scan to open camera app</h2>
      <img src={qrImageUrl} alt="QR Code for camera app" style={{ width: 200, height: 200 }} />
      <p>Or visit: <a href={siteUrl} target="_blank" rel="noopener noreferrer">{siteUrl}</a></p>
      <style>{`
        .qr-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin: 2rem;
        }
        h2 {
          color: #333;
          margin-bottom: 1rem;
        }
        p {
          color: #666;
          margin-top: 1rem;
        }
        a {
          color: #0066cc;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default QRCode; 