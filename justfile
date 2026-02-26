#!/usr/bin/env just --justfile

# =============================================================================
# Music Website - Development Tasks
# =============================================================================
# This justfile provides convenient shortcuts for common development tasks.
# Install just: https://github.com/casey/just
# =============================================================================

# -----------------------------------------------------------------------------
# Development Server
# -----------------------------------------------------------------------------

# Start development server
dev:
    @echo "Starting development server..."
    npm run dev

# Start development server on custom port
dev-port PORT:
    @echo "Starting development server on port {{PORT}}..."
    npm run dev -- --port {{PORT}}

# Start development server with host exposed
dev-host:
    @echo "Starting development server with host..."
    npm run dev -- --host

# -----------------------------------------------------------------------------
# Build & Preview
# -----------------------------------------------------------------------------

# Build for production
build:
    @echo "Building for production..."
    npm run build

# Build with analysis
build-analyze:
    @echo "Building with bundle analysis..."
    npm run build
    npx vite-bundle-visualizer

# Preview production build
preview:
    @echo "Previewing production build..."
    npm run preview

# Clean build artifacts
clean:
    @echo "Cleaning build artifacts..."
    -rm -rf dist/
    @echo "Clean complete!"

# Full rebuild
rebuild: clean build
    @echo "Full rebuild complete!"

# -----------------------------------------------------------------------------
# Testing
# -----------------------------------------------------------------------------

# Run all tests
test:
    @echo "Running tests..."
    npm run test -- --run

# Run tests in watch mode
test-watch:
    @echo "Running tests in watch mode..."
    npm run test -- --watch

# Run tests with coverage
test-coverage:
    @echo "Running tests with coverage..."
    npm run test -- --coverage --run
    @echo "Coverage report generated in coverage/"

# Run tests with UI
test-ui:
    @echo "Running tests with UI..."
    npm run test:ui

# Run specific test file
test-file FILE:
    @echo "Running test file: {{FILE}}"
    npm run test -- --run {{FILE}}

# -----------------------------------------------------------------------------
# Linting & Formatting
# -----------------------------------------------------------------------------

# Run ESLint
lint:
    @echo "Running ESLint..."
    npm run lint

# Run ESLint with auto-fix
lint-fix:
    @echo "Running ESLint with auto-fix..."
    npm run lint:fix

# Run Prettier check
format-check:
    @echo "Checking code formatting..."
    npm run format:check

# Run Prettier auto-format
format:
    @echo "Formatting code..."
    npm run format

# Run all code quality checks
check: lint format-check test
    @echo "All checks passed!"

# Fix all auto-fixable issues
fix: lint-fix format
    @echo "All fixes applied!"

# -----------------------------------------------------------------------------
# Type Checking
# -----------------------------------------------------------------------------

# Run TypeScript check
typecheck:
    @echo "Running TypeScript check..."
    npm run tsc

# -----------------------------------------------------------------------------
# Dependencies
# -----------------------------------------------------------------------------

# Install dependencies
install:
    @echo "Installing dependencies..."
    npm install

# Clean install
install-clean:
    @echo "Cleaning and reinstalling dependencies..."
    -rm -rf node_modules/ package-lock.json
    npm install

# Update dependencies
update:
    @echo "Updating dependencies..."
    npm update

# Check for outdated packages
outdated:
    @echo "Checking for outdated packages..."
    npm outdated

# Run security audit
audit:
    @echo "Running security audit..."
    npm audit

# Fix security vulnerabilities
audit-fix:
    @echo "Fixing security vulnerabilities..."
    npm audit fix

# Deep security audit
audit-detailed:
    @echo "Running detailed security audit..."
    npm audit --audit-level=low

# -----------------------------------------------------------------------------
# Git & Commits
# -----------------------------------------------------------------------------

# Commit with interactive prompt
commit:
    @echo "Interactive commit..."
    npx git-cz

# Run pre-commit hooks manually
precommit:
    @echo "Running pre-commit hooks..."
    npx lint-staged

# Setup Husky hooks
setup-hooks:
    @echo "Setting up Husky hooks..."
    npm run prepare
    @echo "Husky hooks setup complete!"

