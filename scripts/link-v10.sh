#!/bin/sh

echo "🏁 Initiating Linking of eslint-flat-config!"

yarn unlink @nish1896/eslint-flat-config

echo "Linking Package... 🔗"
cd packages/eslint-flat-config
yarn link

echo "next-v16 🔗"
cd ../../examples/eslint-v10/next-v16
yarn link @nish1896/eslint-flat-config

echo "✅ Linking Done! 🎉"
