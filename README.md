# Frontend Technical Assessment

A modern Single Page Application featuring a secure authentication system and protected dashboard. Built with React 19, Vite, and TailwindCSS as part of a frontend technical assessment.

## Project Overview

This assessment project demonstrates a production-ready authentication system with protected routes. It showcases modern React development practices, clean architecture, and comprehensive testing strategies.

## Features

### Authentication & Security

- Login form with email/password validation using Formik + Yup
- "Remember me" functionality with localStorage/sessionStorage abstraction
- Global error handling with custom AppError + parseError utility
- Protected routes implementation using React Router
- Session management

### Architecture

- Modular architecture with clear separation of concerns
- Service layer abstraction for API calls
- Custom hooks for business logic
- Utility functions for common operations
- Component composition patterns

### Development & Testing

- Component documentation with Storybook
- Unit testing with Vitest and Testing Library
- Component isolation and reusability
- Type safety with TypeScript

## Tech Stack

- **Core:**

  - React 19
  - TypeScript
  - Vite
  - TailwindCSS 4

- **Form & Validation:**

  - Formik
  - Yup

- **Routing:**

  - React Router DOM

- **Testing & Documentation:**
  - Vitest
  - Testing Library
  - Storybook

## Project Structure

```
src/
├── components/
│   ├── icons/     # SVG icons and icon components
│   └── ui/        # Reusable UI components
├── pages/         # Page components
├── routes/        # Route definitions and guards
├── services/      # API and storage services
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── validation/    # Form validation schemas
├── constants/     # Constant values and configurations
├── assets/        # Static assets
└── tests/         # Test files
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/lmontero18/code-assesment-luis-montero.git
cd code-assesment-luis-montero
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript compiler and Vite build)
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview production build
- `npm run storybook` - Launch Storybook documentation
- `npm run build-storybook` - Build Storybook for production
- `npm run test` - Run tests in watch mode
- `npm run coverage` - Generate test coverage report

## Design

The UI follows a modern, minimalist design featuring:

- Split screen layout with contrasting panels
- Left panel with gradient blue background
- Right panel with clean white background and login form
- Responsive design that adapts to different screen sizes
- Focus on accessibility and user experience

## Implementation Notes

Some aspects of this implementation go beyond typical assessment requirements to demonstrate production-level architecture:

### Error Handling

- Custom AppError class for structured error handling
- Error parsing utility for consistent error messages
- Global error boundary for uncaught exceptions

### Service Layer

- Authentication service with token management
- Storage service abstraction for flexible storage strategies
- Service interfaces for better maintainability

### State Management

- Custom hooks for business logic
- Form state management with Formik
- Protected route state handling

### Testing Strategy

- Component unit tests
- Hook testing
- Service layer tests
- Visual testing with Storybook

## Future Improvements

- Add refresh token mechanism
- Implement password recovery flow
- Add toast notifications for better UX
- Implement dark mode theme
- Add E2E testing with Cypress

## Author

Luis Eduardo Montero Molina

## License

MIT © Luis Eduardo Montero Molina
