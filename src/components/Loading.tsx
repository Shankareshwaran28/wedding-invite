import React, { useEffect, useState } from 'react';

interface LoadingProps {
  onComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 800);
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'linear-gradient(135deg, #1a0a00 0%, #3d0c02 40%, #6b1a0a 70%, #1a0a00 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 9999,
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.8s ease',
      overflow: 'hidden',
    }}>
      {/* Decorative kolam dots */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(24)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: i % 3 === 0 ? 6 : 4,
            height: i % 3 === 0 ? 6 : 4,
            borderRadius: '50%',
            background: `hsla(${30 + i * 15}, 90%, 60%, 0.4)`,
            left: `${(i * 4.3) % 100}%`,
            top: `${(i * 7.1) % 100}%`,
            animation: `floatDot ${3 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }} />
        ))}
      </div>

      {/* Om symbol */}
      <div style={{
        fontSize: 72,
        color: '#FFD700',
        marginBottom: 8,
        animation: 'pulse 2s ease-in-out infinite',
        textShadow: '0 0 30px rgba(255,215,0,0.8)',
      }}>ॐ</div>

      {/* Kolam SVG pattern */}
      <svg width="200" height="60" viewBox="0 0 200 60" style={{ marginBottom: 16 }}>
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[20,50,80,110,140,170].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={30} r={5} fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />
            <circle cx={x} cy={30} r={9} fill="none" stroke="#FF6B35" strokeWidth="1" opacity="0.5" />
          </g>
        ))}
        <line x1="5" y1="30" x2="195" y2="30" stroke="url(#g1)" strokeWidth="1" opacity="0.6" />
        {[20,50,80,110,140,170].map((x, i) => (
          <g key={`d-${i}`}>
            <path d={`M${x-8},18 L${x},10 L${x+8},18 L${x},50 Z`} fill="none" stroke="#FFD700" strokeWidth="0.8" opacity="0.4" />
          </g>
        ))}
      </svg>

      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(1.2rem, 4vw, 2rem)',
        color: '#FFD700',
        letterSpacing: '0.3em',
        marginBottom: 4,
        fontStyle: 'italic',
      }}>Nagamani & Kirthika</div>

      <div style={{
        fontFamily: "'Noto Serif Tamil', serif",
        fontSize: 14,
        color: '#FFA07A',
        marginBottom: 32,
        letterSpacing: '0.1em',
        opacity: 0.85,
      }}>திருமண அழைப்பிதழ்</div>

      {/* Progress bar */}
      <div style={{
        width: 'min(280px, 70vw)',
        height: 3,
        background: 'rgba(255,255,255,0.1)',
        borderRadius: 2,
        overflow: 'hidden',
        marginBottom: 12,
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #FFD700, #FF6B35, #FFD700)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s linear infinite',
          transition: 'width 0.1s linear',
          borderRadius: 2,
        }} />
      </div>

      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        color: 'rgba(255,215,0,0.7)',
        fontSize: 13,
        letterSpacing: '0.2em',
      }}>Preparing your invitation... {progress}%</div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default Loading;
