# Focus Flow - Todo List Application

Focus Flow is a high-performance, minimalist Todo List application built with a modern React stack. It features a premium glassmorphism design and provides a snappy, distraction-free interface for managing your daily tasks.

## 🚀 Features

- **Intuitive Task Management**: Create, toggle, edit, and delete tasks with ease.
- **Local Persistence**: Your tasks are automatically saved to your browser's local storage, ensuring they persist across sessions.
- **Premium Minimalist UI**: A clean, responsive design built with Tailwind CSS v4 and shadcn/ui.
- **Focus-Centric**: Designed to keep your current tasks front and center.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Base UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist Variable](https://vercel.com/font)

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kukaas/todo-list.git
   cd todo-list
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 🚀 Deployment

The project is configured for seamless deployment to **GitHub Pages** using GitHub Actions.

1.  Push your changes to the `main` branch.
2.  Go to your GitHub Repository **Settings** > **Pages**.
3.  Under **Build and deployment** > **Source**, select **GitHub Actions**.
4.  Your site will automatically build and deploy at `https://<your-username>.github.io/todo-list/`.

## 🧠 Core Logic & Implementation

## 🏗️ Project Structure

- `src/components/`: Reusable UI components.
- `src/hooks/`: Custom React hooks (including `useTodos`).
- `src/utils/`: General utility functions (persistence logic).
- `src/lib/`: Library configurations and shared utilities (`cn`).
