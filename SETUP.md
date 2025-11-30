# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Move Certificates**
   - Run: `.\move-certificates.ps1`
   - Or manually copy all PDF files from root to `public/certificates/`

3. **Update Contact Information**
   - Edit `components/Contact.tsx`
   - Replace `your-email@example.com` with your actual email address
   - Optionally uncomment and add your social media links

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Deployment to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live!

## Customization

- **Colors**: Edit `tailwind.config.ts` to change the color scheme
- **Content**: Update components in the `components/` folder
- **Styling**: Modify `app/globals.css` for global styles

