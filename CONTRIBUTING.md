# Contributing to Favorite Music Website

First off, thank you for considering contributing to this project! It's people like you that make this project such a great learning experience.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Communication](#communication)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Run tests and linting
5. Commit your changes using [Conventional Commits](COMMIT_CONVENTION.md)
6. Push to your fork
7. Open a Pull Request

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, browser, Node.js version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List some examples of how this enhancement would be used**

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these `good first issue` and `help wanted` issues:

- **Good first issues** - issues that should only require a few lines of code
- **Help wanted issues** - issues which are a bit more involved

## Development Setup

### Prerequisites

- Node.js >= 20.x
- npm >= 9.x

### Setting Up Your Development Environment

1. **Fork and clone the repository:**

   ```bash
   git clone https://github.com/YOUR_USERNAME/Music-Website.git
   cd Music-Website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your API credentials from [RapidAPI/DeezerAPI](https://rapidapi.com/apidojo/api/deezer)

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Run tests:**
   ```bash
   npm run test
   ```

## Pull Request Process

1. **Ensure your code follows the coding standards** (see below)
2. **Update documentation** if you're adding new features
3. **Add tests** for new functionality
4. **Ensure all tests pass** and linting is clean
5. **Update the README.md** if needed
6. **Request review** from maintainers
7. **Once approved, your PR will be merged** by a maintainer

### PR Title Convention

PR titles should follow the [Conventional Commits](COMMIT_CONVENTION.md) format:

```
feat: add new music player component
fix: resolve API rate limiting issue
docs: update setup instructions
```

### PR Description Template

When opening a PR, please use the following template:

```markdown
## Description

Brief description of the changes

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update

## Checklist

- [ ] My code follows the style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published

## Screenshots (if applicable)

Add screenshots here to help explain your changes.

## Related Issues

Closes #(issue number)
```

## Coding Standards

### JavaScript/React

- Use functional components with hooks
- Use ES6+ syntax
- Use arrow functions for component definitions
- Destructure props when possible
- Keep components small and focused on a single responsibility

### Naming Conventions

- **Components**: PascalCase (e.g., `MusicPlayer.jsx`)
- **Utilities**: camelCase (e.g., `formatDuration.js`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS`)
- **Files**: Match the component/function name

### Code Organization

```
src/
├── components/     # Reusable UI components
├── context/        # React context providers
├── utils/          # Utility functions
├── styles/         # Global styles
├── assets/         # Static assets
├── tests/          # Test files
└── lib/            # Library configurations
```

### Comments

- Use JSDoc comments for functions and complex logic
- Explain **why** not **what**
- Keep comments up-to-date with the code

## Testing

- Write unit tests for all utility functions
- Write component tests for critical UI components
- Maintain at least 70% code coverage
- Run tests before submitting PRs:
  ```bash
  npm run test
  ```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage
```

## Communication

### Issues

- Use GitHub issues for tracking bugs and feature requests
- Search existing issues before creating new ones
- Use appropriate labels when creating issues

### Discussions

- For questions and discussions, use GitHub Discussions
- Be respectful and constructive in all communications

## Recognition

Contributors will be recognized in the README.md file. Significant contributions may also be highlighted in release notes.

---

Thank you for contributing to Favorite Music Website! 🎵
