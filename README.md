# Personal Portfolio

A modern, responsive personal portfolio website with dark/light theme switching built with React 19, TypeScript, and Styled Components.

## ✨ Features

- **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **Smooth Scrolling Navigation** - Single-page design with smooth scroll to sections
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Modern UI** - Clean, professional design with smooth animations
- **TypeScript** - Full type safety throughout the application
- **Styled Components** - Component-based styling with theme support
- **Phosphor Icons** - Beautiful icon library for a polished look

## 🛠️ Technologies Used

- **React 19.2** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite 7** - Lightning-fast build tool and dev server
- **Styled Components 6** - CSS-in-JS styling solution
- **Phosphor Icons** - High-quality icon library
- **Context API** - State management for theme switching
- **localStorage** - Theme preference persistence

## 📂 Project Structure

```
src/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   ├── theme/
│   └── projects/
├── contexts/
├── theme/
│   ├── theme.ts
│   ├── styled.d.ts
│   └── GlobalStyles.ts
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd react-ts
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 How the Theme Switcher Works

The theme switching system is built using React Context API and styled-components:

1. **ThemeContext** manages the current theme state (`light` or `dark`)
2. **localStorage** persists the user's theme preference across sessions
3. **System Preference Detection** - Automatically detects OS dark mode on first visit
4. **ThemeToggle Component** - Button in the header to switch between themes
5. **styled-components ThemeProvider** - Provides theme values to all components

### Theme Flow:

```
User clicks ThemeToggle
  → toggleTheme() function called
  → State updates (light ↔ dark)
  → Theme saved to localStorage
  → ThemeProvider re-renders with new theme
  → All styled components update smoothly
```

## 🎨 Customization Guide

### Changing Theme Colors

Edit `src/theme/theme.ts`:

```typescript
export const lightTheme: Theme = {
  colors: {
    primary: '#2563eb', // Change to your brand color
    secondary: '#7c3aed', // Change accent color
    background: '#ffffff', // Page background
    // ... other colors
  },
  // ... rest of theme
};
```

### Adding New Projects

Edit `src/components/sections/Projects.tsx`:

```typescript
const placeholderProjects: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    description: 'Brief description of your project',
    image: '',
    tags: ['React', 'TypeScript', 'Node.js'],
    demoUrl: 'https://your-demo.com',
    codeUrl: 'https://github.com/gkanawati/project',
  },
  // Add more projects...
];
```

### Updating Personal Information

- **Name & Title**: Edit `src/components/sections/Hero.tsx`
- **Bio & Skills**: Edit `src/components/sections/About.tsx`
- **Contact Info**: Edit `src/components/sections/Contact.tsx`
- **Social Links**: Edit `src/components/layout/Footer.tsx`

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.tsx`
3. Add a navigation link in `src/components/layout/Navigation.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1024px (adjusted layouts)
- **Desktop**: > 1024px (full multi-column layouts)

## 🧩 Component Architecture

### Reusable Components

- **Button** - Three variants (primary, secondary, outline)
- **Card** - Container with hover effects
- **Container** - Content wrapper with responsive padding

### Layout Components

- **Header** - Fixed header with navigation and theme toggle
- **Navigation** - Smooth scroll links with mobile hamburger menu
- **Footer** - Social links and copyright information

### Section Components

- **Hero** - Landing section with call-to-action buttons
- **About** - Bio and skills showcase
- **Projects** - Grid of project cards
- **Contact** - Contact methods and social links

## 🎯 Best Practices Implemented

✅ Functional components with React Hooks
✅ TypeScript for type safety
✅ Styled Components for scoped styling
✅ Context API for global state
✅ localStorage for data persistence
✅ Responsive mobile-first design
✅ Semantic HTML for accessibility
✅ Smooth animations and transitions
✅ Clean, maintainable code structure

## 📧 Contact

For questions or feedback, reach out via:

- Email: gabrielkanawati3@gmail.com
- GitHub: [gkanawati](https://github.com/gkanawati)
- LinkedIn: [gabrielkanawati](https://www.linkedin.com/in/gabrielkanawati/)
