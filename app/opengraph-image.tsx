import { ImageResponse } from 'next/og';

export const alt = 'Abdul Qader Dost - Fullstack Developer & AI Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(236,72,153,0.28), transparent 55%)',
          color: '#ffffff',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: 'uppercase', color: '#ec4899' }}>
          Portfolio
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2, marginTop: 24 }}>Abdul Qader Dost</div>
        <div style={{ fontSize: 40, color: '#a1a1aa', marginTop: 16 }}>Fullstack Developer & AI Engineer</div>
        <div style={{ fontSize: 28, color: '#71717a', marginTop: 64 }}>abeddost.vercel.app</div>
      </div>
    ),
    size
  );
}
