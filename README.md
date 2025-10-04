# 🧑‍💻 Portfolio Website

A **full-stack portfolio website** built with **Next.js 15**, **Express.js**, and **Prisma**, designed to showcase personal details, projects, and blogs with a polished, responsive, and performant UI.  

🔗 **Live Demo:** [https://istiak.vercel.app/](https://istiak.vercel.app)

---

## 📖 Overview

This portfolio is more than just a static site—it's a **scalable full-stack application** featuring both **public-facing pages** and an **owner-only dashboard** for content management.  

- **Public sections:** About Me, Projects Showcase, and Blogs (optimized with **ISR/SSG** for speed).  
- **Private dashboard:** JWT-authenticated admin panel to manage blog posts and projects.  
- **Architecture:** Modern, scalable, and maintainable with **strict error handling** and clean code structure.  

---

## ✨ Features

- ⚡ **Next.js 15** with the App Router (ISR/SSG for blogs & projects)  
- 🎨 **Tailwind CSS 4 + DaisyUI** for modern styling  
- 🎭 **Framer Motion & tw-animate-css** for smooth animations  
- 🎨 **Lucide & Tabler Icons** for clean UI elements  
- 🔒 **JWT-based authentication** for secure owner dashboard  
- 📂 **Prisma ORM** for database interaction  
- 🔁 **SWR** for data fetching & caching  
- ✍️ Blog & Project management via secure dashboard  
- 📱 Fully responsive & mobile-friendly  

---

## 🛠️ Technology Stack

**Frontend:**
- Next.js 15 (React 19)
- Tailwind CSS 4 + DaisyUI
- Framer Motion, Lucide, Tabler Icons
- React Hook Form + Zod for validation
- Particles.js via tsparticles  

**Backend:**
- Express.js (API layer)
- Prisma ORM  
- JWT Authentication  

**Other Tools & Utilities:**
- SWR (data fetching)
- Date-fns (date handling)
- ESLint, TypeScript for maintainability  

---

## 📂 Project Structure

```

PORTFOLIO-LATEST/
│── public/              # Static assets
│── src/
│   ├── app/             # Next.js App Router
│   │   ├── (common)/    # Shared routes & components
│   │   ├── (dashboard)/ # Owner-only dashboard
│   │   ├── login/       # Auth login route
│   │   ├── layout.tsx   # Root layout
│   │   └── globals.css  # Global styles
│   ├── components/      # UI components
│   ├── lib/             # Utility functions
│   ├── Provider/        # Context providers (Auth, Theme)
│   ├── services/        # API calls / business logic
│   ├── type/            # TypeScript types
│   ├── middleware.ts    # Middleware (auth, redirects)
│
├── .env.local           # Environment variables
├── next.config.ts       # Next.js config
├── tailwind.config.ts   # TailwindCSS config
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies & scripts

````

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/istiak19/my-portfolio
cd my-portfolio
````

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file in the root with values like:

```env
DATABASE_URL="your-prisma-database-url"
JWT_SECRET="your-secret-key"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
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

## 📘 Usage

* **Public:**

  * Browse **About Me**, **Projects Showcase**, and **Blog posts**.
* **Owner Dashboard (JWT Protected):**

  * Login via `/login`
  * Create, edit, and delete blog posts and projects.

---

## 🐛 Troubleshooting

* Ensure `.env.local` is properly configured.
* Run `npx prisma generate` if Prisma types are missing.
* If styles are not applied, check `tailwind.config.ts` and run `npm run dev` again.

---

## 👥 Contributors

* **Istiak Ahamed** – Developer & Designer