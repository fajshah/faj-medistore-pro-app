# MediStore Pro 🏥💊

MediStore Pro is a modern, responsive e-commerce web application for medicines, healthcare essentials, vitamins, supplements, and wellness products.

---

## 🌟 Key Features

- **Product Catalog & Categorization**:
  - Filter products by categories including **Medicines**, **Vitamins**, **Supplements**, **Personal Care**, **Devices**, and **Biochemic Remedies** (e.g., Kalium Phosphoricum 6X).
  - Search functionality with real-time query filtering.
- **Product Details Modal**:
  - Detailed product view with high-resolution imagery, pricing, customer ratings, key ingredients, usage instructions, and safety disclaimers.
- **Interactive Shopping Cart**:
  - Slide-out cart drawer with item quantity modification, price calculations, and checkout preview.
- **Online Consultation & Prescription Upload**:
  - Quick doctor consultation booking modal.
  - Prescription upload banner for prescription-required drugs.
- **AI Health Assistant / Chat Support**:
  - Integrated health assistant widget for instant inquiries and medicine suggestions.
- **Robust Image Fallbacks**:
  - Automatic error handling and smooth fallback visuals for all product images.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Motion (`motion/react`)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+ recommended) installed.

### Installation

```bash
# Clone the repository and navigate to the project directory
npm install
```

### Running Locally

```bash
# Start the development server on port 3000
npm run dev
```

The app will be accessible at `http://localhost:3000`.

### Building for Production

```bash
# Build the production bundle
npm run build
```

---

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── CartDrawer.tsx          # Slide-over shopping cart
│   │   ├── Categories.tsx          # Category filters
│   │   ├── ChatBot.tsx             # Interactive AI health assistant
│   │   ├── ConsultationModal.tsx   # Doctor consultation booking modal
│   │   ├── FeaturedProducts.tsx    # Main product showcase & listings
│   │   ├── Footer.tsx              # Footer with links & certifications
│   │   ├── Hero.tsx                # Hero banner & promotional highlights
│   │   ├── Navbar.tsx              # Navigation bar & search controls
│   │   ├── PrescriptionBanner.tsx  # Prescription upload prompt
│   │   ├── ProductCard.tsx         # Reusable product card with image fallbacks
│   │   └── ProductDetailModal.tsx  # Full product modal details
│   ├── App.tsx                     # Main application layout & global state
│   ├── index.css                   # Global styles & Tailwind CSS
│   ├── main.tsx                    # React application root entry point
│   └── types.ts                    # TypeScript types and interfaces
├── metadata.json                   # Applet configuration and metadata
├── package.json                    # Project dependencies and npm scripts
└── vite.config.ts                  # Vite build configuration
```

---

## 📄 License

This project is open-source and free to use.
