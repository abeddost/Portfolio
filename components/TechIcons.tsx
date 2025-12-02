'use client';

// HTML5 Icon - Orange shield with "5"
export function HTML5Icon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.263 27H19.569z" fill="#E34F26"/>
      <path d="M64 118.51l29.439-7.85 6.934-76.921H64v84.771z" fill="#EF652A"/>
      <path d="M64 66.22H48.042l-1.102-12.331H64V41.331H29.639l.276 3.078 2.838 31.811H64V66.22z" fill="#EBEBEB"/>
      <path d="M64 95.89l-.049.013-12.309-3.328-.788-8.823H38.813l1.55 17.37 22.664 6.292.026-.007v-11.517z" fill="#EBEBEB"/>
      <path d="M47.714 43.409l1.102 12.331H64V43.409H47.714z" fill="#FFF"/>
      <path d="M64 66.22v12.331h13.794l-1.298 14.538-12.496 3.331-.013.004V95.89l12.309-3.328.157-1.76 1.21-13.55.798-8.823H64z" fill="#FFF"/>
      <path d="M64 27v14.331h28.338l.255-2.849.54-6.03.276-3.078H64z" fill="#FFF"/>
      <path d="M64 27H29.639l.276 3.078.54 6.03.255 2.849H64V27z" fill="#EBEBEB"/>
      <text x="64" y="90" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">5</text>
    </svg>
  );
}

// CSS3 Icon - Blue shield with "3"
export function CSS3Icon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M19.67 26l8.069 89.493 36.206 10.035 36.307-9.999L108.33 26H19.67z" fill="#1572B6"/>
      <path d="M64 117.528l29.01-7.997 6.624-73.531H64v81.528z" fill="#33A9DC"/>
      <path d="M64 66.22H48.818l-1.102-12.331H64V41.331H29.639l.276 3.078 2.838 31.811H64V66.22z" fill="#EBEBEB"/>
      <path d="M64 95.89l-.049.013-12.309-3.328-.788-8.823H38.813l1.55 17.37 22.664 6.292.026-.007v-11.517z" fill="#EBEBEB"/>
      <path d="M47.714 43.409l1.102 12.331H64V43.409H47.714z" fill="#FFF"/>
      <path d="M64 66.22v12.331h13.794l-1.298 14.538-12.496 3.331-.013.004V95.89l12.309-3.328.157-1.76 1.21-13.55.798-8.823H64z" fill="#FFF"/>
      <path d="M64 27v14.331h28.338l.255-2.849.54-6.03.276-3.078H64z" fill="#FFF"/>
      <path d="M64 27H29.639l.276 3.078.54 6.03.255 2.849H64V27z" fill="#EBEBEB"/>
      <text x="64" y="90" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">3</text>
    </svg>
  );
}

// JavaScript Icon - Yellow square with "JS"
export function JavaScriptIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="8" fill="#F7DF1E"/>
      <text x="64" y="80" fontSize="36" fontWeight="bold" fill="#000" textAnchor="middle" fontFamily="Arial">JS</text>
    </svg>
  );
}

// Tailwind CSS Icon - Teal wavy lines
export function TailwindIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M64 44.8c-17.067 0-27.733 8.533-32 25.6 6.4-8.533 13.867-11.733 22.4-9.6 4.87 1.244 8.35 4.84 12.2 8.84 6.1 6.4 13.2 13.867 28.8 13.867 17.067 0 27.733-8.533 32-25.6-6.4 8.533-13.867 11.733-22.4 9.6-4.87-1.244-8.35-4.84-12.2-8.84-6.1-6.4-13.2-13.867-28.8-13.867zM32 83.2c-17.067 0-27.733 8.533-32 25.6 6.4-8.533 13.867-11.733 22.4-9.6 4.87 1.244 8.35 4.84 12.2 8.84 6.1 6.4 13.2 13.867 28.8 13.867 17.067 0 27.733-8.533 32-25.6-6.4 8.533-13.867 11.733-22.4 9.6-4.87-1.244-8.35-4.84-12.2-8.84-6.1-6.4-13.2-13.867-28.8-13.867z" fill="#06B6D4"/>
    </svg>
  );
}

// Express.js Icon - Purple/blue gradient "ex"
export function ExpressIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="8" fill="url(#expressGradient)"/>
      <defs>
        <linearGradient id="expressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C5CE7"/>
          <stop offset="100%" stopColor="#0984E3"/>
        </linearGradient>
      </defs>
      <text x="64" y="80" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">ex</text>
    </svg>
  );
}

// Node.js Icon - Green hexagon with "JS"
export function NodeJSIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M64 8L8 32v64l56 24 56-24V32L64 8z" fill="#339933" stroke="#339933" strokeWidth="2"/>
      <text x="64" y="80" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">JS</text>
    </svg>
  );
}

