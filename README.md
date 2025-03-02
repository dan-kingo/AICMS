# AI-Assisted Complaint Management System (Front-End)

## 🚀 Overview

The **AI-Assisted Complaint Management System** is a web-based platform designed to streamline handling complaints in the Ethiopian Electric Utility. This is the frontend of the application which  is built using modern technologies, including **React, Vite, ShadCN, TailwindCSS, Framer Motion, and React Router DOM**, ensuring a fast, responsive, and visually appealing user experience.

## 🛠 Tech Stack

- **Framework:** React + Vite ⚡
- **UI Components:** ShadCN 🖌️
- **Styling:** TailwindCSS 🎨
- **Routing:** React Router DOM 🏗️
- **Animation:** Framer Motion
- **Programming Language:** Typescript

## 📦 Installation

### **1. Clone the Repository**

```sh
git clone https://github.com/dan-kingo/AICMS.git
cd AICMS
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Start the Development Server**

```sh
npm run dev
```

The app will be available at `http://localhost:5173/`.

## 📌 Project Structure

```
📦 AICMS
 ┣ 📂 src
 ┃ ┣ 📂 assets   # assets to be used
 ┃ ┣ 📂 components   # Reusable UI components
 ┃ ┣ 📂 pages        # Main application pages
 ┃ ┣ 📂 routes       # Route configurations
 ┃ ┣ 📜 main.tsx     # Application entry point
 ┃ ┗ 📜 App.tsx      # Main app component
 ┣ 📜 index.html     # Root HTML file
 ┣ 📜 tailwind.config.js  # TailwindCSS configuration
 ┣ 📜 vite.config.ts  # Vite configuration
 ┣ 📜 components.json  # schadcn configuration
 ┣ 📜 tsconfig.app.jdon  # Typescript configuration
 ┣ 📜 tsconfig.json  # Typescript configuration
 ┣ 📜 tsconfig.node.json  # Typescript configuration
 ┗ 📜 package.json   # Dependencies and scripts
```

## 🚀 Features

- 📌 **User Authentication:** Secure login & registration
- 🔍 **Complaint Submission & Tracking:** Users can submit complaints and monitor progress
- 🤖 **AI Assistance:** Automated responses for frequent complaints
- 📊 **Admin Dashboard:** Insights and analytics for complaint management
- 🎨 **Modern UI:** Fast, accessible, and responsive design

## 📄 Routing Setup

This project uses **React Router DOM** for navigation. Below are the main routes:

```tsx
import { createBrowserRouter } from "react-router-dom";
import { About, Contact, Help, Home, Login, Register } from "./pages";
import Layout from "./pages/Layout";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

```


## 🛠 Customizing TailwindCSS

Modify `index.css` to add custom fonts, colors, and spacing.

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Palanquin:wght@100;200;300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

body {
    @apply bg-body font-poppins text-foreground;
  }
}

@theme {
  --font-roboto: "Roboto", sans-serif;
  --font-poppins: "Poppins";
  --font-inter: "Inter";
  --font-palanquin: "Palanquin";
  --color-primary: #ff784b;
  --color-secondary: #c6635a;
  --color-body: #f2f2f2;
  --color-dark: #212121;
}
```

## 🌍 Deployment

### **1. Build the Project**

```sh
npm run build
```
---

🚀 **It is under development** 🎯

