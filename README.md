# AI-Assisted Complaint Management System

## 🖼️ Project Screenshots

### 🔐 Home Page
![Login Screenshot](https://res.cloudinary.com/dpm44ocft/image/upload/v1751784482/p10_fjo3ad.png)

---

### 🏠 Admin Dashboard
![Dashboard Screenshot](https://res.cloudinary.com/dpm44ocft/image/upload/v1751784482/p9_gt7syu.png)

---

### 👤 Profile Page
![Profile Screenshot](https://res.cloudinary.com/dpm44ocft/image/upload/v1751784482/p8_xgo9v2.png)

---

### ⚙️ Complaint History Page
![Settings Screenshot](https://res.cloudinary.com/dpm44ocft/image/upload/v1751784487/p7_on7hw9.png)



## 🚀 Overview

The **AI-Assisted Complaint Management System** is a comprehensive web-based platform designed to streamline complaint handling for the Ethiopian Electric Utility. Built with modern technologies including **React, Vite, ShadCN, TailwindCSS, Framer Motion, and React Router DOM**, this system provides a fast, responsive, and visually appealing user experience with intelligent complaint processing capabilities.

## ✨ Key Features

- 🤖 **AI-Powered Complaint Categorization** - Automatic classification for faster resolutions
- 📊 **Real-Time Tracking** - Monitor complaint progress instantly
- 🔐 **Secure Authentication** - User registration, login, and OTP verification
- 📱 **Responsive Design** - Optimized for all devices
- 🌐 **Multi-Language Support** - English and Amharic localization
- 🌙 **Dark/Light Mode** - Theme switching capability
- 💬 **AI Chatbot** - Powered by Gemini for instant assistance
- 📧 **Email Notifications** - Real-time updates on complaint status
- 📈 **Analytics Dashboard** - Insights for administrators

## 🛠 Tech Stack

- **Framework:** React 19 + Vite ⚡
- **UI Components:** ShadCN/UI 🖌️
- **Styling:** TailwindCSS 4.0 🎨
- **Routing:** React Router DOM 🏗️
- **Animation:** Framer Motion ✨
- **State Management:** Zustand 🐻
- **Form Handling:** React Hook Form + Zod
- **HTTP Client:** Axios
- **Internationalization:** React i18next
- **Programming Language:** TypeScript

## 📦 Installation

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager

### **1. Clone the Repository**

```bash
git clone https://github.com/dan-kingo/AICMS.git
cd AICMS
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Environment Setup**

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://aicms-api.onrender.com
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key
```

### **4. Start the Development Server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 📌 Project Structure

```
📦 AICMS
 ┣ 📂 public
 ┃ ┣ 📜 icons8-flash-100.png
 ┃ ┗ 📜 _redirects
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┃ ┣ 📂 constants          # Application constants and configurations
 ┃ ┃ ┃ ┣ 📜 changePassword.ts
 ┃ ┃ ┃ ┣ 📜 complaintCategory.ts
 ┃ ┃ ┃ ┣ 📜 complaints.ts
 ┃ ┃ ┃ ┣ 📜 contact.ts
 ┃ ┃ ┃ ┣ 📜 FAQ.ts
 ┃ ┃ ┃ ┣ 📜 features.ts
 ┃ ┃ ┃ ┣ 📜 formData.ts
 ┃ ┃ ┃ ┣ 📜 icons.ts
 ┃ ┃ ┃ ┣ 📜 issueOptions.ts
 ┃ ┃ ┃ ┣ 📜 loginData.ts
 ┃ ┃ ┃ ┣ 📜 navLinks.ts
 ┃ ┃ ┃ ┣ 📜 profileData.ts
 ┃ ┃ ┃ ┣ 📜 registerData.ts
 ┃ ┃ ┃ ┣ 📜 sidebarItems.ts
 ┃ ┃ ┃ ┗ 📜 social.ts
 ┃ ┃ ┗ 📂 images             # Static images and assets
 ┃ ┣ 📂 components           # Reusable UI components
 ┃ ┃ ┣ 📂 ui                 # ShadCN UI components
 ┃ ┃ ┣ 📜 Chatbot.tsx
 ┃ ┃ ┣ 📜 ComplaintCategorySelect.tsx
 ┃ ┃ ┣ 📜 ComplaintCheckboxes.tsx
 ┃ ┃ ┣ 📜 ComplaintForm.tsx
 ┃ ┃ ┣ 📜 ContactForm.tsx
 ┃ ┃ ┣ 📜 ContactInfo.tsx
 ┃ ┃ ┣ 📜 CustomDialogComponent.tsx
 ┃ ┃ ┣ 📜 CustomDropdown.tsx
 ┃ ┃ ┣ 📜 CustomSidebar.tsx
 ┃ ┃ ┣ 📜 CustomTable.tsx
 ┃ ┃ ┣ 📜 DarkModeToggle.tsx
 ┃ ┃ ┣ 📜 DashboardNavbar.tsx
 ┃ ┃ ┣ 📜 DeleteAccount.tsx
 ┃ ┃ ┣ 📜 EditProfileForm.tsx
 ┃ ┃ ┣ 📜 FAQAccordion.tsx
 ┃ ┃ ┣ 📜 FeatureCard.tsx
 ┃ ┃ ┣ 📜 Footer.tsx
 ┃ ┃ ┣ 📜 LanguageSwitcher.tsx
 ┃ ┃ ┣ 📜 LoginForm.tsx
 ┃ ┃ ┣ 📜 Map.tsx
 ┃ ┃ ┣ 📜 Navbar.tsx
 ┃ ┃ ┣ 📜 NotificationDropdown.tsx
 ┃ ┃ ┣ 📜 ProfilePictureUpload.tsx
 ┃ ┃ ┣ 📜 RegisterForm.tsx
 ┃ ┃ ┣ 📜 SearchInput.tsx
 ┃ ┃ ┣ 📜 SocialLink.tsx
 ┃ ┃ ┗ 📜 theme-provider.tsx
 ┃ ┣ 📂 contexts            # React contexts for state management
 ┃ ┃ ┣ 📜 AuthContext.tsx
 ┃ ┃ ┗ 📜 AuthProvider.tsx
 ┃ ┣ 📂 hooks               # Custom React hooks
 ┃ ┃ ┣ 📜 use-mobile.ts
 ┃ ┃ ┣ 📜 useAuth.ts
 ┃ ┃ ┣ 📜 useComplaint.ts
 ┃ ┃ ┣ 📜 useComplaintAI.ts
 ┃ ┃ ┣ 📜 useContact.ts
 ┃ ┃ ┣ 📜 useDeleteAccount.ts
 ┃ ┃ ┣ 📜 useForgotPassword.ts
 ┃ ┃ ┣ 📜 useLogin.ts
 ┃ ┃ ┣ 📜 useLogout.ts
 ┃ ┃ ┣ 📜 useMessage.ts
 ┃ ┃ ┣ 📜 usePassword.ts
 ┃ ┃ ┣ 📜 useRegister.ts
 ┃ ┃ ┣ 📜 useResetPassword.ts
 ┃ ┃ ┣ 📜 useUpdate.ts
 ┃ ┃ ┣ 📜 useUser.ts
 ┃ ┃ ┗ 📜 useUserComplaints.ts
 ┃ ┣ 📂 locales             # Internationalization files
 ┃ ┃ ┣ 📂 en
 ┃ ┃ ┃ ┗ 📜 translation.json
 ┃ ┃ ┗ 📂 am
 ┃ ┃   ┗ 📜 translation.json
 ┃ ┣ 📂 pages               # Main application pages
 ┃ ┃ ┣ 📜 About.tsx
 ┃ ┃ ┣ 📜 ChangePassword.tsx
 ┃ ┃ ┣ 📜 ComplaintHistory.tsx
 ┃ ┃ ┣ 📜 Contact.tsx
 ┃ ┃ ┣ 📜 Dashboard.tsx
 ┃ ┃ ┣ 📜 Error.tsx
 ┃ ┃ ┣ 📜 FAQs.tsx
 ┃ ┃ ┣ 📜 ForgotPassword.tsx
 ┃ ┃ ┣ 📜 HelpAndSupport.tsx
 ┃ ┃ ┣ 📜 Home.tsx
 ┃ ┃ ┣ 📜 Layout.tsx
 ┃ ┃ ┣ 📜 Login.tsx
 ┃ ┃ ┣ 📜 MakeComplaint.tsx
 ┃ ┃ ┣ 📜 OTPVerification.tsx
 ┃ ┃ ┣ 📜 Register.tsx
 ┃ ┃ ┣ 📜 ResetPassword.tsx
 ┃ ┃ ┣ 📜 Settings.tsx
 ┃ ┃ ┣ 📜 UserProfile.tsx
 ┃ ┃ ┗ 📜 index.ts
 ┃ ┣ 📂 store               # Zustand state management
 ┃ ┃ ┣ 📜 complaintStore.ts
 ┃ ┃ ┣ 📜 notificationsStore.ts
 ┃ ┃ ┗ 📜 userStore.ts
 ┃ ┣ 📂 utils               # Utility functions and schemas
 ┃ ┃ ┣ 📜 changePasswordSchema.ts
 ┃ ┃ ┣ 📜 complaintValidation.ts
 ┃ ┃ ┣ 📜 contactFormSchema.ts
 ┃ ┃ ┣ 📜 loginFormSchema.ts
 ┃ ┃ ┣ 📜 profileUpdateSchema.ts
 ┃ ┃ ┗ 📜 registerFormSchema.ts
 ┃ ┣ 📜 App.tsx             # Main app component
 ┃ ┣ 📜 main.tsx            # Application entry point
 ┃ ┣ 📜 routes.tsx          # Route configurations
 ┃ ┣ 📜 i18n.ts             # Internationalization setup
 ┃ ┣ 📜 index.css           # Global styles
 ┃ ┗ 📜 vite-env.d.ts       # Vite type definitions
 ┣ 📜 index.html            # Root HTML file
 ┣ 📜 tailwind.config.js    # TailwindCSS configuration
 ┣ 📜 vite.config.ts        # Vite configuration
 ┣ 📜 components.json       # ShadCN configuration
 ┣ 📜 tsconfig.app.json     # TypeScript configuration
 ┣ 📜 tsconfig.json         # TypeScript configuration
 ┣ 📜 tsconfig.node.json    # TypeScript configuration
 ┣ 📜 babel.config.cjs      # Babel configuration
 ┣ 📜 eslint.config.js      # ESLint configuration
 ┣ 📜 netlify.toml          # Netlify deployment config
 ┣ 📜 render.yaml           # Render deployment config
 ┗ 📜 package.json          # Dependencies and scripts
```

## 🚀 Core Features

### 🔐 **Authentication System**
- User registration with OTP verification
- Secure login/logout functionality
- Password reset via email
- Protected routes and role-based access

### 📝 **Complaint Management**
- Submit complaints with file attachments
- AI-powered automatic categorization
- Real-time status tracking
- Complaint history and search functionality

### 🤖 **AI Integration**
- Intelligent complaint classification
- Automated response suggestions
- Gemini-powered chatbot assistance
- Smart issue detection and routing

### 📊 **Dashboard & Analytics**
- User profile management
- Complaint statistics and insights
- Real-time notifications
- Progress tracking visualizations

### 🌐 **User Experience**
- Responsive design for all devices
- Dark/Light theme switching
- Multi-language support (EN/AM)
- Smooth animations and transitions
- Accessibility-focused design

## 📄 Routing Structure

The application uses **React Router DOM** for navigation:

```tsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "faqs", element: <FAQs /> },
      { path: "contact-us", element: <Contact /> },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <UserProfile /> },
      { path: "add-complaint", element: <MakeComplaint /> },
      { path: "change-password", element: <ChangePassword /> },
      { path: "help", element: <HelpAndSupport /> },
      { path: "settings", element: <Settings /> },
      { path: "complaints", element: <ComplaintHistory /> },
    ],
  },
]);
```

## 🎨 Customizing Styles

The project uses TailwindCSS with custom theme configuration. Modify `src/index.css` to customize fonts, colors, and spacing:

```css
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

### **Build for Production**

```bash
npm run build
```

### **Preview Production Build**

```bash
npm run preview
```

### **Deployment Platforms**

The project is configured for deployment on:
- **Netlify** (via `netlify.toml`)
- **Render** (via `render.yaml`)
- **Vercel** (zero-config deployment)

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
npm run extract:i18n # Extract translation strings
```

## 🌐 Internationalization

The application supports multiple languages using `react-i18next`:

- **English (EN)** - Default language
- **Amharic (AM)** - Ethiopian local language

Translation files are located in `src/locales/[language]/translation.json`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 👥 Team

- **Developer:** Dan-Kingo
- **Organization:** Ethiopian Electric Utility
- **Contact:** [GitHub Profile](https://github.com/dan-kingo)

## 🙏 Acknowledgments

- Ethiopian Electric Utility for project requirements
- ShadCN/UI for beautiful component library
- React community for excellent ecosystem
- All contributors and testers

---

**Status:** ✅ **Production Ready** - The system is fully functional and deployed for the Ethiopian Electric Utility complaint management operations.
