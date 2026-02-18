import React, { useState, useRef, useEffect } from 'react';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import InvitationCover from './components/InvitationCover';
import Countdown from './components/Countdown';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

const playlist = [
  '/audio/marriage.mp3',
  '/audio/audio1.mp3',
  '/audio/audio2.mp3',
];

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      const nextTrack = (currentTrack + 1) % playlist.length;
      setCurrentTrack(nextTrack);
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [playing]);

  const toggleAudio = () => {
    setPlaying(!playing);
  };

  return (
    <>
      {!loaded && <Loading onComplete={() => setLoaded(true)} />}
      <div style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.6s ease',
        minHeight: '100vh',
      }}>
        {/* Global Audio Player */}
        <audio 
          ref={audioRef} 
          src={playlist[currentTrack]} 
          preload="auto"
          onLoadedData={() => {
            if (playing) {
              audioRef.current?.play().catch(() => {});
            }
          }}
        />
        
        {/* Audio Control Button */}
        <button
          onClick={toggleAudio}
          style={{
            position: 'fixed',
            bottom: 28,
            right: 28,
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8B0000, #cc2200)',
            color: '#FFD700',
            fontSize: 20,
            cursor: 'pointer',
            border: 'none',
            animation: playing ? 'musicPulse 2s infinite' : 'none',
            zIndex: 999,
          }}
          title="Toggle Music"
        >
          🎶
        </button>

        <Navbar />
        <main>
          <HomePage audioPlaying={playing} onAudioToggle={toggleAudio} />
          <InvitationCover />
          <Countdown />
          <PhotoGallery />
        </main>
        <Footer />
      </div>

      <style>{`
        @keyframes musicPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,107,53,0.4); }
          50% { box-shadow: 0 0 0 12px rgba(255,107,53,0); }
        }
      `}</style>
    </>
  );
};

export default App;
