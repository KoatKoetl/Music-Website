# Commit Message Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages. This convention ensures clear, consistent, and automated changelog generation.

## Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

## Types

| Type       | Description                                                        | Emoji |
| ---------- | ------------------------------------------------------------------ | ----- |
| `feat`     | A new feature                                                      | ✨    |
| `fix`      | A bug fix                                                          | 🐛    |
| `docs`     | Documentation only changes                                         | 📝    |
| `style`    | Changes that don't affect code meaning (formatting, spacing, etc.) | 💄    |
| `refactor` | Code change that neither fixes a bug nor adds a feature            | ♻️    |
| `perf`     | Code change that improves performance                              | ⚡️   |
| `test`     | Adding missing tests or correcting existing tests                  | ✅    |
| `build`    | Changes that affect the build system or external dependencies      | 📦    |
| `ci`       | Changes to CI configuration files and scripts                      | 👷    |
| `chore`    | Other changes that don't modify src or test files                  | 🔧    |
| `revert`   | Reverts a previous commit                                          | ⏪    |

## Scope

The scope should be the name of the component, feature, or area affected (optional):

- `components` - UI components
- `context` - React context/providers
- `utils` - Utility functions
- `styles` - CSS/styling changes
- `tests` - Test files
- `config` - Configuration files
- `deps` - Dependencies
- `api` - API-related changes

## Description Rules

1. Use the imperative, present tense: "change" not "changed" nor "changes"
2. Don't capitalize the first letter
3. No period (.) at the end
4. Maximum 72 characters

## Examples

### Feature

```
feat(components): add new music player component

- Create MusicPlayer component with play/pause functionality
- Add progress bar and volume control
- Integrate with existing audio context
```

### Bug Fix

```
fix(api): resolve issue with Deezer API rate limiting

Added retry logic with exponential backoff for API calls.

Closes #123
```

### Breaking Change

```
feat(context)!: refactor audio context API

BREAKING CHANGE: AudioContext now requires explicit initialization.
Call `initializeAudio()` before using any audio methods.
```

### Documentation

```
docs: update API setup instructions in README
```

### Style

```
style: format components with prettier
```

### Refactor

```
refactor(utils): simplify API call helper functions
```

### Performance

```
perf(components): lazy load images for better initial page load
```

### Test

```
test: add unit tests for Header component
```

### Build/Dependencies

```
build(deps): update react to v18.2.0
```

### CI/CD

```
ci: add automated testing workflow
```

### Chore

```
chore: clean up unused imports
```

### Revert

```
revert: feat(components): add music player

This reverts commit abc123def456.

Reason: Performance issues on mobile devices.
```

## Automated Checks

The CI pipeline will validate commit messages. Commits that don't follow this convention will be rejected.

## Tools

### Commitizen

For interactive commit message creation:

```bash
npm install -g commitizen
commitizen init cz-conventional-changelog --save-dev --save-exact
```

Then use:

```bash
git cz
```

### Commitlint

Automated commit message validation (already configured in this project).

## Why This Matters

- **Automated Changelogs**: Generate changelogs automatically from commit history
- **Clear History**: Easy to understand what changes were made
- **Semantic Versioning**: Automatically determine version bumps (major/minor/patch)
- **Better Code Reviews**: Clear commit messages make reviews easier
- **Accountability**: Clear scope and description help track changes
