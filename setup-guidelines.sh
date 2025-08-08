#!/bin/bash

# WW React Guidelines Setup Script
# This script ensures all development tools are properly configured

echo "🚀 Setting up WW React development environment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Run formatting on all files
echo "🎨 Formatting codebase..."
pnpm format

# Run linting to check configuration
echo "🔍 Running lint checks..."
pnpm lint

# Check TypeScript compilation
echo "🔧 Checking TypeScript..."
pnpm check-types

# Create .vscode/settings.json for consistent editor configuration
echo "⚙️ Setting up VS Code configuration..."
mkdir -p .vscode
cat > .vscode/settings.json << 'EOF'
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.suggest.autoImports": true,
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "files.associations": {
    "*.css": "css",
    "*.scss": "scss"
  },
  "css.validate": true,
  "scss.validate": true,
  "editor.rulers": [100],
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "files.eol": "\n",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true
}
EOF

# Create recommended VS Code extensions
cat > .vscode/extensions.json << 'EOF'
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "editorconfig.editorconfig",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "steoates.autoimport-es6-ts"
  ]
}
EOF

echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Install recommended VS Code extensions when prompted"
echo "2. Review REACT_GUIDELINES.md for coding standards"
echo "3. Review DEVELOPMENT.md for tool configuration"
echo "4. Start development with: pnpm dev"
echo ""
echo "🎯 Remember the key principles:"
echo "- WET over DRY for flexibility"
echo "- Function declarations over arrow functions"
echo "- No 'any' types"
echo "- Helper functions below JSX return"
echo "- Avoid useEffect when possible"
