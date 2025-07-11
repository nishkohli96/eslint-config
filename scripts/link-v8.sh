# This script links @nish1896/eslint-config to
# all the workspaces in the examples/eslint-v8 folder.

echo "🏁 Initiating Linking of eslint-config!"

yarn unlink @nish1896/eslint-config

# Link the package
echo "Linking Package... 🔗"
cd packages/eslint-config
yarn link

echo "🏁 Initiating Linking of eslint-config!"

echo "js-v8 🔗"
cd ../../examples/eslint-v8/js-v8
yarn link @nish1896/eslint-config

echo "next-v14 🔗"
cd ../next-v14
yarn link @nish1896/eslint-config


echo "react-v18 🔗"
cd ../react-v18
yarn link @nish1896/eslint-config

echo " ✅ Linking Done! 🎉🎉🎉"