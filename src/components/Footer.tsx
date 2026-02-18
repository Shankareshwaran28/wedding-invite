import React from 'react';

const Footer: React.FC = () => (
  <footer style={{
    background: '#050200',
    borderTop: '1px solid rgba(255,215,0,0.15)',
    padding: '48px 20px 32px',
    textAlign: 'center',
  }}>
    <div style={{ fontSize: 32, marginBottom: 12 }}>🪔</div>
    <div style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 'clamp(1.2rem, 4vw, 2rem)',
      color: '#FFD700',
      fontStyle: 'italic',
      marginBottom: 8,
    }}>Nagamani & Kirthika</div>
    <div style={{
      fontFamily: "'Noto Serif Tamil', serif",
      fontSize: 13,
      color: 'rgba(255,160,122,0.7)',
      marginBottom: 20,
      letterSpacing: '0.1em',
    }}>February 22, 2026 · Vijaya Kothardarama Thirukovil,, Kulamangalam</div>
    <div style={{
      display: 'flex', justifyContent: 'center', gap: 16,
      marginBottom: 24, fontSize: 18,
    }}>
      {['🌺','✦','🌸','✦','🌺'].map((s, i) => (
        <span key={i} style={{ color: '#FFD700', opacity: 0.6 }}>{s}</span>
      ))}
    </div>
    <div style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 12,
      color: 'rgba(255,215,0,0.3)',
      letterSpacing: '0.2em',
    }}>
      Developed by ❤️ Shankar
    </div>
  </footer>
);

export default Footer;
