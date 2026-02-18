import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: 'home' },
    { label: 'Invitation', href: 'invitation' },
    { label: 'Countdown', href: 'countdown' },
    { label: 'Gallery', href: 'gallery' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      background: scrolled
        ? 'rgba(20,4,0,0.95)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,215,0,0.2)' : 'none',
      transition: 'all 0.4s ease',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div
          onClick={() => scrollTo('home')}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20,
            fontStyle: 'italic',
            color: '#FFD700',
            cursor: 'pointer',
            letterSpacing: '0.05em',
          }}
        >
          N & K
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 32 }} className="nav-links">
          {links.map(link => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              style={{
                background: 'none', border: 'none',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 14,
                letterSpacing: '0.25em',
                color: 'rgba(255,215,0,0.8)',
                cursor: 'pointer',
                transition: 'color 0.2s',
                padding: '4px 0',
                position: 'relative',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFD700')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,215,0,0.8)')}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none', border: 'none',
            color: '#FFD700', fontSize: 22, cursor: 'pointer',
          }}
          className="hamburger"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(20,4,0,0.98)',
          borderTop: '1px solid rgba(255,215,0,0.2)',
          padding: '20px 24px',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {links.map(link => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              style={{
                background: 'none', border: 'none',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18, color: '#FFD700',
                cursor: 'pointer', textAlign: 'left',
                letterSpacing: '0.2em', padding: '4px 0',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 600px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
