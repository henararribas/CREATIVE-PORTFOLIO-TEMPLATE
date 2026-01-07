# Professional Creative Portfolio Template

**🌐 LIVE DEMO:** [https://henararribas.github.io/CREATIVE-PORTFOLIO-TEMPLATE/](https://henararribas.github.io/CREATIVE-PORTFOLIO-TEMPLATE/)

> A production-ready portfolio template showcasing modern web animation techniques with Bootstrap 5, GSAP ScrollTrigger, and fluid responsive design.

---

## 📋 Project Description

This is a **reusable portfolio template** designed following the "teach to fish" philosophy from UDIT's Web Foundations course. Unlike static one-time portfolios, this template is architected to be:

- **Cloned and customized** for multiple client projects
- **A demonstration** of professional web development standards
- **A time-saver** that provides 10+ hours of setup for new projects
- **Production-ready** with accessibility, SEO, and performance best practices built-in

### What Makes This Template Special

1. **🎬 Modern Animation System**  
   Professional GSAP ScrollTrigger implementation with educational comments explaining every technique.

2. **🎨 Framework Finesse**  
   Bootstrap 5 customized beyond default styling—no "Bootstrappy" look here.

3. **✨ Design Trends**  
   - Animated gradient mesh background  
   - Glassmorphism effects on cards and navigation  
   - Smooth scroll-driven animations

4. **📱 Responsive Typography**  
   Fluid `clamp()` system that scales seamlessly from mobile (320px) to 4K displays.

5. **♿ Accessibility-First**  
   Full `prefers-reduced-motion` support, semantic HTML5, and WCAG AA color contrast.

---

## 🛠 Tech Stack

- **HTML5** - Semantic markup with proper heading hierarchy
- **CSS3** - Bootstrap 5.3.2 + custom variables and animations
- **JavaScript ES6+** - Modern vanilla JS with GSAP integration
- **GSAP 3.12** - Professional animation library with ScrollTrigger plugin
- **Google Fonts** - Libre Bodoni for elegant typography
- **GitHub Pages** - Free hosting with automatic deployment

### Libraries & Dependencies (via CDN)
```html
<!-- Bootstrap 5.3.2 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- GSAP 3.12 + Plugins -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/ScrollToPlugin.min.js"></script>
```

---

## 🚀 Installation & Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) [VS Code](https://code.visualstudio.com/) with [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Local Development
```bash
# 1. Clone the repository
git clone https://github.com/henararribas/CREATIVE-PORTFOLIO-TEMPLATE.git

# 2. Navigate to project folder
cd CREATIVE-PORTFOLIO-TEMPLATE

# 3. Open in browser
# Option A: Double-click index.html
# Option B: Use Live Server in VS Code (right-click index.html → "Open with Live Server")
```

**No build tools required!** This is a Grade 2 project using CDN dependencies, so it works immediately without npm/node.

---

## 📖 Usage Guide

### Customizing Content

#### 1. **Personal Information**

Edit `index.html` to replace placeholder content:
```html
<!-- Hero Section (line ~40) -->
<h1 class="fw-bold hero-title">Your Name</h1>
<p class="lead hero-subtitle mb-4">Describe yourself in a few words</p>
```

#### 2. **Projects Section**

Update project cards (starting line ~140):
```html
<article class="card project-card border-0 shadow-sm">
    <div class="card-img-wrapper overflow-hidden">
        <img src="your-image-url.jpg" class="card-img-top" alt="Project Name">
    </div>
    <div class="card-body">
        <h3 class="card-title h5">Your Project Title</h3>
        <p class="card-text text-muted small">
            Short description highlighting key features.
        </p>
        <div class="d-flex flex-wrap gap-2">
            <span class="badge bg-primary-subtle text-primary">Tech 1</span>
            <span class="badge bg-primary-subtle text-primary">Tech 2</span>
        </div>
    </div>
</article>
```

#### 3. **Skills Section**

Modify skill bars in About section (line ~110):
```html
<div class="skill-item gsap-reveal mb-3">
    <div class="d-flex justify-content-between mb-2">
        <span class="fw-semibold">Your Skill Name</span>
        <span class="text-muted">95%</span>
    </div>
    <div class="progress" style="height: 8px">
        <div class="progress-bar skill-bar" data-width="95"></div>
    </div>
</div>
```

### Customizing Design

#### **Change Color Scheme**

Edit `assets/css/base.css`:
```css
:root {
    --bs-primary: #your-color;
    --bs-primary-rgb: r, g, b; /* RGB values of your color */
}
```

#### **Modify Typography Scale**

Edit fluid typography in `assets/css/base.css`:
```css
:root {
    --font-size-h1: clamp(2.5rem, 2rem + 2.5vw, 4rem);
    --font-size-h2: clamp(2rem, 1.7rem + 1.5vw, 3rem);
    /* Adjust min, preferred, and max values */
}
```

#### **Change Background Gradient**

Edit animated background in `assets/css/theme.css`:
```css
body {
    background: 
        radial-gradient(circle at 20% 80%, rgba(your-color) 0%, transparent 50%),
        /* Add your custom gradient stops */
}
```

### Understanding the Animation System

The GSAP animations are extensively documented in `assets/js/main.js`. Key functions:

- `initHeroAnimations()` - Hero section entrance + floating shapes + parallax
- `initScrollReveals()` - Generic scroll-triggered reveals for `.gsap-reveal` class
- `initSkillBars()` - Animated progress bars
- `initProjectCards()` - Staggered project card animations
- `initNavbarScroll()` - Dynamic navbar background on scroll
- `initSmoothScroll()` - Smooth scrolling for anchor links

**Example: Adding a New Animated Element**
```html
<!-- Add class to any element you want to animate on scroll -->
<div class="gsap-reveal">
    <p>This will fade in and slide up when scrolled into view!</p>
</div>
```

---

## 🎨 Features

### ✅ Implemented Features

- [x] Responsive mobile-first layout (320px - 4K)
- [x] Fluid typography with `clamp()` scaling
- [x] GSAP ScrollTrigger animations (hero, cards, skills)
- [x] Glassmorphism design trend (navbar, project cards)
- [x] Animated gradient mesh background
- [x] Smooth scroll navigation
- [x] Accessibility: `prefers-reduced-motion` support
- [x] Semantic HTML5 structure
- [x] SEO-ready metadata (Open Graph, Twitter Cards)
- [x] Custom 404 error page
- [x] Performance-optimized (CDN assets, GPU-accelerated animations)

### 🔮 Future Enhancements

- [ ] Dark mode toggle
- [ ] Contact form with backend integration (Formspree)
- [ ] Project detail modal/overlay
- [ ] Blog section with static site generation
- [ ] Internationalization (i18n) for multiple languages

---

## 📁 Project Structure
```
CREATIVE-PORTFOLIO-TEMPLATE/
├── index.html              # Main page
├── 404.html                # Custom error page
├── README.md               # This file
├── LICENSE                 # MIT License
├── .gitignore              # Git ignore rules
├── manifest.json           # PWA manifest
├── assets/
│   ├── css/
│   │   ├── index.css       # CSS barrel file (imports all styles)
│   │   ├── reset.css       # Meyer CSS reset
│   │   ├── base.css        # Typography, variables, base styles
│   │   ├── layout.css      # Layout utilities, sections, grid
│   │   ├── components.css  # Buttons, cards, UI components
│   │   ├── navigation.css  # Navbar styles
│   │   └── theme.css       # Design trends (glassmorphism, gradients)
│   └── js/
│       └── main.js         # GSAP animations (extensively commented)
└── docs/
    ├── plan1.md            # GSAP animations development plan
    ├── plan2.md            # Responsive layout plan
    └── plan3.md            # Metadata optimization plan
```

### CSS Architecture (Barrel Pattern)

The `assets/css/index.css` file acts as a "barrel" that imports all modular CSS files:
```css
@import url("reset.css");
@import url("base.css");
@import url("navigation.css");
@import url("layout.css");
@import url("components.css");
@import url("theme.css");
```

This organization makes it easy to:
- Find and edit specific styles
- Add new modules without touching existing code
- Maintain a clean, scalable codebase

---

## 🤖 AI Usage Policy

Generative AI tools were used as support tools, not as substitutes for understanding or decision-making.

**Claude AI** was the primary tool used throughout this project for:
- **Project review and quality assurance**: Reviewing code structure, identifying potential improvements, and ensuring best practices
- **Concept clarification**: Reinforcing and explaining web development concepts covered in class, particularly responsive design principles, GSAP animations, and CSS architecture
- **Project organization**: Planning and structuring the different phases of development, ensuring a logical workflow from foundation to final polish
- **Template enhancement suggestions**: Proposing improvements for accessibility, performance, and user experience based on modern web standards
- **Debugging assistance**: Helping identify and resolve issues when implementing specific features

**ChatGPT** was used occasionally for:
- **Generating placeholder content**: Creating temporary text for project descriptions and section content
- **Documentation support**: Helping draft and structure README sections and technical documentation

In all cases, AI-generated suggestions were only incorporated after being fully understood. Any code or solution was reviewed, adapted, and only used if I was confident that I could recreate it independently. AI was treated as a learning and productivity aid, while most technical decisions and implementations were guided by course materials and previously learned concepts, particularly for animations, fluid typography, and layout techniques.

**Documentation of AI interactions**: Following the course's two-phase AI workflow requirement, all significant AI-assisted features were documented with development plans in the `docs/` folder before implementation.

---

## 🤝 Contributing

This is a student project from UDIT's Web Foundations course. However, forks and improvements are welcome!

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow existing code style (Prettier formatted)
- Write meaningful commit messages (Conventional Commits style)
- Document complex logic with comments
- Test across multiple browsers and devices

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**TL;DR:** You can use, modify, and distribute this template freely, even commercially, as long as you include the original copyright notice.

## 🙏 Credits & Acknowledgments

- **Course:** Web Foundations - UDIT (Universidad de Diseño, Innovación y Tecnología)
- **Professor:** Rubén Vega Balbás, PhD  
  - ORCID: [0000-0001-6862-9081](https://orcid.org/0000-0001-6862-9081)
  - Email: [ruben.vega@udit.es](mailto:ruben.vega@udit.es)
- **Student:** Henara Arribas
- **Inspiration:** Modern web design trends from Awwwards, GSAP showcase gallery
- **Placeholder Images:** [ImageKit.io](https://imagekit.io/)
- **Icons:** SVG icons from [Heroicons](https://heroicons.com/)

### Special Thanks

- The Web Atelier methodology for teaching "how to fish" rather than just giving answers
- GSAP (GreenSock) for making professional animations accessible
- Bootstrap team for the solid foundation
- Open-source community for countless learning resources

---

## 📞 Contact

**Henara Arribas**

- GitHub: [@henararribas](https://github.com/henararribas)
- Portfolio: [https://henararribas.github.io/CREATIVE-PORTFOLIO-TEMPLATE/](https://henararribas.github.io/CREATIVE-PORTFOLIO-TEMPLATE/)
- Email: henar.arribas@alumnos.udit.es

---

## 🔗 Additional Resources

### Learning Resources

- [GSAP Documentation](https://gsap.com/docs/v3/) - Official GSAP docs with examples
- [ScrollTrigger Demos](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) - Interactive ScrollTrigger examples
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - Bootstrap official documentation
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript reference

### Project Links

- **Live Site:** [https://henararribas.github.io/CREATIVE-PORTFOLIO-TEMPLATE/](https://henararribas.github.io/CREATIVE-PORTFOLIO-TEMPLATE/)
- **Repository:** [https://github.com/henararribas/CREATIVE-PORTFOLIO-TEMPLATE](https://github.com/henararribas/CREATIVE-PORTFOLIO-TEMPLATE)
- **Issues/Bugs:** [Report an issue](https://github.com/henararribas/CREATIVE-PORTFOLIO-TEMPLATE/issues)

### Course Materials

- [Web Atelier Course Site](https://ruvebal.github.io/web-atelier-udit/)
- [Project Brief](https://web-ateliers.github.io/web-foundations/lessons/en/portfolio-template-brief/challenge/)

---

## 📊 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Mobile Safari | iOS 14+ | ✅ Fully Supported |
| Chrome Android | Latest | ✅ Fully Supported |

**Note:** GSAP and modern CSS features (clamp, backdrop-filter) require relatively recent browsers. For legacy browser support, consider adding polyfills.

---

## 🐛 Known Issues

- **Glassmorphism in Firefox:** `backdrop-filter` may have slight rendering differences compared to Chrome/Safari
- **Smooth Scroll on iOS:** Native smooth scroll behavior may override GSAP scroll animations in some iOS versions

See [Issues](https://github.com/henararribas/CREATIVE-PORTFOLIO-TEMPLATE/issues) for active bug reports.

---

## 📈 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **No layout shift** (CLS: 0)
- All animations GPU-accelerated using `transform` and `opacity`


