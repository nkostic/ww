#!/usr/bin/env fish

# Storyblok Helper Script for Fish Shell
# Usage: ./storyblok.fish pull|types|generate [space_id]

set SPACE_ID 286267789414235

# Override with argument if provided
if test (count $argv) -ge 2
    set SPACE_ID $argv[2]
end

switch $argv[1]
    case pull
        echo "🔄 Pulling Storyblok components for space $SPACE_ID..."
        npx storyblok components pull -p src/types/storyblok --sf --space=$SPACE_ID
    case types
        echo "🏗️  Generating TypeScript types for space $SPACE_ID..."
        npx storyblok types generate -p src/types/storyblok --type-prefix=Storyblok --sf --space=$SPACE_ID
    case generate
        echo "🚀 Pulling components and generating types for space $SPACE_ID..."
        npx storyblok components pull -p src/types/storyblok --sf --space=$SPACE_ID
        npx storyblok types generate -p src/types/storyblok --type-prefix=Storyblok --sf --space=$SPACE_ID
    case '*'
        echo "Usage: ./storyblok.fish {pull|types|generate} [space_id]"
        echo "Examples:"
        echo "  ./storyblok.fish pull                    # Uses default space ID"
        echo "  ./storyblok.fish types 123456789         # Uses custom space ID"
        echo "  ./storyblok.fish generate                # Pull + generate with default space"
end
