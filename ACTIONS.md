# Machine Code Interview Project Actions

## Overview
This document outlines the actions, workflows, and guidelines for the "Machine Code Interview" React project using Vite as the bundler. It serves as a reference for developers working on the project.

## Project Setup
1. **Clone the Repository**
   - Use the following command to clone the repository:
     ```
     git clone <repository-url>
     ```

2. **Install Dependencies**
   - Navigate to the project directory and install the required dependencies:
     ```
     cd machine-code-interview
     npm install
     ```

3. **Run the Development Server**
   - Start the development server with:
     ```
     npm run dev
     ```
   - Open your browser and navigate to `http://localhost:3000` to view the application.

## Development Guidelines
- **Component Structure**
  - All reusable components should be placed in the `src/components` directory.
  - Each component should be in its own file and exported from `src/components/index.ts`.

- **Page Structure**
  - Page components should be organized in the `src/pages` directory.
  - Similar to components, each page should be in its own file and exported from `src/pages/index.ts`.

- **Type Definitions**
  - TypeScript types and interfaces should be defined in `src/types/index.ts` for better type safety and code clarity.

# AI Code Generation Command
Generate frontend code that adheres to Core Web Vitals, SEO best practices, semantic HTML, and Web Accessibility (keyboard navigation, screen reader support).

## Version Control
- **Branching Strategy**
  - Use feature branches for new features or bug fixes. The naming convention should be `feature/<feature-name>` or `bugfix/<bug-name>`.
  
- **Committing Changes**
  - Write clear and concise commit messages. Follow the format:
    ```
    [type]: [subject]
    ```
    Example:
    ```
    feat: add user authentication component
    ```

## Deployment
- **Build the Application**
  - To create a production build, run:
    ```
    npm run build
    ```

- **Preview the Build**
  - To preview the production build locally, use:
    ```
    npm run serve
    ```

## Additional Resources
- Refer to the [README.md](README.md) for detailed project documentation and usage instructions.
- Consult the Vite documentation for advanced configuration options and features.

## Conclusion
This document serves as a guide for maintaining consistency and efficiency in the development process of the "Machine Code Interview" project. For any questions or clarifications, please reach out to the project maintainers.