# 🌆 Unified Vaporwave / Outrun Design System

## Design Philosophy — *Preserve the Soul, Amplify the Signal*

**Digital nostalgia meets neon future**, balanced with professional clarity. This system fuses **maximalist outrun theatrics** (grids, glows, skew, CRT artifacts) with a **disciplined portfolio-grade restraint**. The result: bold, unmistakably vaporwave—yet readable, performant, and intentional.

**Rule of Thumb**

* Atmosphere is loud.
* Content is clear.
* Interactions are theatrical, not distracting.

---

## Core Aesthetic DNA (Merged)

1. **Infinite Perspective Grid** — Iconic outrun depth, used as atmosphere, not content.
2. **Neon Glow Supremacy (Controlled)** — Cyan, magenta, gold layered glows with tunable intensity per theme.
3. **CRT Reality Layer** — Global scanlines + optional chromatic aberration for hero/hover moments only.
4. **Terminal Heritage** — Prompts, monospace accents, window chrome, typewriter cursor.
5. **Kinetic Geometry** — Skewed buttons, rotated icon containers, perspective transforms.
6. **Gradient Mania (Curated)** — Multi-stop gradients everywhere *that matter* (headlines, CTAs, borders).

**Anti‑Patterns**

* Flat
* Corporate
* Muted
* Effect-for-no-reason

---

## Interaction Philosophy (Unified)

* **Hover = Micro-Event** (un-skew, glow amplification, slight lift)
* **Speed**: `200ms ease-linear` — digital, mechanical
* **Hierarchy First**: Decorative animations pause when content is in focus
* **Glitch & Aberration**: Accent-only, opt-in, short-lived

---

## Color Token System (Single Source of Truth)

### Dark Theme — Primary Identity

```css
:root, :root.dark {
  /* Background */
  --bg-primary: #0D0221;
  --bg-secondary: #1A0B2E;
  --bg-tertiary: #2D1B4E;
  --bg-surface: rgba(26, 11, 46, 0.6);
  --bg-header: rgba(13, 2, 33, 0.95);

  /* Text */
  --text-primary: #E0F7FF;
  --text-secondary: #B8D9E8;
  --text-tertiary: #8BA3B8;
  --text-accent: #FF10F0;

  /* Accents */
  --accent-cyan: #00F0FF;
  --accent-magenta: #FF00F5;
  --accent-gold: #FFD700;
  --accent-pink: #FF6EC7;
  --accent-purple: #9D00FF;

  /* Glows */
  --glow-cyan: rgba(0,240,255,0.5);
  --glow-magenta: rgba(255,0,245,0.5);
  --glow-gold: rgba(255,215,0,0.4);
}
```

### Light Theme — Vaporwave Sunset (Professional)

```css
:root.light {
  /* === BACKGROUNDS === */
  --bg-primary: #F5F0FF;
  --bg-secondary: #FFFFFF;
  --bg-tertiary: #E8DBFF;
  --bg-surface: rgba(255, 255, 255, 0.9);
  --bg-header: rgba(245, 240, 255, 0.95);

  /* === TEXT === */
  --text-primary: #1A0B2E;
  --text-secondary: #3D2463;
  --text-tertiary: #6B5080;
  --text-accent: #D4006E;

  /* === ACCENTS === */
  --accent-cyan: #0099CC;
  --accent-magenta: #C2008A;
  --accent-gold: #CC9900;
  --accent-orange: #E65C00;
  --accent-pink: #E6007A;
  --accent-purple: #8800CC;
  --accent-teal: #00B8D4;
  --accent-sunset: #FF9500;

  /* === GRADIENTS === */
  --gradient-primary: linear-gradient(135deg, #0099CC 0%, #C2008A 50%, #CC9900 100%);
  --gradient-vaporwave: linear-gradient(135deg, #E6007A 0%, #8800CC 25%, #0099CC 50%, #FF9500 75%, #C2008A 100%);
  --gradient-sunset: linear-gradient(180deg, #E6007A 0%, #FF9500 50%, #8800CC 100%);
  
  /* === GLOW EFFECTS === */
  --glow-cyan: rgba(0, 153, 204, 0.3);
  --glow-magenta: rgba(194, 0, 138, 0.3);
  --glow-gold: rgba(204, 153, 0, 0.25);
}
```

---

## Gradient Canon (Unified)

```css
--gradient-primary: linear-gradient(135deg, cyan → magenta → gold);
--gradient-vaporwave: full-spectrum outrun (pink → purple → cyan → gold);
--gradient-sunset: warm vertical (pink → gold → purple);
--gradient-text: clipped headline gradients;
--gradient-holographic: animated borders & premium CTAs;
```

---

## Global Background Stack (Merged & Simplified)

**Z‑Order**

1. Base gradient (fixed)
2. Perspective grid / SVG grid (ambient)
3. Floating sun / orbs
4. Content (z‑10)
5. CRT scanlines + subtle RGB shift (z‑50)

Scanlines stay **always-on but subtle** (2–4%). Grid opacity adapts per screen size. **Note:** Scanlines can be disabled/commented out based on user preference.

---

## Component Rules (Condensed)

### Headlines

* Gradient text + layered glow
* Optional chromatic aberration for hero only

### Buttons

* Default: skewed, gradient-filled
* Hover: un-skew + glow amplification + lift

### Cards

* Glassmorphic background
* Dual neon border (cyan top, magenta sides)
* Hover lift ≤ `-5px`

### Icons

* Diamond containers (rotate‑45)
* **Exception**: Header/Footer social icons may remain circular (`border-radius: 50%`)
* Hover rotate + glow

### Terminal Elements

* Monospace
* Blinking caret allowed even with reduced motion

---

## Motion & Performance Treaty

* Max **3–4 concurrent animations** per viewport
* Prefer `transform` + `opacity`
* Heavy blur reduced on mobile
* SVGs preferred over CSS-heavy effects

---

## Accessibility (Non‑Negotiable)

* WCAG AAA contrast in both themes
* `prefers-reduced-motion` supported
* Glow never carries meaning
* Focus states always visible (neon outline)

---

## Responsive Survival Rules

* Vaporwave **must survive mobile**
* Neon borders & grids stay
* Glow intensity reduced, never removed
* Buttons ≥ 44px height

---

## Design North Star

> **If it looks like it belongs in a 1988 vision of 2088—but still reads like a modern portfolio—you’re doing it right.**

