#!/bin/sh

# Install Dependencies & Build Package
echo '🏁 Initiating Setup...'

echo 'Checking yarn installation...'
# Check if yarn is installed
if ! command -v yarn >/dev/null 2>&1; then
  echo '🚀 yarn not found! Installing globally...'
  # Install yarn globally using npm
  npm install -g yarn
  # Verify installation
  if command -v yarn >/dev/null 2>&1; then
    echo '✅ yarn installed successfully!'
  else
    echo '❌ Failed to install yarn. Check npm settings.'
    exit 1
  fi
else
  echo '✅ yarn is already installed!'
fi

echo 'Installing Dependencies & Building Packages 🛠️'

yarn install

sh ./scripts/pack.sh
sh ./scripts/link-v8.sh
sh ./scripts/link-v9.sh