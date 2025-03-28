# This script links @nish1896/eslint-flat-config to
# all the workspaces in the examples/eslint-9 folder.

echo "🏁 Initiating Linking of eslint-flat-config!"

yarn unlink @nish1896/eslint-config

# Link the package
echo "Linking Package... 🔗"
cd packages/eslint-flat-config
yarn link

echo "🏁 Initiating Linking of eslint-flat-config!"

echo "js-v9 🔗"
cd ../../examples/eslint-9/js-v9
yarn link @nish1896/eslint-flat-config

echo "next-v15-js 🔗"
cd ../next-v15-js
yarn link @nish1896/eslint-flat-config

echo "next-v15-ts 🔗"
cd ../next-v15-ts
yarn link @nish1896/eslint-flat-config

echo "react-v19 🔗"
cd ../react-v19
yarn link @nish1896/eslint-flat-config

echo "vite 🔗"
cd ../vite
yarn link @nish1896/eslint-flat-config

echo " ✅ Linking Done! 🎉🎉🎉"