# Senska Jean O'Donnell - Design System Documentation

This document contains all the design specifications for replicating this website in WordPress.

---

## 🎨 Color Palette

### Primary Colors

#### Warm Charcoal (Primary Text)
- **HEX:** `#2F2F2F` or `#3A3A3A`
- **HSL:** `hsl(0, 0%, 18%)`
- **Usage:** Primary text, headlines, logos
- **Feelings:** Sophisticated, stable, strong

#### Olive Grove (Primary Green - Your Anchor)
- **HEX:** `#6B8E23` or `#556B2F`
- **HSL:** `hsl(76, 60%, 34%)`
- **Usage:** Primary buttons, key accents, section dividers, icons
- **Feelings:** Growth, harmony, stability, natural wisdom

#### Cream White (Background)
- **HEX:** `#FDFBF7` or `#FAF6F0`
- **HSL:** `hsl(38, 44%, 97%)`
- **Usage:** Main background color
- **Feelings:** Warm, clean, soft, approachable

### Accent Colors

#### Terracotta (Warmth Accent)
- **HEX:** `#C76B43` or `#B85C34`
- **HSL:** `hsl(17, 54%, 51%)`
- **Usage:** Secondary buttons on hover, specific highlights, decorative elements (USE SPARINGLY)
- **Feelings:** Energy, passion, warmth, connection to the earth

#### Sage Green (Softer Complement)
- **HEX:** `#8A9A5B`
- **HSL:** `hsl(76, 25%, 50%)`
- **Usage:** Backgrounds for testimonials, subtle highlights, borders
- **Feelings:** Calm, renewal, clarity

### Supporting Colors

#### Card Background
- **HSL:** `hsl(38, 44%, 98%)`
- **Usage:** Card components, elevated sections

#### Muted
- **HSL:** `hsl(76, 20%, 90%)`
- **Usage:** Disabled states, subtle backgrounds

#### Muted Foreground
- **HSL:** `hsl(0, 0%, 45%)`
- **Usage:** Secondary text, captions

#### Border
- **HSL:** `hsl(76, 15%, 85%)`
- **Usage:** Dividers, input borders, card outlines

---

## 📝 Typography

### Font Families

#### Primary Font (Body Text)
- **Name:** Inter
- **Type:** Sans-serif
- **Source:** Google Fonts
- **URL:** `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`
- **Usage:** Body text, navigation, buttons, forms

#### Secondary Font (Headlines)
- **Name:** Playfair Display
- **Type:** Serif
- **Source:** Google Fonts
- **URL:** `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap`
- **Usage:** All headings (H1-H6), hero headlines

### Font Sizes & Weights

#### Headings (Playfair Display)
```css
h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.75rem; /* 60px */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem; /* 48px */
  font-weight: 600;
  line-height: 1.2;
}

h3 {
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 600;
  line-height: 1.3;
}

h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.875rem; /* 30px */
  font-weight: 500;
  line-height: 1.4;
}

h5 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem; /* 24px */
  font-weight: 500;
  line-height: 1.5;
}

h6 {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem; /* 20px */
  font-weight: 500;
  line-height: 1.5;
}
```

#### Body Text (Inter)
```css
body {
  font-family: 'Inter', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.6;
  color: hsl(0, 0%, 18%); /* Warm Charcoal */
}

.lead-text {
  font-size: 1.25rem; /* 20px */
  font-weight: 400;
  line-height: 1.7;
}

.small-text {
  font-size: 0.875rem; /* 14px */
  line-height: 1.5;
}

.tiny-text {
  font-size: 0.75rem; /* 12px */
  line-height: 1.4;
}
```

---

## 🔘 Buttons

### Button Styles

#### Primary Button (Default)
```css
.btn-primary {
  background-color: hsl(76, 60%, 34%); /* Olive Grove */
  color: hsl(38, 44%, 97%); /* Cream White */
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background-color: hsl(17, 54%, 51%); /* Terracotta */
  transform: translateY(-2px);
  box-shadow: 0 8px 30px hsla(0, 0%, 18%, 0.12);
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: hsl(76, 25%, 50%); /* Sage Green */
  color: hsl(0, 0%, 18%); /* Warm Charcoal */
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background-color: hsl(76, 25%, 45%);
  transform: translateY(-2px);
}
```

