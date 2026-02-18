import React, { useEffect, useState } from 'react';

const InvitationCover: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const KolambPattern = () => (
    <svg width="100%" height="120" viewBox="0 0 800 120" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="kolam" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="40" cy="40" r="3" fill="#FFD700" opacity="0.9" />
          <circle cx="40" cy="40" r="12" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
          <circle cx="40" cy="40" r="22" fill="none" stroke="#FF6B35" strokeWidth="0.8" opacity="0.3" />
          <line x1="0" y1="40" x2="80" y2="40" stroke="#FFD700" strokeWidth="0.5" opacity="0.2" />
          <line x1="40" y1="0" x2="40" y2="80" stroke="#FFD700" strokeWidth="0.5" opacity="0.2" />
          <circle cx="0" cy="0" r="2" fill="#FF6B35" opacity="0.6" />
          <circle cx="80" cy="0" r="2" fill="#FF6B35" opacity="0.6" />
          <circle cx="0" cy="80" r="2" fill="#FF6B35" opacity="0.6" />
          <circle cx="80" cy="80" r="2" fill="#FF6B35" opacity="0.6" />
        </pattern>
      </defs>
      <rect width="800" height="120" fill="url(#kolam)" />
    </svg>
  );

  const TempleArch = () => (
    <svg viewBox="0 0 600 80" width="100%" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="archGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
          <stop offset="20%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="50%" stopColor="#FFA500" stopOpacity="1" />
          <stop offset="80%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Arch curves */}
      {[0,1,2,3,4].map(i => (
        <path key={i}
          d={`M${80 + i*15} 80 Q300 ${-20 + i*10} ${520 - i*15} 80`}
          fill="none"
          stroke={i === 0 ? '#FFD700' : '#FF6B35'}
          strokeWidth={i === 0 ? 2 : 1}
          opacity={1 - i * 0.18}
        />
      ))}
      {/* Decorative dots on arch */}
      {[...Array(11)].map((_, i) => {
        const x = 90 + i * 38;
        const y = 35 + Math.sin((i / 10) * Math.PI) * 30;
        return <circle key={i} cx={x} cy={y} r="3" fill="#FFD700" opacity="0.8" />;
      })}
      <line x1="0" y1="79" x2="600" y2="79" stroke="url(#archGrad)" strokeWidth="2" />
    </svg>
  );

  return (
    <section id="invitation" style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #1a0500 0%, #3d0c02 20%, #6b1a0a 50%, #3d0c02 80%, #1a0500 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', position: 'relative', overflow: 'hidden',
      padding: '40px 20px',
    }}>
      {/* Background texture dots */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.15 }}>
        <KolambPattern />
      </div>

      {/* Gold corner ornaments */}
      {['top-left','top-right','bottom-left','bottom-right'].map((pos, i) => (
        <div key={pos} style={{
          position: 'absolute',
          [pos.includes('top') ? 'top' : 'bottom']: 20,
          [pos.includes('left') ? 'left' : 'right']: 20,
          transform: `rotate(${i * 90}deg)`,
          opacity: 0.7,
        }}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path d="M5,5 L25,5 L25,8 L8,8 L8,25 L5,25 Z" fill="#FFD700" />
            <circle cx="10" cy="10" r="3" fill="#FF6B35" />
            <circle cx="20" cy="5" r="2" fill="#FFD700" />
            <circle cx="5" cy="20" r="2" fill="#FFD700" />
          </svg>
        </div>
      ))}

      {/* Card container */}
      <div style={{
        background: 'linear-gradient(145deg, rgba(180,30,0,0.9) 0%, rgba(120,15,0,0.95) 50%, rgba(180,30,0,0.9) 100%)',
        border: '2px solid rgba(255,215,0,0.6)',
        borderRadius: 4,
        maxWidth: 560,
        width: '100%',
        padding: 0,
        boxShadow: '0 0 60px rgba(255,107,53,0.4), inset 0 0 40px rgba(0,0,0,0.3)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Top arch */}
        <div style={{ background: 'rgba(0,0,0,0.3)', paddingTop: 8 }}>
          <TempleArch />
        </div>

        <div style={{ padding: '30px 40px 40px' }}>
          {/* Auspicious text */}
          <div style={{
            textAlign: 'center',
            fontFamily: "'Noto Serif Tamil', serif",
            fontSize: 13,
            color: '#FFD700',
            letterSpacing: '0.15em',
            marginBottom: 8,
            opacity: 0.9,
          }}>
            சுப திருமண அழைப்பிதழ்
          </div>

          {/* Om */}
          <div style={{ textAlign: 'center', fontSize: 32, color: '#FFD700', marginBottom: 12, textShadow: '0 0 20px rgba(255,215,0,0.6)' }}>
            ॐ
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
            <span style={{ color: '#FFD700', fontSize: 20 }}>✦</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
          </div>

          {/* Names */}
          <div style={{
            textAlign: 'center',
            fontFamily: "'Cormorant Garamond', serif",
            marginBottom: 24,
          }}>
            <div style={{
              fontSize: 'clamp(2rem, 8vw, 3.2rem)',
              color: '#FFD700',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.1,
              textShadow: '0 2px 20px rgba(255,215,0,0.5)',
              animation: 'glow 3s ease-in-out infinite',
            }}>Nagamani</div>
            <div style={{
              fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
              color: '#FFA07A',
              letterSpacing: '0.4em',
              margin: '8px 0',
              fontFamily: "'Cormorant Garamond', serif",
            }}>weds</div>
            <div style={{
              fontSize: 'clamp(2rem, 8vw, 3.2rem)',
              color: '#FFD700',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.1,
              textShadow: '0 2px 20px rgba(255,215,0,0.5)',
              animation: 'glow 3s ease-in-out infinite 0.5s',
            }}>Kirthika</div>
          </div>

          
<div style={{ textAlign: 'center', marginBottom: 24, letterSpacing: 12 }}>
  {'🌸🌺🌸🌺🌸'.split('').map((f, i) => (
    <span
      key={i}
      className="flower"
      style={{
        animationDuration: `${2 + i * 0.3}s`,
        animationDelay: `${i * 0.2}s`,
      }}
    >
      {f}
    </span>
  ))}
</div>


          {/* Details */}
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,215,0,0.2)',
            borderRadius: 4,
            padding: '20px 24px',
            textAlign: 'center',
          }}>
            <div style={{ marginBottom: 16 }}>
              <div style={{
                fontFamily: "'Noto Serif Tamil', serif",
                color: '#FFD700',
                fontSize: 11,
                letterSpacing: '0.2em',
                marginBottom: 4,
                opacity: 0.7,
              }}>திருமண நாள்</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#fff',
                fontSize: 'clamp(1rem, 4vw, 1.4rem)',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}>Sunday, February 22nd, 2026</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#FFA07A',
                fontSize: 13,
                marginTop: 4,
              }}>Muhurtham: 7:30 AM – 09:00 AM</div>
            </div>

            <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)', margin: '12px 0' }} />

            <div>
              <div style={{
                fontFamily: "'Noto Serif Tamil', serif",
                color: '#FFD700',
                fontSize: 11,
                letterSpacing: '0.2em',
                marginBottom: 4,
                opacity: 0.7,
              }}>திருமண இடம்</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#fff',
                fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
                fontWeight: 600,
              }}>Vijaya Kothardarama Thirukovil,</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#FFA07A',
                fontSize: 13,
                marginTop: 4,
              }}>Kulamangalam, Madurai – 625 017</div>
            </div>
          </div>

          {/* Bottom divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
            <span style={{ color: '#FFD700', fontSize: 16 }}>🪔</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
          </div>

          <div style={{
            textAlign: 'center',
            fontFamily: "'Noto Serif Tamil', serif",
            fontSize: 11,
            color: 'rgba(255,215,0,0.6)',
            letterSpacing: '0.1em',
            marginTop: 16,
          }}>
            உங்கள் ஆசீர்வாதம் எங்கள் மகிழ்ச்சி
          </div>
          <div style={{
            textAlign: 'center',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 12,
            color: 'rgba(255,160,122,0.7)',
            letterSpacing: '0.2em',
            fontStyle: 'italic',
          }}>Your blessings are our happiness</div>
        </div>

        {/* Bottom arch (flipped) */}
        <div style={{ background: 'rgba(0,0,0,0.3)', paddingBottom: 8, transform: 'scaleY(-1)' }}>
          <TempleArch />
        </div>
      </div>

      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 2px 20px rgba(255,215,0,0.5); }
          50% { text-shadow: 0 2px 40px rgba(255,215,0,0.9), 0 0 60px rgba(255,107,53,0.4); }
        }
        @keyframes floatFlower {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(10deg); }
        }
      `}</style>
    </section>
  );
};

export default InvitationCover;
