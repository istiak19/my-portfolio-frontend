# 🧑‍💻 Portfolio Website

A **full-stack portfolio website** built with **Next.js 15**, **NextAuth.js (Credentials)**, **Express.js**, and **Prisma**, designed to showcase personal details, projects, and blogs with a polished, responsive, and performant UI.

🔗 **Live Demo:** [https://istiak.vercel.app/](https://istiak.vercel.app)

---

## 📖 Overview

This portfolio is a **scalable full-stack application** that features both **public-facing pages** and an **owner-only dashboard** for managing blogs and projects.

* **Public sections:** About Me, Projects Showcase, and Blogs (optimized with **ISR/SSG**).
* **Private dashboard:** Protected using **NextAuth.js Credentials Provider** with session-based authentication.
* **Architecture:** Modular, performant, and built for scalability with TypeScript and Prisma ORM.

---

## ✨ Features

* ⚡ **Next.js 15** with App Router (ISR/SSG for blogs & projects)
* 🎨 **Tailwind CSS 4 + DaisyUI** for modern responsive styling
* 🎭 **Framer Motion & tw-animate-css** for smooth animations
* 🎨 **Lucide & Tabler Icons** for polished UI visuals
* 🔐 **NextAuth.js (Credentials Provider)** for secure login/logout
* 🧩 **Protected routes** for the admin dashboard via middleware
* 📂 **Prisma ORM** for database access
* 🔁 **SWR** for client-side data fetching and caching
* ✍️ Manage blogs and projects through an authenticated dashboard
* 📱 **Fully responsive** for all screen sizes

---

## 🛠️ Technology Stack

**Frontend:**

* Next.js 15 (React 19)
* Tailwind CSS 4 + DaisyUI
* Framer Motion, Lucide, Tabler Icons
* React Hook Form + Zod for validation
* tsparticles for animated backgrounds

**Backend:**

* Express.js (API layer)
* Prisma ORM
* NextAuth.js (Credentials Provider for authentication)

**Utilities:**

* SWR (data fetching)
* Date-fns (date formatting)
* ESLint + TypeScript for clean, maintainable code

---

## 📂 Project Structure

```
PORTFOLIO-LATEST/
│── public/              # Static assets
│── src/
│   ├── app/
│   │   ├── (common)/    # Shared routes & components
│   │   ├── (dashboard)/ # Owner-only dashboard (protected)
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...nextauth]/route.ts  # NextAuth Credentials setup
│   │   ├── login/       # Login page
│   │   ├── layout.tsx   # Root layout
│   │   └── globals.css  # Global styles
│   ├── components/      # Reusable components
│   ├── lib/             # Utility helpers
│   ├── Provider/        # Context providers (Auth, Theme)
│   ├── services/        # API business logic
│   ├── type/            # TypeScript interfaces
│   ├── middleware.ts    # Route protection
│
├── .env.local           # Environment variables
├── next.config.ts       # Next.js config
├── tailwind.config.ts   # Tailwind config
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies & scripts
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/istiak19/my-portfolio
cd my-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="your-prisma-database-url"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Run Prisma migrations

```bash
npx prisma migrate dev
```

### 5. Start development server

```bash
npm run dev
```

App runs at **[http://localhost:3000](http://localhost:3000)** 🚀

---

## 🔐 Authentication (Custom Credentials)

This portfolio uses **NextAuth.js** with a **Credentials Provider** to handle secure login and logout.

### 🚪 Login & Logout

* **Login:** Visit `/login` and enter your credentials.
* **Logout:** Use the logout button in the dashboard to securely end your session.

---

## 📘 Usage

* **Public:**

  * Browse **About Me**, **Projects**, and **Blog**.
* **Owner Dashboard (Protected):**

  * Login via `/login`
  * Create, edit, or delete blogs and projects
  * Logout securely with session invalidation

---

## 🐛 Troubleshooting

* Ensure `.env.local` is correctly set up.
* Run `npx prisma generate` if Prisma types are missing.
* If login fails, verify:

  * User exists in the database
  * Passwords are hashed using `bcryptjs`
  * `NEXTAUTH_SECRET` is defined

---

## 👥 Contributors

* **Istiak Ahamed** – Developer & Designer