#### Outline Button
```css
.btn-outline {
  background-color: transparent;
  color: hsl(76, 60%, 34%); /* Olive Grove */
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid hsl(76, 60%, 34%);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-outline:hover {
  background-color: hsl(76, 60%, 34%);
  color: hsl(38, 44%, 97%);
  transform: translateY(-2px);
}
```

#### Hero Button (Large)
```css
.btn-hero {
  background-color: hsl(76, 60%, 34%); /* Olive Grove */
  color: hsl(38, 44%, 97%); /* Cream White */
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-hero:hover {
  background-color: hsl(17, 54%, 51%); /* Terracotta */
  transform: translateY(-3px);
  box-shadow: 0 12px 40px hsla(76, 60%, 34%, 0.3);
}
```

---

## 📦 Cards & Components

### Card Component
```css
.card {
  background-color: hsl(38, 44%, 98%);
  border: 1px solid hsl(76, 15%, 85%);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px hsla(0, 0%, 18%, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px hsla(0, 0%, 18%, 0.12);
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: hsl(0, 0%, 18%);
  margin-bottom: 0.5rem;
}

.card-description {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: hsl(0, 0%, 45%);
  line-height: 1.6;
}
```

### Testimonial Card
```css
.testimonial-card {
  background-color: hsl(38, 44%, 98%);
  border-left: 4px solid hsl(76, 60%, 34%); /* Olive Grove */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px hsla(0, 0%, 18%, 0.08);
}

.testimonial-text {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-style: italic;
  color: hsl(0, 0%, 18%);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.testimonial-author {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  color: hsl(76, 60%, 34%);
}
```

---

## 🎬 Animations

### Keyframe Animations

#### Float Animation
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

#### Slide In Left
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}
```

#### Slide In Right
```css
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out;
}
```

#### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}
```

#### Scale In
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 0.6s ease-out;
}
```

#### Pulse (Slow)
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Hover Effects

#### Lift Effect
```css
.hover-lift {
  transition: transform 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
}
```

#### Glow Effect
```css
.hover-glow {
  transition: filter 0.3s ease;
}

.hover-glow:hover {
  filter: drop-shadow(0 0 20px hsla(76, 60%, 34%, 0.5));
}
```

---

## 🌟 Effects & Shadows

### Shadows
```css
/* Soft Shadow */
.shadow-soft {
  box-shadow: 0 4px 20px hsla(0, 0%, 18%, 0.08);
}

/* Elevation Shadow */
.shadow-elevation {
  box-shadow: 0 8px 30px hsla(0, 0%, 18%, 0.12);
}

/* Glow Shadow (Primary Color) */
.shadow-glow-primary {
  box-shadow: 0 0 40px hsla(76, 60%, 34%, 0.3);
}

/* Glow Shadow (Accent Color) */
.shadow-glow-accent {
  box-shadow: 0 0 40px hsla(17, 54%, 51%, 0.3);
}
```

### Gradients
```css
/* Primary Gradient (Olive to Sage) */
.gradient-primary {
  background: linear-gradient(135deg, hsl(76, 60%, 34%), hsl(76, 25%, 50%));
}

/* Warm Gradient (Cream backgrounds) */
.gradient-warm {
  background: linear-gradient(180deg, hsl(38, 44%, 98%), hsl(38, 44%, 95%));
}

