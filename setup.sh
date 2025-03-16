#!/bin/sh

# Install Dependencies & Build Package
echo "🏁 Initiating Setup..."

echo "Checking pnpm installation..."
# Check if pnpm is installed
if ! command -v pnpm >/dev/null 2>&1; then
  echo "🚀 pnpm not found! Installing globally..."
  # Install pnpm globally using npm
  npm install -g pnpm
  # Verify installation
  if command -v pnpm >/dev/null 2>&1; then
    echo "✅ pnpm installed successfully!"
  else
    echo "❌ Failed to install pnpm. Check npm settings."
    exit 1
  fi
else
  echo "✅ pnpm is already installed!"
fi

echo "Installing Dependencies & Building Packages 🛠️"

pnpm install

echo "Creating a tarball of the packages..."
sh pack.sh