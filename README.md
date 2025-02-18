# Budget-Buddy

This is a finance web application built using Next.js. It provides users with a platform to manage their finances effectively.

## Features

- User-friendly interface for tracking finances
- Responsive design for mobile and desktop
- API for handling financial data

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Budget-Buddy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
Budget-Buddy
```
├── components
│   ├── BudgetList.tsx          # Component for listing budgets
│   ├── ExpenseList.tsx         # Component for listing expenses
│   ├── LoginForm.tsx           # User login form component
│   ├── ModalWrapper.tsx        # Wrapper for modal dialogs
│   ├── Navbar.tsx              # Navigation bar component
│   ├── RegisterForm.tsx        # User registration form component
│
├── pages
│   ├── api
│   │   ├── expenses.js         # API endpoint for expense data
│   │   ├── hello.ts            # API endpoint for greeting
│   ├── _app.js                 # Main application entry file
│   ├── index.tsx               # Main entry point of the application
│   ├── UserHome.tsx            # User dashboard/homepage
│
├── public
│   └── favicon.ico             # Favicon for the web application
│
├── scripts                     # Scripts for automation or project setup (empty for now)
│
├── styles
│   ├── BudgetList.module.css    # Styles for BudgetList component
│   ├── ExpenseList.module.css   # Styles for ExpenseList component
│   ├── globals.css              # Global CSS styles
│   ├── Home.module.css          # Styles for Home component
│   ├── LandingPage.module.css   # Styles for Landing Page
│   ├── LoginForm.module.css     # Styles for LoginForm component
│   ├── ModalWrapper.module.css  # Styles for ModalWrapper component
│   ├── Navbar.module.css        # CSS module styles for Navbar component
│   ├── RegisterForm.module.css  # Styles for RegisterForm component
│
├── .gitignore                   # Git ignore file
├── next-env.d.ts                 # TypeScript environment definitions
├── package.json                  # npm configuration file
├── pnpm-lock.yaml                # Dependency lock file for pnpm
├── README.md                     # Project documentation
├── tsconfig.json                 # TypeScript configuration file
```

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. 

## License

This project is licensed under the MIT License.