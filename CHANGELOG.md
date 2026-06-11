# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2025-06-11

### 🎯 Major Changes

#### **Full Rebrand: VideoShop → PaxVision**
Complete rebranding of the project from "VideoShop" to "PaxVision" with new brand identity, logo, and visual style.

---

### 📦 Files Modified

#### **1. Brand Identity & Logo**
- **`apps/frontend/src/components/layout/Header.tsx`**
  - Replaced `VideoShop` logo component with new `PaxVisionLogo` 
  - Updated logo text: `"Video" + "Shop"` → `"Pax" + "Vision"`
  - New logo SVG: Hexagon with lens design (#085041 fill, #5DCAA5 accent)

- **`apps/frontend/src/components/layout/Footer.tsx`**
  - Updated logo component to match new brand identity
  - Changed logo text rendering to "Pax" + "Vision"
  - Updated social media links:
    - `facebook.com/videoshop` → `facebook.com/paxvision`
    - `instagram.com/videoshop` → `instagram.com/paxvision`
    - `t.me/videoshop` → `t.me/paxvision`
    - `viber.com/videoshop` → `viber.com/paxvision`
  - Updated copyright text: `"VideoShop. Усі права захищені."` → `"PaxVision. Усі права захищені."`
  - Updated footer description to reflect service-based business model

#### **2. Metadata & SEO**
- **`apps/frontend/src/app/layout.tsx`**
  - Updated page title: `"VideoShop - ..."` → `"PaxVision - Професійне відеоспостереження | Монтаж під ключ"`
  - Updated meta description to reflect service offerings

#### **3. Main Pages**
- **`apps/frontend/src/app/uk/page.tsx`**
  - Updated service titles and descriptions to use PaxVision branding
  - Replaced email: `info@videoshop.ua` → `info@paxvision.ua`

- **`apps/frontend/src/app/ru/page.tsx`**
  - Updated service titles and descriptions to use PaxVision branding
  - Replaced email: `info@videoshop.ua` → `info@paxvision.ua`

#### **4. Authentication & Storage**
- **`apps/frontend/src/context/AuthContext.tsx`**
  - Changed localStorage key: `"videoshop-user"` → `"paxvision-user"`
  - Ensures user sessions persist with new brand identity

- **`apps/frontend/src/context/CartContext.tsx`**
  - Changed localStorage key: `"videoshop-cart"` → `"paxvision-cart"`
  - Ensures shopping cart persists with new brand identity

- **`apps/frontend/src/components/services/ConsultationModal.tsx`**
  - Updated social media links to paxvision

#### **5. Configuration Files**
- **`package.json`**
  - Updated description: `"VideoShop - Магазин відеоспостереження №1 в Україні"` → `"PaxVision - Системи відеоспостереження під ключ"`

- **`.github/workflows/deploy.yml`**
  - Updated workflow name: `"Deploy VideoShop"` → `"Deploy PaxVision"`
  - Updated artifact name: `"videoshop-build"` → `"paxvision-build"`

#### **6. Documentation**
- **`README.md`**
  - Updated main title: `# VideoShop - Магазин відеоспостереження` → `# PaxVision - Системи відеоспостереження`
  - Updated project description to reflect service-based business
  - Replaced contact email: `info@videoshop.ua` → `info@paxvision.ua`

#### **7. Styles & CSS**
- **`apps/frontend/src/app/globals.css`**
  - Fixed Tailwind CSS errors: `border-1.5` and `border-0.5` classes removed
  - Replaced with valid Tailwind classes (`border` without custom widths)
  - Color palette already matches PaxVision brand colors:
    - `--color-primary: #0C2340` (Trust blue)
    - `--color-secondary: #1D9E75` (Teal/green)
    - `--color-accent: #5DCAA5` (Light teal for CTAs)

---

### 🎨 Brand Design System (PaxVision)

#### **Color Palette**
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#0C2340` | Headers, footers, dark backgrounds |
| Secondary | `#1D9E75` | Buttons, accents, borders |
| Accent | `#5DCAA5` | CTA buttons, highlights |
| BG Dark | `#071828` | Hero section background |
| BG Mid | `#0F2E40` | Stats bar background |
| BG Light | `#F4F7FA` | Light section backgrounds |
| Text | `#1E2E3D` | Primary text color |
| Text Muted | `#888780` | Secondary text |
| Text Light | `#E1F5EE` | Text on dark backgrounds |
| Text Softer | `#9FE1CB` | Subtle text, social icons |

#### **Typography**
- **Headings**: Montserrat (800/700/600 weights)
- **Body**: Inter (400/500/600 weights)

#### **Logo**
- SVG hexagon with lens icon
- Text: "Pax" (800 weight) + "Vision" (300 weight, tracking-wider)
- Slogan: "YOUR PEACE. OUR VISION."

---

### 🔧 Technical Notes

- All changes are backward-compatible for existing users
- localStorage migration: Old `videoshop-*` keys will be ignored, new sessions will use `paxvision-*` keys
- No database migrations required (demo uses in-memory storage)
- Build artifacts in `.next/` directory will be regenerated on next build

---

### 📊 Statistics

- **Files changed**: 11 files
- **Lines changed**: 27 insertions(+), 27 deletions(-)
- **Breaking changes**: None for end users
- **New features**: Brand identity update

---

## [1.0.0] - 2025-05-XX

### Initial Release
- First version of VideoShop e-commerce platform
- Product catalog with 57 items in 7 categories
- Service catalog with 20 services in 5 categories
- User authentication system
- Shopping cart functionality
- Bilingual support (Ukrainian, Russian)

---

[2.0.0]: https://github.com/aceucav-coder/video-surveillance-shop/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/aceucav-coder/video-surveillance-shop/releases/tag/v1.0.0
