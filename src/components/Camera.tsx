import React, { useRef, useEffect, useState } from 'react';

const Camera: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            facingMode: 'environment' // Prefer back camera on mobile
          } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setHasPermission(true);
        }
      } catch (err) {
        setError('Camera access denied or not available');
        console.error('Camera error:', err);
      }
    };

    startCamera();

    return () => {
      // Cleanup: stop all tracks when component unmounts
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="camera-container">
      {error && <div className="error">{error}</div>}
      {!error && (
        <video
          ref={videoRef}
          autoPlay
          playsInline // Important for iOS
          style={{ width: '100%', maxWidth: '100vw', height: 'auto' }}
        />
      )}
      <style>{`
        .camera-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: #000;
        }
        .error {
          color: #fff;
          background: rgba(255, 0, 0, 0.7);
          padding: 1rem;
          border-radius: 4px;
          margin: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Camera; 