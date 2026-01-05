# Creative Portfolio Template

**🌐 LIVE DEMO:** [https://henararribas.github.io/CREATIVE-PORTFOLIO-TEMPLATE/](https://henararribas.github.io/CREATIVE-PORTFOLIO-TEMPLATE/)

> Professional portfolio template built with Bootstrap 5 + GSAP animations, featuring responsive fluid typography and modern glassmorphism design.

## 📋 Project Description

This is a **reusable portfolio template** designed for creative developers and designers. Unlike static one-time portfolios, this template is architected to be:

- **Cloned and customized** for multiple client projects
- **A demonstration** of modern web animation techniques (GSAP ScrollTrigger)
- **A starting point** that saves 10+ hours of setup on new projects
- **Production-ready** with accessibility, SEO, and performance best practices built-in

**Purpose:** Following the "teach to fish" philosophy from the Web Atelier course, this template serves as a professional foundation you can fork, customize, and deploy in minutes rather than hours.

**What Makes This Template Special**

1. **Modern Animation System** - Professional GSAP ScrollTrigger implementation with detailed educational comments
2. **Framework Finesse** - Bootstrap 5 customized beyond default styling (not "Bootstrappy")
3. **Design Trends** - Glassmorphism + animated gradient mesh backgrounds
4. **Responsive Typography** - Fluid clamp() system that scales seamlessly across all devices
5. **Accessibility-First** - Full prefers-reduced-motion support and semantic HTML

## 🛠 Tech Stack

- HTML5 (semantic)
- CSS3 (Bootstrap 5.3.2 via CDN)
- JavaScript ES6+
- GSAP 3.12 + ScrollTrigger
- Google Fonts (Libre Bodoni)

## 🚀 Local Setup
```bash
# Clone repository
git clone https://github.com/henararribas/CREATIVE-PORTFOLIO-TEMPLATE.git

# Open in browser
open index.html
# Or use Live Server extension in VS Code
```

## 🎨 Customization Guide

### Change Colors
Edit `assets/css/base.css`:
```css
:root {
    --bs-primary: #your-color;
}
```

### Modify Typography
Edit fluid scale in `base.css`:
```css
--font-size-h1: clamp(2.5rem, 2rem + 2.5vw, 4rem);
```

## 📸 Screenshots

[Añade capturas de pantalla aquí]

## 📄 License

MIT License - see [LICENSE](LICENSE) file

## 🙏 Credits

- Professor: Rubén Vega Balbás, PhD
- Course: Web Foundations - UDIT
- Inspiration: [cita fuentes si aplica]
```

---

### 🟡 **5. Falta LICENSE file**

Crea `LICENSE` en la raíz:
```
MIT License

Copyright (c) 2025 [Tu Nombre]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[... resto de la licencia MIT]