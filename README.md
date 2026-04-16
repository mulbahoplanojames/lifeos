# LifeOS 🚀

A comprehensive personal management system built with React Router, TypeScript, and Tailwind CSS. LifeOS is designed to streamline daily tasks, medical tracking, travel planning, and shopping in one unified dashboard.

## 🏗 Project Structure

The project follows a feature-based organizational structure to ensure scalability and maintainability.

```text
├── app/
│   ├── routes/              # Page routes and navigation logic
│   ├── root.tsx             # Main application entry point
│   └── app.css              # Global styles and Tailwind imports
├── components/              # Reusable UI components
│   ├── home/                # Dashboard-specific components
│   ├── store/               # Shopping & inventory components
│   ├── tasks/               # Task management components
│   └── travel/              # Travel planning components
├── layout/                  # Shared layouts (Sidebar, Navigation)
├── data/                    # Static data and mock stores
├── types/                   # TypeScript interfaces and types
├── public/                  # Static assets (images, icons)
└── react-router.config.ts   # Framework configuration
```

---

## 🛠 Feature Access Guide

To help team members focus on specific modules, here is the breakdown of files related to each feature.

### ✅ Task Management Feature

If you are working on the **Task Feature**, these are your primary files:

- **Routes:**
  - `app/routes/tasks.tsx` - Main tasks list view.
  - `app/routes/new-task.tsx` - Form for creating new tasks.
- **Components:**
  - `components/tasks/` - UI components specific to task rendering.
- **Data & Types:**
  - `data/tasks/` - Mock data or local storage logic for tasks.
  - `types/tasks/` - TypeScript definitions for Task objects.

---

### 🏥 Medical & Health Feature

Files related to health tracking and medical records:

- **Routes:**
  - `app/routes/medical.tsx` - Health dashboard.
  - `app/routes/new-medical.tsx` - Entry form for medical records.
  - **Components:**
  - `components/medical/` - UI components specific to medical rendering.
- **Data & Types:**
  - `data/medical/` - Mock data or local storage logic for medical.
  - `types/medical/` - TypeScript definitions for medical objects.

---

### 🛒 Store & Shopping Feature

Files related to inventory and shopping lists:

- **Routes:**
  - `app/routes/store.tsx` - Store inventory view.
  - `app/routes/new-store.tsx` - Add new items to store.
- **Components:**
  - `components/store/` - Component library for the store module.
  - **Data & Types:**
  - `data/store/` - Mock data or local storage logic for store.
  - `types/store/` - TypeScript definitions for store objects.

---

### ✈️ Travel Planner Feature

Files related to trip planning and itineraries:

- **Routes:**
  - `app/routes/travel-planner.tsx` - Overview of planned trips.
  - `app/routes/new-travel-planner.tsx` - Create new trip plans.
- **Components:**
  - `components/travel/` - UI elements for maps and itineraries.
  - **Data & Types:**
  - `data/travel/` - Mock data or local storage logic for travel.
  - `types/travel/` - TypeScript definitions for travel objects.

---

### ⚙️ System & Settings

Global components and configuration:

- **Settings:** `app/routes/settings.tsx`
- **Navigation:** `layout/sidebar.tsx`
- **Dashboard Home:** `app/routes/home.tsx` & `components/home/`

---

## 🚀 Getting Started

1. **Install Dependencies:**

   ```bash
   pnpm install
   ```

2. **Run Development Server:**

   ```bash
   pnpm dev
   ```

3. **Build for Production:**
   ```bash
   pnpm build
   ```

Built with ❤️ for personal productivity.
