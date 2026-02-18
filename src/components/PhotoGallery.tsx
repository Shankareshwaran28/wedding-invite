import React, { useState } from 'react';

interface Photo {
  id: number;
  src: string;
  caption: string;
  color: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: '/img/image1.png',
    caption: 'Every love story is beautiful, but ours is my favorite',
    color: 'from-rose-900 to-red-950',
  },
  {
    id: 2,
    src: '/img/image2.png',
    caption: 'Our adventure of a lifetime begins',
    color: 'from-emerald-900 to-green-950',
  },
  {
    id: 3,
    src: '/img/image3.jpeg',
    caption: 'Found my forever dance partner',
    color: 'from-yellow-800 to-amber-950',
  },
  {
    id: 4,
    src: '/img/image4.jpeg',
    caption: 'Two hearts, one soul',
    color: 'from-orange-900 to-red-950',
  },
  {
    id: 5,
    src: '/img/image5.jpeg',
    caption: 'Together is my favorite place to be',
    color: 'from-pink-900 to-rose-950',
  },
];

const PhotoGallery: React.FC = () => {
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  return (
    <section
      id="gallery"
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(180deg, #050205 0%, #1a0508 30%, #2a0810 60%, #1a0508 80%, #050205 100%)',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(180,30,0,0.08), transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,107,53,0.06), transparent 40%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div
            style={{
              fontFamily: "'Noto Serif Tamil', serif",
              fontSize: 12,
              color: '#FFA07A',
              letterSpacing: '0.3em',
              marginBottom: 8,
            }}
          >
            நினைவுகள்
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              color: '#FFD700',
              fontStyle: 'italic',
              fontWeight: 300,
              marginBottom: 16,
            }}
          >
            Our Gallery
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center' }}>
            <div style={{ flex: 1, maxWidth: 120, height: 1, background: 'linear-gradient(90deg, transparent, #FFD700)' }} />
            <span style={{ color: '#FFD700' }}>✦</span>
            <div style={{ flex: 1, maxWidth: 120, height: 1, background: 'linear-gradient(90deg, #FFD700, transparent)' }} />
          </div>
        </div>

        {/* Gallery */}
        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {photos.map((photo, idx) => {
            const isWide = idx === 0 || idx === photos.length - 1;

            return (
              <div
                key={photo.id}
                className="gallery-card"
                onClick={() => setLightbox(photo)}
                style={{
                  gridColumn: isWide ? 'span 2' : 'span 1',
                  aspectRatio: isWide ? '16 / 9' : '4 / 3',
                  background: `linear-gradient(145deg, ${getColor(photo.color)})`,
                  border: '1px solid rgba(255,215,0,0.2)',
                  borderRadius: 8,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  style={{
                    position: 'absolute',
                    inset: 2,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%)',
                  }}
                />

                {/* Caption */}
                <div style={{ position: 'absolute', bottom: 0, padding: 16 }}>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.2em',
                      color: '#FFA07A',
                    }}
                  >
                    {photo.caption.toUpperCase()}
                  </div>
                </div>

                <div className="zoom-icon" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: `linear-gradient(145deg, ${getColor(lightbox.color)})`,
              padding: 40,
              borderRadius: 12,
              maxWidth: 600,
              width: '90%',
              textAlign: 'center',
            }}
          >
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              style={{ width: '100%', maxHeight: 320, objectFit: 'contain' }}
            />
            <p style={{ color: '#FFA07A', marginTop: 20 }}>{lightbox.caption}</p>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>
        {`
          .gallery-card:hover {
            transform: translateY(-6px) scale(1.03);
            border: 1px solid rgba(255,215,0,0.6);
            box-shadow: 0 14px 45px rgba(255,107,53,0.35);
          }

          .zoom-icon {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.35);
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .gallery-card:hover .zoom-icon {
            opacity: 1;
          }

          /* 📱 Mobile */
          @media (max-width: 640px) {
            .gallery-card:nth-child(n + 4) {
              display: none;
            }

            .gallery-grid {
              grid-template-columns: 1fr !important;
            }

            .gallery-card {
              grid-column: span 1 !important;
              aspect-ratio: 4 / 3 !important;
            }
          }
        `}
      </style>
    </section>
  );
};

function getColor(colorClass: string): string {
  const map: Record<string, string> = {
    'from-rose-900 to-red-950': '#4a0d1a, #2d0510',
    'from-emerald-900 to-green-950': '#0a2d1a, #05100a',
    'from-yellow-800 to-amber-950': '#4a3006, #2d1a02',
    'from-orange-900 to-red-950': '#4a1e06, #2d0a02',
    'from-pink-900 to-rose-950': '#4a0d25, #2d0515',
  };
  return map[colorClass] || '#4a0d1a, #2d0510';
}

export default PhotoGallery;
