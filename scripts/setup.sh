#!/bin/sh

# Stop on the first failure so a failed install never reports success
set -e

# Install Dependencies & Build Package
echo '🏁 Initiating Setup...'

echo 'Checking pnpm installation...'
# Check if pnpm is installed
if ! command -v pnpm >/dev/null 2>&1; then
  echo '🚀 pnpm not found! Enabling via corepack...'
  corepack enable pnpm
  if command -v pnpm >/dev/null 2>&1; then
    echo '✅ pnpm installed successfully!'
  else
    echo '❌ Failed to enable pnpm. Install it from https://pnpm.io/installation'
    exit 1
  fi
else
  echo '✅ pnpm is already installed!'
fi

echo 'Installing Dependencies & Building Packages 🛠️'

pnpm install

sh ./scripts/pack.sh

echo "Setup complete! 🎉"