/* Text Gradient */
.text-gradient {
  background: linear-gradient(to right, hsl(76, 60%, 34%), hsl(76, 25%, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 🧭 Navigation

### Navigation Bar
```css
.navbar {
  background-color: hsla(38, 44%, 97%, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid hsl(76, 15%, 85%);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 50;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background-color: hsla(38, 44%, 97%, 0.98);
  box-shadow: 0 4px 20px hsla(0, 0%, 18%, 0.08);
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.938rem;
  color: hsl(0, 0%, 18%);
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: hsl(76, 60%, 34%); /* Olive Grove */
}

.nav-link.active {
  color: hsl(76, 60%, 34%);
  font-weight: 600;
}
```

---

## 📐 Spacing & Layout

### Container
```css
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

### Section Spacing
```css
.section {
  padding: 5rem 0;
}

.section-large {
  padding: 8rem 0;
}

.section-small {
  padding: 3rem 0;
}
```

### Grid Layouts
```css
/* 2-Column Grid */
.grid-2-col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

/* 3-Column Grid */
.grid-3-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* 4-Column Grid */
.grid-4-col {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

/* Responsive Breakpoints */
@media (max-width: 768px) {
  .grid-2-col,
  .grid-3-col,
  .grid-4-col {
    grid-template-columns: 1fr;
  }
}
```

---

## 🖼️ Images

### Image Assets Used

1. **hero-senska.jpg** - Professional headshot (Hero section)
2. **collaboration.jpg** - Diverse women entrepreneurs (Testimonials background)
3. **growth-garden.jpg** - Sprouting plants and roots (About section)
4. **mentorship.jpg** - Professional mentorship scene (Services section)
5. **global-exchange.jpg** - Global cultural exchange (Ventures header)
6. **speaking.jpg** - Speaker on stage (Speaking section)
7. **planting-seeds.jpg** - Hands planting seeds (About section)
8. **pattern-organic.jpg** - Organic pattern background (Decorative)

### Image Styling
```css
.hero-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.section-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 30px hsla(0, 0%, 18%, 0.12);
}

.background-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
}
```

---

## 🎯 Icons

### Icon Library
Use **Lucide Icons** or similar line-based icon set with these specifications:

```css
.icon {
  width: 24px;
  height: 24px;
  color: hsl(76, 60%, 34%); /* Olive Grove */
}

.icon-large {
  width: 48px;
  height: 48px;
}

.icon-small {
  width: 16px;
  height: 16px;
}

.icon-secondary {
  color: hsl(0, 0%, 18%); /* Warm Charcoal */
}

.icon-accent {
  color: hsl(17, 54%, 51%); /* Terracotta */
}
```

### Common Icons Used
- **Book** (Education/MBA)
- **Heart** (Gender Studies/Passion)
- **Award** (Recognition)
- **Globe** (International)
- **Rocket** (Business Launch)
- **Compass** (Newcomer Guide)
- **Heart Hands** (Nonprofit)
- **Leaf** (Growth)
- **Lightbulb** (Ideas)
- **Mountain** (Adventure)
- **Home** (Family)
- **TrendingUp** (Success)

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  .section { padding: 3rem 0; }
  .container { padding: 0 1rem; }
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  h1 { font-size: 3rem; }
  h2 { font-size: 2.5rem; }
  .section { padding: 4rem 0; }
}

/* Desktop */
@media (min-width: 1025px) {
  /* Default sizes apply */
}
```

---

## 🌓 Dark Mode (Optional)

If implementing dark mode:

```css
.dark {
  --background: hsl(0, 0%, 15%);
  --foreground: hsl(38, 44%, 97%);
  --primary: hsl(76, 50%, 45%);
  --secondary: hsl(76, 20%, 35%);
  --accent: hsl(17, 54%, 51%);
  --card: hsl(0, 0%, 18%);
  --border: hsl(0, 0%, 25%);
}
```

---

## 📄 Form Inputs

```css
.input-field {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: hsl(38, 44%, 97%);
  border: 1px solid hsl(76, 15%, 85%);
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: hsl(0, 0%, 18%);
  transition: all 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: hsl(76, 60%, 34%);
  box-shadow: 0 0 0 3px hsla(76, 60%, 34%, 0.1);
}

.input-field::placeholder {
  color: hsl(0, 0%, 45%);
}

.textarea {
  min-height: 150px;
  resize: vertical;
}

.label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(0, 0%, 18%);
  margin-bottom: 0.5rem;
  display: block;
}
```

---

## 📚 Transitions

### Standard Transition
```css
.transition-smooth {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

This easing function provides a smooth, natural feel to all interactions.

---

## ✅ Usage Guidelines

1. **Always use semantic HSL colors** - Never hardcode HEX values in components
2. **Maintain the warm, professional aesthetic** - Avoid stark whites and cold blues
3. **Use Playfair Display for all headlines** - This creates visual hierarchy
4. **Keep animations subtle** - Motion should enhance, not distract
5. **Terracotta sparingly** - It's an accent, not a primary color
6. **Round corners consistently** - 8px for cards, 6px for inputs, 12px for large buttons
7. **Natural imagery** - Use images with organic elements (plants, roots, growth)

---

**This design system creates a warm, approachable, yet professional brand identity that reflects growth, nurturing, and strategic empowerment.**