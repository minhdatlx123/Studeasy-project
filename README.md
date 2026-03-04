# 🎓 Studeasy - Online Learning Platform

Studeasy is a modern e-learning platform where instructors can create and sell courses, and learners can discover, enroll, and learn from thousands of quality courses. The platform features a peer-review system, refund policy, and self-issued certificates.
---------------------------------------------------------------------------------
 ⚠️**NOTICE**⚠️
  This project is currently in **Phase 0 (UI Mockup)**.
  Backend features (auth, payments, certificates, etc.) are planned for later 
 phases.
---------------------------------------------------------------------------------

## 🛠️ **Tech Stack**

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 4.2.0
- **Icons**: Lucide React 0.575.0
- **State Management**: React Hooks (useState)
- **Routing**: React Router (upcoming)
- **Linting**: ESLint

---

## ✨ Current Features (Phase 0 - UI Mockup)
✅ Responsive header and navigation (desktop + mobile)
✅ Hero section with CTA buttons
✅ Reusable course card component
✅ Mock course data rendering
✅ Mobile-first responsive layout with Tailwind CSS
✅ Basic component composition with TypeScript props

  **Hero Section**

- Attention-grabbing headline with gradient text
- Call-to-action buttons (Explore Courses, Become an Instructor)
- Gradient background design

  **Course Card Component**

- Course thumbnail image
- Course title & instructor name
- Price display with number formatting (VND)
- Star rating display
- View Details button

  **Responsive Design**

- Mobile-first approach with Tailwind CSS
- Responsive breakpoints (sm, md, lg, xl)
- Consistent spacing and typography
- Smooth hover effects and transitions

---

## 📁 **Project Structure**

```
src/
├── components/
│   ├── common/                      # Reusable components
│   │   └── Login-btn.tsx
│   ├── course/                      # Course-related components
│   │   ├── CourseCard.tsx
│   │   ├── Detail-btn.tsx
│   │   └── Rating.tsx
│   └── layout/                      # Layout components
│       ├── Header/
│       │   ├── Main-page.tsx        (Header + State Management)
│       │   ├── Navbar.tsx           (Desktop Navigation)
│       │   ├── Mobile-menu.tsx      (Mobile Menu)
│       │   └── Mobile-menuBtn.tsx   (Hamburger Button)
│       └── Hero-section/
│           ├── HeroSection.tsx
│           ├── Headline.tsx
│           └── Hero-btn.tsx
├── data/                            # Mock data
│   └── courses.ts                  # Course list data
├── assets/                          # Images & static files
├── App.tsx                          # Root component
├── main.tsx                         # Application entry point
├── App.css                          # App-level styles
└── index.css                        # Global styles
```

---

## 🚀 Roadmap

   ### Phase 1: Frontend Foundations (Current Priority)
   - [ ] Integrate React Router
   - [ ] Create main pages (Home, Courses, Course Detail, Login)
   - [ ] Render course list from mock data
   - [ ] Add basic search/filter UI

   ### Phase 2: Frontend Features
   - [ ] Build login/register UI flow (frontend only)
   - [ ] Form validation and error states
   - [ ] Add local state management for user interactions
   - [ ] Improve accessibility and responsive polish

   ### Phase 3: Backend Integration (Later)
   - [ ] Connect to real API
   - [ ] Authentication (JWT/session)
   - [ ] Database integration
   - [ ] Payment flow (future scope)

---

## 📚 **Key React & TypeScript Concepts Used**

- **Components**: Reusable UI blocks with single responsibility (CourseCard, Header, etc.)
- **Props**: Passing data from parent components to child components
- **State (useState)**: Managing component state (e.g., mobile menu open/close)
- **TypeScript Interfaces**: Type-safe prop definitions for components
- **Destructuring**: Extracting props efficiently in function parameters
- **Conditional Rendering**: Displaying content based on conditions (e.g., isOpen && <Menu />)
- **Component Composition**: Nesting and combining components to build UI
- **Tailwind CSS**: Utility-first CSS framework for responsive design

---

   ## 🎯 Project Goals

   - [x] Build responsive UI mockup
   - [x] Create reusable component structure
   - [ ] Add page routing
   - [ ] Build course listing and detail pages
   - [ ] Implement frontend auth flow (mock)
   - [ ] Prepare project portfolio for internship/junior frontend roles

---

## 🔗 **Key Learning Points**

This project is designed as a learning platform for React + TypeScript fundamentals:

- Understanding component hierarchy and props flow
- Working with React Hooks (useState, useEffect coming next)
- TypeScript interfaces for type safety
- Responsive web design with Tailwind CSS
- Building reusable and scalable components

---
## 🌐 Live Demo
- Demo: Coming soon
- Repository: https://github.com/minhdatlx123/Studeasy-project