// React Icon - Cyan atomic symbol
export function ReactIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="8" fill="#61DAFB"/>
      <ellipse cx="64" cy="64" rx="40" ry="12" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(0 64 64)"/>
      <ellipse cx="64" cy="64" rx="40" ry="12" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 64 64)"/>
      <ellipse cx="64" cy="64" rx="40" ry="12" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(120 64 64)"/>
    </svg>
  );
}

// MongoDB Icon - Green leaf
export function MongoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M64 20c-15 0-25 10-25 25v38c0 15 10 25 25 25s25-10 25-25V45c0-15-10-25-25-25z" fill="#47A248"/>
      <path d="M64 20l-15 50 15 10 15-10z" fill="#589636"/>
    </svg>
  );
}

// JWT Icon - Multi-colored starburst
export function JWTIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="30" fill="#000"/>
      <path d="M64 34l10 20 20 10-20 10-10 20-10-20-20-10 20-10z" fill="#FB015B"/>
      <path d="M64 54l5 10 10 5-10 5-5 10-5-10-10-5 10-5z" fill="#00F9FF"/>
      <path d="M64 64l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill="#FFA800"/>
    </svg>
  );
}

// PostgreSQL Icon - Blue elephant
export function PostgresIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <ellipse cx="64" cy="80" rx="40" ry="30" fill="#336791"/>
      <circle cx="50" cy="70" r="8" fill="#336791"/>
      <circle cx="78" cy="70" r="8" fill="#336791"/>
      <path d="M64 50 L54 70 L74 70 Z" fill="#336791"/>
      <path d="M64 30 L60 50 L68 50 Z" fill="#336791"/>
      <path d="M50 70 Q45 75 50 80" stroke="#336791" strokeWidth="3" fill="none"/>
      <path d="M78 70 Q83 75 78 80" stroke="#336791" strokeWidth="3" fill="none"/>
    </svg>
  );
}

// TypeScript Icon - Blue square with "TS"
export function TypeScriptIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="8" fill="#3178C6"/>
      <text x="64" y="80" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">TS</text>
    </svg>
  );
}

// Docker Icon - Blue whale
export function DockerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M30 80 Q20 70 20 60 Q20 50 30 50 Q40 50 50 60 Q60 70 50 80 Q40 90 30 80" fill="#0DB7ED"/>
      <rect x="25" y="55" width="8" height="8" fill="#0DB7ED"/>
      <rect x="35" y="55" width="8" height="8" fill="#0DB7ED"/>
      <rect x="45" y="55" width="8" height="8" fill="#0DB7ED"/>
      <rect x="30" y="65" width="8" height="8" fill="#0DB7ED"/>
      <rect x="40" y="65" width="8" height="8" fill="#0DB7ED"/>
      <path d="M50 75 L90 75 L90 85 L50 85 Z" fill="#0DB7ED"/>
    </svg>
  );
}

// Next.js Icon - Black/gray
export function NextJSIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="8" fill="#000"/>
      <path d="M64 40 L90 88 L38 88 Z" fill="#fff"/>
    </svg>
  );
}

// Python Icon
export function PythonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <linearGradient id="pythonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3776AB"/>
        <stop offset="100%" stopColor="#FFD43B"/>
      </linearGradient>
      <rect width="128" height="128" rx="8" fill="url(#pythonGradient)"/>
      <text x="64" y="80" fontSize="28" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">Py</text>
    </svg>
  );
}

// Git/GitHub Icon
export function GitIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="8" fill="#F05032"/>
      <path d="M64 30 L40 50 L64 70 L88 50 Z" fill="white"/>
      <circle cx="40" cy="50" r="8" fill="white"/>
      <circle cx="88" cy="50" r="8" fill="white"/>
      <circle cx="64" cy="90" r="8" fill="white"/>
    </svg>
  );
}

// Firebase Icon
export function FirebaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <linearGradient id="firebaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFCA28"/>
        <stop offset="100%" stopColor="#FFA000"/>
      </linearGradient>
      <rect width="128" height="128" rx="8" fill="url(#firebaseGradient)"/>
      <path d="M64 20 L40 80 L64 100 L88 80 Z" fill="#FF6F00"/>
    </svg>
  );
}

// TensorFlow Icon
export function TensorFlowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="8" fill="#FF6F00"/>
      <text x="64" y="80" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">TF</text>
    </svg>
  );
}

// PyTorch Icon
export function PyTorchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <linearGradient id="pytorchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EE4C2C"/>
        <stop offset="100%" stopColor="#F7931E"/>
      </linearGradient>
      <rect width="128" height="128" rx="8" fill="url(#pytorchGradient)"/>
      <text x="64" y="80" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">PT</text>
    </svg>
  );
}




