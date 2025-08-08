# Changesets Workflow

This project uses [Changesets](https://github.com/changesets/changesets) to manage versions and changelogs for shared packages in the monorepo.

## 🚀 Quick Start

### 1. Adding a Changeset

When you make changes to shared packages (`@repo/ui`, `@repo/storyblok-components`, etc.), create a changeset:

```bash
pnpm changeset
```

This will:

- Ask which packages were changed
- Ask for the type of change (major, minor, patch)
- Ask for a summary of the changes
- Create a changeset file

### 2. Versioning Packages

To bump versions and update changelogs:

```bash
pnpm changeset:version
```

This will:

- Update package versions based on changesets
- Update CHANGELOG.md files
- Remove consumed changeset files
- Update lockfile

### 3. Publishing (if needed)

For private packages, you typically don't publish, but if you need to:

```bash
pnpm changeset:publish
```

## 📋 Configuration

### Linked Packages

- `@repo/ui` and `@repo/storyblok-components` are linked (same version bumps)

### Ignored Packages

- `client` and `quizes` apps are ignored (not versioned)

### Update Strategy

- Internal dependencies use "patch" strategy

## 🔄 Workflow Examples

### Example 1: Adding a new component to @repo/ui

1. Make your changes to the UI package
2. Run `pnpm changeset`
3. Select `@repo/ui` as changed
4. Choose `minor` for new feature
5. Write summary: "Add new Button variant"
6. Commit both your code and the changeset file

### Example 2: Fixing a bug in @repo/storyblok-components

1. Fix the bug in the storyblok-components package
2. Run `pnpm changeset`
3. Select `@repo/storyblok-components` as changed
4. Choose `patch` for bug fix
5. Write summary: "Fix Hero component responsive layout"
6. Commit both your code and the changeset file

### Example 3: Breaking change across linked packages

1. Make breaking changes to both UI and Storyblok components
2. Run `pnpm changeset`
3. Select both packages as changed
4. Choose `major` for breaking change
5. Write summary: "BREAKING: Update component API structure"
6. Both packages will get the same major version bump

## 📁 File Structure

```
.changeset/
├── config.json          # Changesets configuration
├── README.md            # This file
└── *.md                 # Individual changeset files (auto-generated)
```

## 🛠 Commands Reference

| Command                  | Description                            |
| ------------------------ | -------------------------------------- |
| `pnpm changeset`         | Create a new changeset                 |
| `pnpm changeset:version` | Version packages and update changelogs |
| `pnpm changeset:publish` | Publish packages (if needed)           |
| `pnpm changeset:status`  | Check changeset status                 |
| `pnpm version-packages`  | Version packages and update lockfile   |

## 🎯 Best Practices

### When to Create Changesets

- ✅ Adding new features to shared packages
- ✅ Fixing bugs in shared packages
- ✅ Breaking changes in shared packages
- ✅ Performance improvements in shared packages
- ❌ Changes only to apps (`client`, `quizes`)
- ❌ Documentation-only changes
- ❌ Internal refactoring with no API changes

### Changeset Messages

- Use clear, descriptive messages
- Start with a verb (Add, Fix, Update, Remove)
- Mention the specific component/feature affected
- Follow conventional commit style when possible

**Good examples:**

- "Add Hero component theme variants"
- "Fix RichText component TypeScript types"
- "Update Grid component responsive breakpoints"
- "BREAKING: Remove deprecated Feature component props"

**Avoid:**

- "Update stuff"
- "Fix bug"
- "Changes"

### Version Types

- **Patch (0.0.X)**: Bug fixes, minor improvements
- **Minor (0.X.0)**: New features, backward compatible
- **Major (X.0.0)**: Breaking changes, API changes

## 🔗 Integration with CI/CD

You can automate version bumping in your CI/CD pipeline:

```yaml
# Example GitHub Action
- name: Create Release Pull Request
  uses: changesets/action@v1
  with:
    version: pnpm version-packages
    publish: pnpm changeset:publish
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 📖 Learn More

- [Changesets Documentation](https://github.com/changesets/changesets)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
