import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const weddingDate = new Date('2026-02-22T09:15:00');

  const calculate = (): TimeLeft => {
    const diff = weddingDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculate());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
  });

  const units = [
    { label: 'நாட்கள்', sublabel: 'DAYS', value: timeLeft.days },
    { label: 'மணி', sublabel: 'HOURS', value: timeLeft.hours },
    { label: 'நிமிடம்', sublabel: 'MINUTES', value: timeLeft.minutes },
    { label: 'நொடி', sublabel: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0a0500 0%, #1f0a00 30%, #2d0d00 60%, #1f0a00 80%, #0a0500 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 20px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background circles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            borderRadius: '50%',
            border: `1px solid rgba(255,215,0,${0.03 + i * 0.02})`,
            width: `${200 + i * 120}px`,
            height: `${200 + i * 120}px`,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
          }} />
        ))}
      </div>

      {/* Jasmine string SVG */}
      <svg width="100%" height="50" viewBox="0 0 800 50" style={{ maxWidth: 600, marginBottom: 0 }}>
        <path d="M0,25 Q100,5 200,25 Q300,45 400,25 Q500,5 600,25 Q700,45 800,25"
          fill="none" stroke="rgba(255,215,0,0.3)" strokeWidth="1.5" strokeDasharray="6,4" />
        {[50,150,250,350,450,550,650,750].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={25 + Math.sin((i / 7) * Math.PI * 2) * 10} r="4" fill="#FFD700" opacity="0.7" />
            <circle cx={x} cy={25 + Math.sin((i / 7) * Math.PI * 2) * 10} r="2" fill="#fff" opacity="0.9" />
          </g>
        ))}
      </svg>

      {/* Section title */}
      <div style={{
        fontFamily: "'Noto Serif Tamil', serif",
        fontSize: 13,
        color: '#FFA07A',
        letterSpacing: '0.3em',
        marginBottom: 8,
        textAlign: 'center',
      }}>திருமண நாள் வரை</div>

      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(1.6rem, 5vw, 2.8rem)',
        color: '#FFD700',
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 300,
        marginBottom: 16,
        letterSpacing: '0.05em',
      }}>Counting Down to Our Big Day</h2>

      {/* Date */}
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 14,
        color: 'rgba(255,160,122,0.8)',
        letterSpacing: '0.3em',
        marginBottom: 56,
        textAlign: 'center',
      }}>FEBRUARY 22, 2026 · 9:15 AM</div>

      {/* Countdown boxes */}
      <div style={{
        display: 'flex',
        gap: 'clamp(12px, 3vw, 28px)',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 60,
      }}>
        {units.map((unit, i) => (
          <div key={i} style={{
            textAlign: 'center',
            position: 'relative',
          }}>
            {/* Outer glow box */}
            <div style={{
              width: 'clamp(72px, 16vw, 110px)',
              height: 'clamp(80px, 18vw, 120px)',
              background: 'linear-gradient(145deg, rgba(180,30,0,0.8), rgba(80,10,0,0.9))',
              border: '1.5px solid rgba(255,215,0,0.5)',
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 8px 32px rgba(255,107,53,0.25), inset 0 1px 0 rgba(255,215,0,0.2)`,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Flip line */}
              <div style={{
                position: 'absolute',
                left: 0, right: 0,
                top: '50%',
                height: 1,
                background: 'rgba(0,0,0,0.5)',
                zIndex: 2,
              }} />

              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 7vw, 3.2rem)',
                fontWeight: 600,
                color: '#FFD700',
                lineHeight: 1,
                zIndex: 3,
                textShadow: '0 0 20px rgba(255,215,0,0.5)',
                animation: i === 3 ? 'tickAnim 1s ease-in-out infinite' : 'none',
              }}>
                {String(unit.value).padStart(2, '0')}
              </div>
            </div>

            {/* Labels */}
            <div style={{ marginTop: 10 }}>
              <div style={{
                fontFamily: "'Noto Serif Tamil', serif",
                fontSize: 10,
                color: '#FFA07A',
                letterSpacing: '0.1em',
              }}>{unit.label}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 10,
                color: 'rgba(255,215,0,0.5)',
                letterSpacing: '0.25em',
                marginTop: 2,
              }}>{unit.sublabel}</div>
            </div>

            {/* Separator dot */}
            {i < 3 && (
              <div style={{
                position: 'absolute',
                right: `calc(-14px - clamp(6px, 1.5vw, 14px))`,
                top: '35%',
                display: 'flex', flexDirection: 'column', gap: 8,
              }}>
                {[0,1].map(j => (
                  <div key={j} style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#FFD700',
                    opacity: 0.7,
                    animation: `blink 1s step-start infinite`,
                    animationDelay: `${j * 0.5}s`,
                  }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom decorative */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 24, marginBottom: 12, letterSpacing: 8, opacity: 0.7 }}>
          🪔 🌺 🪔
        </div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 13,
          color: 'rgba(255,215,0,0.5)',
          letterSpacing: '0.3em',
          fontStyle: 'italic',
        }}>Join us for the celebration of love</div>
      </div>

      <style>{`
        @keyframes tickAnim {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.95); }
        }
        @keyframes blink {
          0%, 49% { opacity: 0.7; }
          50%, 100% { opacity: 0.2; }
        }
      `}</style>
    </section>
  );
};

export default Countdown;
