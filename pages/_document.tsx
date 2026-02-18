import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#8B0000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Noto+Serif+Tamil:wght@400;600&family=Cormorant+Garamond:ital,wght@0,300;0,600;1,400&display=swap" rel="stylesheet" />
      </Head>
      <body style={{
        background: '#0a0200',
        color: '#fff',
        fontFamily: "'Cormorant Garamond', serif",
        overflowX: 'hidden',
        cursor: 'default',
        margin: 0,
        padding: 0,
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
