# CI/CD Pipeline Documentation

This document provides a comprehensive guide to the CI/CD pipeline and defensive features implemented in this project.

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [GitHub Actions Workflows](#github-actions-workflows)
4. [Pre-commit Hooks](#pre-commit-hooks)
5. [Branch Protection](#branch-protection)
6. [Security Features](#security-features)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

## Overview

### Pipeline Architecture

```
Developer Workflow
|
├── 1. Local Development
│   ├── Pre-commit hooks (Husky + lint-staged)
│   ├── Commit message validation (Commitlint)
│   └── Pre-push build verification
|
├── 2. Pull Request
│   ├── Automated testing (Vitest)
│   ├── Linting (ESLint)
│   ├── Type checking (TypeScript)
│   ├── Security scanning
│   ├── PR size validation
│   └── Secret detection
|
└── 3. Merge to Main
    ├── Production build
    ├── Deploy to Netlify
    └── Create release notes
```

### Files Created

```
.github/
├── workflows/
│   ├── ci-cd.yml              # Main CI/CD pipeline
│   ├── branch-protection.yml  # PR validation
│   ├── pr-labeler.yml         # Auto-labeling PRs
│   └── dependabot-auto-merge.yml  # Dependency updates
├── ISSUE_TEMPLATE/
│   ├── bug_report.md
│   ├── feature_request.md
│   └── config.yml
├── PULL_REQUEST_TEMPLATE.md
├── labeler.yml
├── labeler-config.yml
└── dependabot.yml
.husky/
├── pre-commit
├── commit-msg
└── pre-push
.env.example
.gitignore
.gitattributes
.lintstagedrc
.huskyrc
commitlint.config.js
CODE_OF_CONDUCT.md
CONTRIBUTING.md
COMMIT_CONVENTION.md
SECURITY.md
justfile
```

## Quick Start

### Initial Setup

```bash
# 1. Install dependencies
npm install

# 2. Setup environment file
cp .env.example .env
# Edit .env with your API credentials

# 3. Setup Git hooks
npm run prepare

# 4. Verify setup
just setup
```

### Common Commands

```bash
# Development
just dev              # Start dev server
just build            # Production build
just preview          # Preview build

# Code Quality
just check            # Run all checks
just fix              # Auto-fix issues
just test             # Run tests

# Git
just commit           # Interactive commit
just env-setup        # Setup environment
```

## GitHub Actions Workflows

### 1. CI/CD Pipeline (ci-cd.yml)

**Triggers:**

- Push to `main` or `version_*` branches
- Pull requests to protected branches
- Version tags (`v*`)

**Jobs:**

| Job       | Description             | Timeout |
| --------- | ----------------------- | ------- |
| lint      | ESLint + Prettier check | 10 min  |
| typecheck | TypeScript validation   | 10 min  |
| test      | Vitest with coverage    | 15 min  |
| build     | Production build        | 15 min  |
| security  | npm audit scan          | 10 min  |
| deploy    | Netlify deployment      | 15 min  |
| release   | GitHub release creation | 10 min  |

**Coverage Upload:**

- Requires `CODECOV_TOKEN` secret for coverage reports

### 2. Branch Protection (branch-protection.yml)

**Validations:**

| Check            | Purpose                 | Fail CI      |
| ---------------- | ----------------------- | ------------ |
| Commit messages  | Conventional commits    | Yes          |
| PR size          | Max 50 files, 500 lines | No (warning) |
| Secret detection | TruffleHog scan         | Yes          |
| .env files       | Prevent commits         | Yes          |
| PR description   | Min 20 characters       | Yes          |

### 3. PR Labeler (pr-labeler.yml)

Automatically labels PRs based on changed files:

| Label         | Files                           |
| ------------- | ------------------------------- |
| documentation | \*.md, docs/\*\*                |
| testing       | src/tests/\*_, _.test.jsx       |
| ci            | .github/\*\*, netlify.toml      |
| dependencies  | package.json, package-lock.json |
| components    | src/components/\*\*             |
| styles        | \*.css, src/styles/\*\*         |

### 4. Dependabot (dependabot.yml)

**Update Schedule:**

- Weekly on Mondays at 09:00 UTC
- Max 10 npm PRs, 5 GitHub Actions PRs
- Auto-merge on passing tests

## Pre-commit Hooks

### Husky Configuration

**Hooks:**

1. **pre-commit** (`npx lint-staged`)

   - Runs ESLint with auto-fix
   - Runs Prettier formatting
   - Only on staged files

2. **commit-msg** (`npx commitlint --edit $1`)

   - Validates commit message format
   - Enforces Conventional Commits

3. **pre-push** (`npm run build`)
   - Builds production bundle
   - Prevents pushing broken code

### Lint-staged Configuration

Files processed on commit:

```javascript
{
  "*.{js,jsx}": ["eslint --fix", "prettier --write"],
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{css,scss,less}": ["prettier --write"],
  "*.{json,md}": ["prettier --write"],
  "*.sh": ["prettier --write"]
}
```

### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

**Example:**

```bash
# Interactive commit
git cz

# Or manually
git commit -m "feat(components): add music player component"
```

## Branch Protection

### GitHub Settings Required

Configure in GitHub: `Settings > Branches > Branch protection rules`

**Recommended Rules for `main`:**

```
Require a pull request before merging
  Require approvals: 1
  Dismiss stale pull request approvals
  Require review from Code Owners

Require status checks to pass before merging
  Require branches to be up to date
  Status checks required:
    - Lint Code
    - Type Check
    - Run Tests
    - Build Application
    - Security Scan

Require conversation resolution before merging
Include administrators
```

### Protected Branches

| Branch      | Protection Level |
| ----------- | ---------------- |
| main        | Full protection  |
| version\_\* | Full protection  |

## Security Features

### 1. Secret Detection

**Prevention:**

- `.gitignore` excludes `.env` files
- Pre-commit scans with TruffleHog
- CI/CD secret detection

**Action if secrets leaked:**

1. Rotate compromised credentials immediately
2. Remove secret from git history:
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch .env" \
     --prune-empty --tag-name-filter cat -- --all
   git push origin --force --all
   ```

### 2. Dependency Security

**Automated:**

- `npm audit` on every PR
- Dependabot weekly updates
- Auto-merge for patch updates

**Manual:**

```bash
just audit          # Check vulnerabilities
just audit-fix      # Auto-fix issues
```

### 3. Environment Variables

**Required Secrets (GitHub):**

| Secret             | Description                     |
| ------------------ | ------------------------------- |
| VITE_API_KEY       | Deezer API key                  |
| VITE_API_URL       | API base URL                    |
| VITE_API_HOST      | API host                        |
| NETLIFY_AUTH_TOKEN | Netlify deploy token            |
| NETLIFY_SITE_ID    | Netlify site ID                 |
| CODECOV_TOKEN      | Codecov upload token (optional) |

**Setup:**

```bash
# GitHub Secrets: Settings > Secrets and variables > Actions
# Netlify: Settings > Build & deploy > Environment variables
```

## Deployment

### Netlify Deployment

**Automatic Deployment:**

- Triggered on push to `main`
- Build command: `npm run build`
- Publish directory: `dist/`

**Manual Deployment:**

```bash
just deploy
```

### Release Process

1. **Create version tag:**

   ```bash
   git tag -a v1.2.0 -m "Release version 1.2.0"
   git push origin v1.2.0
   ```

2. **Automated:**
   - CI/CD pipeline runs
   - Build artifacts created
   - GitHub release published with ZIP

## Troubleshooting

### Common Issues

#### 1. Pre-commit Hook Fails

```bash
# See detailed error
npx lint-staged --debug

# Skip hooks (not recommended)
git commit --no-verify -m "message"
```

#### 2. Commit Message Validation Fails

```bash
# Use interactive commit
git cz

# Or follow format
git commit -m "type(scope): description"
```

#### 3. CI/CD Pipeline Fails

**Check:**

- GitHub Actions logs
- Environment variables configured
- All status checks pass

**Re-run:**

```bash
# In GitHub Actions UI: Click "Re-run jobs"
```

#### 4. Build Fails Locally

```bash
# Clean rebuild
just rebuild

# Or manually
rm -rf node_modules dist
npm install
npm run build
```

#### 5. Tests Fail

```bash
# Run with verbose output
npm run test -- --run --reporter=verbose

# Run specific test
just test-file src/tests/your-test.js
```

### Debug Mode

```bash
# Enable GitHub Actions debug logging
# Add secret: ACTIONS_RUNNER_DEBUG: true

# Enable step debug
# Add secret: ACTIONS_STEP_DEBUG: true
```

### Contact & Support

- **Issues**: [GitHub Issues](https://github.com/KoatKoetl/Music-Website/issues)
- **Discussions**: [GitHub Discussions](https://github.com/KoatKoetl/Music-Website/discussions)
- **Security**: [SECURITY.md](SECURITY.md)

---

**Last Updated**: February 26, 2026
**Version**: 1.2.0
