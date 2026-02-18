import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';

// Global styles
const globalStyles = `
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background: #0a0200;
    color: #fff;
    font-family: 'Cormorant Garamond', serif;
    overflow-x: hidden;
    cursor: default;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #0a0200;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255,215,0,0.3);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255,215,0,0.6);
  }
  button {
    outline: none;
  }
  section {
    position: relative;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = globalStyles;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return <Component {...pageProps} />;
}
