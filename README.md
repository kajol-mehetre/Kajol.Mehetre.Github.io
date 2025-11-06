# 🎮 VR Developer Portfolio

A stunning, game-inspired portfolio website showcasing your work in Virtual Reality, Machine Learning, and Software Testing.

## ✨ Features

- **Immersive Hero Section** - Profile picture, about section, and social links
- **Credentials & Honors** - Split-screen showcase of certifications and achievements
- **Tech Categories** - Projects organized by VR, ML, and Software Testing
- **Project Showcases** - Detailed pages with video demos and tech stacks
- **Personality Assessment** - Visual representation of your professional strengths
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Fully Responsive** - Optimized for desktop, tablet, and mobile
- **Future-Ready** - Chatbot placeholder for AI integration

## 🚀 Quick Deploy to GitHub Pages (FREE)

### Step 1: Build Your Portfolio

```bash
./build-for-github.sh
```

### Step 2: Follow the Deployment Guide

See **`GITHUB_PAGES_DEPLOYMENT.md`** for complete step-by-step instructions.

**Quick version**: See **`QUICK_START.md`**

---

## 📝 Updating Your Portfolio Content

All your content is stored in easy-to-edit JSON files. No coding required!

### Update Profile Information

Edit: `client/src/data/profile.json`

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "about": "Your bio...",
  "email": "your@email.com",
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername",
  "medium": "https://medium.com/@yourusername"
}
```

### Add or Edit Projects

Edit: `client/src/data/projects.json`

```json
{
  "id": "unique-project-id",
  "category": "Virtual Reality",
  "title": "Project Title",
  "description": "Brief description of your project",
  "techStack": ["Tech1", "Tech2", "Tech3"],
  "videoUrl": "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  "mediumUrl": "https://medium.com/your-article-link",
  "githubUrl": "https://github.com/yourusername/project-repo",
  "thumbnail": "vr-1",
  "featured": true
}
```

**Categories available:**
- `"Virtual Reality"`
- `"Machine Learning"`
- `"Software Testing"`

### Update Personality Traits

Edit: `client/src/data/personality.json`

```json
{
  "traits": [
    {
      "name": "Trait Name",
      "level": 95,
      "description": "Description of this trait"
    }
  ]
}
```

### Add or Edit Certificates

Edit: `client/src/data/certificates.json`

```json
{
  "id": "cert-unique-id",
  "title": "Certificate or Course Name",
  "organization": "Issuing Organization",
  "description": "Brief 2-3 line description of what you learned or accomplished in this certification.",
  "year": "2024",
  "linkLabel": "View Certificate",
  "linkUrl": "https://example.com/your-certificate-link"
}
```

**Optional fields:**
- `linkLabel` and `linkUrl` - Only include if you have a certificate link. Omit both if no link available.
- `year` - Optional but recommended

### Add or Edit Achievements

Edit: `client/src/data/achievements.json`

```json
{
  "id": "achievement-unique-id",
  "title": "Achievement or Award Name",
  "organization": "Organization or Event",
  "description": "Brief 2-3 line description of the achievement and its impact or significance.",
  "year": "2024",
  "linkLabel": "Read Article",
  "linkUrl": "https://example.com/article-or-publication"
}
```

**Optional fields:**
- `linkLabel` and `linkUrl` - Only include if there's an article, publication, or online reference. Omit both if no link available.
- `year` - Optional but recommended

**Link Label Examples:**
- "View Certificate" - for certifications
- "Read Article" - for published articles
- "View Project" - for project showcases
- "Read Paper" - for research publications
- "See Details" - for general links

---

## 🎥 Adding Project Demo Videos

1. Upload your project demo to **YouTube**
2. Set video privacy to **"Unlisted"** (keeps it off your channel but embeddable)
3. Click **Share** → **Embed**
4. Copy the URL that looks like: `https://www.youtube.com/embed/VIDEO_ID`
5. Add it to your project in `projects.json`

The videos will play directly on your portfolio - visitors never leave your site!

---

## 🎨 Customizing Your Design

### Change Colors

Edit: `client/src/index.css`

Look for the `:root` and `.dark` sections to modify colors.

### Update Fonts

The portfolio uses:
- **Orbitron** - Headings and titles (futuristic)
- **Rajdhani** - UI elements and buttons (tech-inspired)
- **Inter** - Body text (clean and readable)

---

## 🔧 Development

### Run Locally

```bash
npm run dev
```

Then open the preview in your browser.

### File Structure

```
client/
  └── src/
      ├── components/     # Reusable UI components
      ├── pages/          # Page components
      ├── data/           # JSON data files (edit these!)
      └── App.tsx         # Main app component
```

---

## 🌐 Deployment Options

### GitHub Pages (FREE) ✅ Recommended
- **Cost**: $0 forever
- **Guide**: See `GITHUB_PAGES_DEPLOYMENT.md`
- **URL**: `your-username.github.io`

### Other Free Options
- **Netlify** - Similar to GitHub Pages
- **Vercel** - Also free for personal sites

---

## 💰 Cost

**$0.00** - This portfolio can be hosted completely free on GitHub Pages!

---

## 📦 What's Included

- ✅ VR-inspired futuristic design
- ✅ Fully responsive layout
- ✅ Dark/Light theme toggle
- ✅ Credentials showcase (certifications & achievements)
- ✅ Project categorization
- ✅ Video demo integration
- ✅ Social media links
- ✅ Personality assessment page
- ✅ Easy content management (JSON files)
- ✅ Chatbot placeholder for future AI integration
- ✅ SEO optimized
- ✅ Production-ready build system

---

## 🆘 Need Help?

1. **Deployment**: Read `GITHUB_PAGES_DEPLOYMENT.md`
2. **Quick Start**: Read `QUICK_START.md`
3. **Updating Content**: Edit the JSON files in `client/src/data/`

---

## 🚀 Future Enhancements

Ready to add when you need them:

- AI Chatbot integration (structure already in place)
- Blog integration (pull from Medium)
- Project filtering and search
- Admin dashboard for easier updates
- Analytics tracking
- Contact form

---

**Built with React, TypeScript, Tailwind CSS, and ❤️**
