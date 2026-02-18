import React, { useEffect, useState } from 'react';
import { Mail, Camera, Clock, Calendar } from 'lucide-react';

interface HomePageProps {
  audioPlaying: boolean;
  onAudioToggle: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ audioPlaying, onAudioToggle }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const FloatingPetal = ({ style }: { style: React.CSSProperties }) => (
    <div style={{
      position: 'absolute',
      fontSize: 18,
      animation: 'petalFall 8s linear infinite',
      pointerEvents: 'none',
      ...style,
    }}>🌸</div>
  );

  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #1a0500 0%, #3d0c02 25%, #5c1204 50%, #3d0c02 75%, #1a0500 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '60px 20px',
    }}>
      {/* Floating petals */}
      {[...Array(12)].map((_, i) => (
        <FloatingPetal key={i} style={{
          left: `${(i * 8.3) % 100}%`,
          top: `-5%`,
          animationDelay: `${i * 0.7}s`,
          animationDuration: `${6 + (i % 4)}s`,
          fontSize: 14 + (i % 3) * 6,
          opacity: 0.6,
        }} />
      ))}

      {/* Big decorative rangoli SVG background */}
      <div style={{ position: 'absolute', opacity: 0.06, pointerEvents: 'none' }}>
        <svg width="600" height="600" viewBox="0 0 600 600">
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x = 300 + Math.cos(angle) * 220;
            const y = 300 + Math.sin(angle) * 220;
            return (
              <g key={i}>
                <line x1="300" y1="300" x2={x} y2={y} stroke="#FFD700" strokeWidth="1.5" />
                <circle cx={x} cy={y} r="12" fill="none" stroke="#FFD700" strokeWidth="2" />
                <circle cx={x} cy={y} r="5" fill="#FFD700" />
                <circle cx={300 + Math.cos(angle) * 140} cy={300 + Math.sin(angle) * 140} r="8" fill="#FF6B35" />
              </g>
            );
          })}
          {[80, 140, 200, 260].map(r => (
            <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="#FFD700" strokeWidth="1" />
          ))}
          <circle cx="300" cy="300" r="25" fill="none" stroke="#FFD700" strokeWidth="3" />
          <circle cx="300" cy="300" r="8" fill="#FFD700" />
        </svg>
      </div>

      {/* Main content */}
      <div style={{
        textAlign: 'center', maxWidth: 700, position: 'relative', zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        {/* Top Tamil text */}
        <div style={{
          fontFamily: "'Noto Serif Tamil', serif",
          fontSize: 13,
          color: '#FFA07A',
          letterSpacing: '0.25em',
          marginBottom: 16,
          animation: 'fadeSlideUp 1s ease forwards',
        }}>
          ❁ அழைக்கின்றோம் ❁
        </div>

        {/* Big decorative Om */}
        <div style={{
          fontFamily: 'serif',
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          color: '#FFD700',
          marginBottom: 0,
          lineHeight: 1,
          textShadow: '0 0 40px rgba(255,215,0,0.6), 0 0 80px rgba(255,107,53,0.3)',
          animation: 'omPulse 3s ease-in-out infinite',
        }}>ॐ</div>

        {/* Decorative arch SVG */}
        <svg width="340" height="30" viewBox="0 0 340 30" style={{ marginBottom: 16 }}>
          <path d="M10,28 Q170,0 330,28" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.7" />
          {[30,85,140,170,200,255,310].map((x, i) => (
            <circle key={i} cx={x} cy={14 + (i % 2 === 0 ? 8 : 2)} r="3" fill="#FFD700" opacity="0.6" />
          ))}
        </svg>

        {/* Couple names */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.8rem, 10vw, 5.5rem)',
          color: '#FFD700',
          fontStyle: 'italic',
          fontWeight: 300,
          lineHeight: 1.05,
          marginBottom: 12,
          textShadow: '0 4px 30px rgba(255,215,0,0.4)',
          letterSpacing: '-0.01em',
        }}>
          Nagamani<br />
          <span style={{
            fontSize: '0.45em',
            fontStyle: 'normal',
            letterSpacing: '0.5em',
            color: '#FFA07A',
            display: 'block',
            margin: '4px 0',
            fontFamily: "'Cormorant Garamond', serif",
          }}>& </span>
          Kirthika
        </h1>

        {/* Wedding tagline */}
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(0.85rem, 2.5vw, 1.15rem)',
          color: 'rgba(255,215,0,0.7)',
          letterSpacing: '0.35em',
          marginBottom: 8,
        }}>
          WEDDING INVITATION
        </div>

        <div style={{
          fontFamily: "'Noto Serif Tamil', serif",
          fontSize: 13,
          color: '#FFA07A',
          letterSpacing: '0.1em',
          marginBottom: 40,
        }}>
          பிப்ரவரி 22, 2026 · குலமங்கலம்
        </div>

        {/* Floral divider */}
        <div style={{ fontSize: 20, letterSpacing: 16, marginBottom: 40, opacity: 0.8 }}>
          🌺 🌸 🌺 🌸 🌺
        </div>

        {/* Action buttons */}
        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap',
          justifyContent: 'center', marginBottom: 40,
        }}>
          {[
            { label: 'View Invitation', icon: <Mail size={18} />, target: 'invitation' },
            { label: 'Gallery', icon: <Camera size={18} />, target: 'gallery' },
            { label: 'Countdown', icon: <Clock size={18} />, target: 'countdown' },
          ].map(btn => (
            <button
              key={btn.label}
              onClick={() => scrollTo(btn.target)}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 14,
                letterSpacing: '0.2em',
                padding: '12px 24px',
                background: 'transparent',
                border: '1.5px solid rgba(255,215,0,0.5)',
                color: '#FFD700',
                borderRadius: 4,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,215,0,0.1)';
                (e.currentTarget as HTMLElement).style.borderColor = '#FFD700';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,215,0,0.5)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {btn.icon} {btn.label}
            </button>
          ))}
        </div>

        {/* Date badge */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(180,30,0,0.4)',
          border: '1px solid rgba(255,215,0,0.3)',
          borderRadius: 40,
          padding: '8px 28px',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 16,
          color: 'rgba(255,215,0,0.8)',
          letterSpacing: '0.2em',
        }}>
           <Calendar size={16} />  February 22, 2026 · Kulamangalam
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        opacity: 0.5, animation: 'bounce 2s ease-in-out infinite',
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 11, letterSpacing: '0.3em',
          color: '#FFD700',
        }}>SCROLL</div>
        <div style={{ color: '#FFD700', fontSize: 14 }}>↓</div>
      </div>

      <style>{`
        @keyframes petalFall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes omPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes musicPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,107,53,0.4); }
          50% { box-shadow: 0 0 0 12px rgba(255,107,53,0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HomePage;