# Show git status
status:
    @echo "Git Status:"
    git status --short

# Show recent commits
log:
    @echo "Recent commits:"
    git log --oneline -10

# -----------------------------------------------------------------------------
# Environment
# -----------------------------------------------------------------------------

# Setup environment file
env-setup:
    @echo "Setting up environment file..."
    @if [ ! -f .env ]; then \
        cp .env.example .env; \
        echo ".env file created from .env.example"; \
        echo "Please edit .env and add your API credentials"; \
    else \
        echo ".env file already exists"; \
    fi

# Check environment variables
env-check:
    @echo "Checking environment variables..."
    @if [ -f .env ]; then \
        echo ".env file exists"; \
        echo "Variables defined:"; \
        grep -v "^#" .env | grep -v "^$" | cut -d'=' -f1 | sed 's/^/  - /'; \
    else \
        echo ".env file not found!"; \
        echo "Run 'just env-setup' to create it"; \
        exit 1; \
    fi

# -----------------------------------------------------------------------------
# Deployment
# -----------------------------------------------------------------------------

# Deploy to Netlify (manual)
deploy: build
    @echo "Deploying to Netlify..."
    @echo "Deployment is automated via GitHub Actions"
    @echo "Push to main branch to trigger deployment"

# Check deployment status
deploy-status:
    @echo "Checking deployment status..."
    @echo "Visit: https://app.netlify.com/sites/YOUR_SITE/deploys"

# -----------------------------------------------------------------------------
# Documentation
# -----------------------------------------------------------------------------

# View README
readme:
    @echo "Opening README..."
    @if command -v xdg-open > /dev/null; then \
        xdg-open README.md; \
    elif command -v open > /dev/null; then \
        open README.md; \
    else \
        cat README.md; \
    fi

# View contributing guide
contributing:
    @echo "Opening CONTRIBUTING.md..."
    @if command -v xdg-open > /dev/null; then \
        xdg-open CONTRIBUTING.md; \
    elif command -v open > /dev/null; then \
        open CONTRIBUTING.md; \
    else \
        cat CONTRIBUTING.md; \
    fi

# View commit convention
commit-convention:
    @echo "Opening COMMIT_CONVENTION.md..."
    @if command -v xdg-open > /dev/null; then \
        xdg-open COMMIT_CONVENTION.md; \
    elif command -v open > /dev/null; then \
        open COMMIT_CONVENTION.md; \
    else \
        cat COMMIT_CONVENTION.md; \
    fi

# -----------------------------------------------------------------------------
# Utilities
# -----------------------------------------------------------------------------

# Show help
help:
    @echo "Music Website - Development Tasks"
    @echo ""
    @echo "Usage: just <task> [arguments]"
    @echo ""
    @echo "Popular tasks:"
    @echo "  dev              Start development server"
    @echo "  build            Build for production"
    @echo "  test             Run all tests"
    @echo "  lint             Run ESLint"
    @echo "  format           Format code with Prettier"
    @echo "  check            Run all code quality checks"
    @echo "  fix              Fix all auto-fixable issues"
    @echo "  commit           Interactive commit"
    @echo "  env-setup        Setup environment file"
    @echo "  install-clean   Clean reinstall dependencies"
    @echo "  help             Show this help message"
    @echo ""
    @echo "For full list, visit: https://github.com/casey/just"

# Default task
default: help

# Quick setup for new developers
setup: install env-setup setup-hooks
    @echo ""
    @echo "Setup complete!"
    @echo ""
    @echo "Next steps:"
    @echo "  1. Edit .env and add your API credentials"
    @echo "  2. Run 'just dev' to start development"
    @echo ""

# Full CI check (simulate CI pipeline)
ci: check typecheck build
    @echo ""
    @echo "CI checks passed!"
    @echo ""

# Release preparation
release: check test build
    @echo ""
    @echo "Ready for release!"
    @echo "Next steps:"
    @echo "  1. Update version in package.json"
    @echo "  2. Run: git tag -a vVERSION -m 'Release vVERSION'"
    @echo "  3. Run: git push origin vVERSION"
    @echo ""
