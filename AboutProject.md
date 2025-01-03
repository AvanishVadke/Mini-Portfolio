# About Project

## Overview
This portfolio is designed to showcase your work in React, with a focus on key projects like JobHunt, Password Generator, and Crypto Tracker. It highlights your skills, projects, and contact information in a visually appealing and functional manner.

---

## Project Structure
```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Navigation and theme toggle
│   │   ├── Hero.js         # Landing section
│   │   ├── About.js        # About section
│   │   ├── Projects.js     # Projects showcase
│   │   ├── Skills.js       # Skills section
│   │   ├── Contact.js      # Contact form with EmailJS
│   │   └── Footer.js       # Footer with social links
│   ├── App.js
│   ├── App.css
│   └── index.js
├── public/
│   └── projects/           # Project images
└── package.json
```

---

## Featured Projects

### [JobHunt](https://github.com/AvanishVadke/JobHunt)
**Description:** Job portal application  
**Tech Stack:** Next.js, TailwindCSS  

### [Password Generator](https://github.com/AvanishVadke/Password-Generator)
**Description:** Secure password generation tool  
**Tech Stack:** React, Firebase  

### [Crypto Tracker v2](https://github.com/AvanishVadke/crypto_v2)
**Description:** Cryptocurrency tracking application  
**Tech Stack:** React, API Integration  

### [QR Code Generator](https://github.com/AvanishVadke/QR-Code-Generator)
**Description:** QR code generation tool  
**Tech Stack:** React, API Integration  

---

## Setup Instructions

### Create a New Project
```bash
npm create vite@latest portfolio -- --template react
cd portfolio
```

### Install Dependencies
```bash
npm install @emailjs/browser tailwindcss @heroicons/react postcss autoprefixer
```

### Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

### Configure EmailJS

Add the following code in `Contact.js`:
```javascript
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message
  },
  'YOUR_PUBLIC_KEY'
);
```

---

## Deployment on Vercel

### Push Your Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

### Deploy on Vercel
1. Go to [Vercel](https://vercel.com/).
2. Sign in with GitHub.
3. Click "New Project" and import your repository.
4. Configure project settings:
   - **Framework Preset:** Vite  
   - **Build Command:** `npm run build`  
   - **Output Directory:** `dist`  
5. Click "Deploy".

### Environment Variables (for EmailJS)
1. Go to Project Settings > Environment Variables.
2. Add:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Custom Domain (Optional)
1. Go to Project Settings > Domains.
2. Add your domain and follow DNS configuration instructions.

---

## Additional Features Implemented

### EmailJS Integration
- **Template Variables:**
  ```
  From: {{from_name}} ({{from_email}})
  Message: {{message}}
  ```

### Project Cards
```javascript
const projects = [
  {
    id: 1,
    title: "JobHunt",
    description: "Job portal application",
    image: "/projects/jobhunt.png",
    link: "https://job-hunt-sooty.vercel.app/",
    github: "https://github.com/AvanishVadke/JobHunt"
  }
  // ... other projects
];
```

### Skill Categorization
```javascript
const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "TailwindCSS", "Bootstrap"]
  },
  {
    title: "Backend Development",
    skills: ["Firebase", "API Integration", "Database Management"]
  }
  // ... other categories
];
```

---

## Maintenance and Updates

### Regular Updates
- Keep dependencies updated.
- Add new projects as they're completed.
- Update skills as you learn new technologies.

### Content Management
- Update project screenshots.
- Keep project descriptions current.
- Maintain accurate links to live demos.

### Performance
- Optimize images.
- Implement lazy loading.
- Monitor loading speeds.

### SEO
- Update meta tags.
- Maintain proper heading hierarchy.
- Ensure all links are working.

