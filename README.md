# CampusPe website rebuild

This is a multi-section responsive Next.js recreation based on the uploaded full-page reference screenshot. It includes the campus-to-career hero, dashboard mockup, partner strip, opportunity feed, resume upload UI, student/recruiter sections, campus drive features, app mockups, support CTA, signup interaction, FAQ and footer.

## Run locally
Requires Node.js 20.9+ and npm.
```bash
npm install
npm run dev
```
Open http://localhost:3000.

Check production build:
```bash
npm run build
```

## Push to GitHub
Create an empty GitHub repository and run:
```bash
git init
git add .
git commit -m "Rebuild CampusPe landing page from reference"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/campuspe-landing-page.git
git push -u origin main
```
If `origin` already exists, use `git remote set-url origin https://github.com/YOUR_USERNAME/campuspe-landing-page.git`.

## Deploy on Vercel
Import the GitHub repository at https://vercel.com/new, then click Deploy. Or:
```bash
npm i -g vercel
vercel
vercel --prod
```

## Notes
- The screenshot is a long, narrow reference image. This project follows its overall page structure, blue/white visual system, card layouts, app mockups, footer and content hierarchy. Fine-grained pixel matching should be done against the original Figma file and desktop/mobile frames.
- Logos and phone UI are recreated as CSS mockups because the screenshot does not provide separate source assets.
- Resume selection is a front-end interaction only. Connect a secure upload API before storing files.
- The signup form shows a local success state and does not persist or send submissions. Connect an API or mailing-list provider before collecting real registrations.
