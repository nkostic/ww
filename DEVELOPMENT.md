# Development Tools Guide

This document provides an overview of the development tools configured in the WW monorepo.

## � Development Guidelines

For comprehensive React development standards, see [REACT_GUIDELINES.md](./REACT_GUIDELINES.md).

### Quick Reference

- **Philosophy**: WET (Write Everything Twice) over DRY for flexibility
- **Folder Structure**: Prefer folders over individual modules, keep components localized
- **Code Style**: Function declarations, no `any`, prefer `type` over `interface`
- **Git Workflow**: `{username}/{ticket}-{name}` branch naming, squash PRs

## �📝 EditorConfig

### What it does

EditorConfig helps maintain consistent coding styles between different editors and IDE environments.

### Configuration

The `.editorconfig` file at the root defines:

- **Charset**: UTF-8 for all files
- **Line endings**: LF (Unix-style)
- **Indentation**: 2 spaces for most files
- **Trailing whitespace**: Automatically trimmed
- **Final newlines**: Always inserted
- **Max line length**: 100 characters (except Markdown)

### File-specific rules

- **TypeScript/JavaScript**: 2-space indentation, double quotes
- **JSON/YAML**: 2-space indentation
- **Markdown**: No trailing whitespace trimming, no line length limit
- **Docker**: 2-space indentation
- **Shell scripts**: 2-space indentation, LF line endings
- **Makefiles**: Tab indentation (4 spaces)

### Editor support

Most modern editors support EditorConfig automatically:

- **VS Code**: Built-in support
- **WebStorm/IntelliJ**: Built-in support
- **Vim**: Plugin available
- **Sublime Text**: Plugin available

## 🔄 Changesets

### What it does

Changesets manages versioning and changelogs for shared packages in the monorepo.

### Key features

- **Semantic versioning**: Automatically handles major/minor/patch versions
- **Independent versioning**: Each package versions independently based on changes
- **Automatic changelogs**: Generates CHANGELOG.md files
- **Monorepo-aware**: Only versions shared packages, ignores apps

### Workflow overview

1. **Make changes** to shared packages
2. **Create changeset**: `pnpm changeset`
3. **Select packages** that were changed
4. **Choose version type** (patch/minor/major)
5. **Write description** of changes
6. **Version packages**: `pnpm changeset:version`
7. **Commit and push** changes

### Configuration highlights

```json
{
  "linked": [],
  "ignore": ["client", "quizes"],
  "updateInternalDependencies": "patch"
}
```

### Commands reference

| Command                  | Purpose                            |
| ------------------------ | ---------------------------------- |
| `pnpm changeset`         | Create a new changeset             |
| `pnpm changeset:version` | Apply changesets and bump versions |
| `pnpm changeset:status`  | View pending changesets            |
| `pnpm version-packages`  | Version + update lockfile          |

## 🔗 Integration

### CI/CD Pipeline

You can integrate both tools into your CI/CD:

```yaml
# GitHub Actions example
steps:
  - name: Check EditorConfig compliance
    run: editorconfig-checker

  - name: Create Release PR
    uses: changesets/action@v1
    with:
      version: pnpm version-packages
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Pre-commit hooks

Pre-commit hooks are already configured in this project using Husky and lint-staged:

**Current Implementation:**

- **Husky** manages git hooks automatically
- **Lint-staged** runs formatting and linting only on staged files
- **Automatic setup** via `prepare` script in package.json

**What happens on commit:**

```bash
# Automatically runs on git commit
lint-staged:
  *.{ts,tsx,js,jsx} → prettier --write → eslint --fix
  *.{md,json,css,scss} → prettier --write
```

**Configuration files:**

- `.husky/pre-commit` - Git hook configuration
- `package.json` - lint-staged rules and prepare script

This ensures code quality and consistency without requiring manual intervention.

## 📚 Best practices

### React Development

See [REACT_GUIDELINES.md](./REACT_GUIDELINES.md) for comprehensive React standards including:

- **Component Structure**: Folder organization and file naming conventions
- **Code Style**: TypeScript preferences, import order, syntax standards
- **React Patterns**: State management, avoiding `useEffect`, function declarations
- **Git Workflow**: Branch naming, commit messages, PR process
- **Storyblok Integration**: Schema management and migration strategies

### EditorConfig

- ✅ Ensure your editor supports EditorConfig
- ✅ Commit the `.editorconfig` file to version control
- ✅ Keep file-specific rules minimal and consistent
- ❌ Don't override with editor-specific formatting

### Changesets

- ✅ Create changesets for all shared package changes
- ✅ Write clear, descriptive changeset messages
- ✅ Use conventional commit style in descriptions
- ✅ Choose appropriate version types (patch/minor/major)
- ❌ Don't create changesets for app-only changes
- ❌ Don't skip changesets for breaking changes

### Code Quality

- ✅ Follow React guidelines for consistent code style
- ✅ Use TypeScript strictly (no `any` types)
- ✅ Prefer function declarations over arrow functions for components
- ✅ Keep components focused and single-purpose
- ❌ Don't overuse `useMemo` and `useCallback`
- ❌ Don't use `useEffect` when a handler would suffice

## 📖 Learn more

- [EditorConfig Documentation](https://editorconfig.org/)
- [Changesets Documentation](https://github.com/changesets/changesets)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://conventionalcommits.org/)
