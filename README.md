# Abdul Qader Dost - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Fullstack Developer, with a focus on AI, Machine Learning, and modern web applications.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Features

- **Hero Section**: Introduction with animated gradient effects
- **About Me**: Detailed biography and professional background
- **Projects**: Showcase of 7+ projects with descriptions and tech stacks
- **Certificates**: Interactive gallery of professional certificates
- **Tech Stack**: Categorized display of technical skills
- **Contact**: Contact form and social media links
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations for enhanced UX

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Abed's Portfolio"
```

2. Install dependencies:
```bash
npm install
```

3. Move certificate PDFs to the public folder:
   - Run the PowerShell script: `.\move-certificates.ps1`
   - Or manually move all PDF certificate files from the root directory to `public/certificates/`

4. Update contact information:
   - Edit `components/Contact.tsx` and replace `your-email@example.com` with your actual email
   - Optionally add your social media links (GitHub, LinkedIn, etc.)

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About me section
│   ├── Projects.tsx        # Projects showcase
│   ├── Certificates.tsx    # Certificates gallery
│   ├── TechStack.tsx       # Tech stack display
│   └── Contact.tsx         # Contact section
├── public/                 # Static assets
│   └── certificates/       # Certificate PDFs
└── package.json
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

## License

© 2025 Abdul Qader Dost. All rights reserved.

