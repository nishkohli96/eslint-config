# This script will generate the tgz file for the each eslint
# package in the packages directory.

echo '🏁 Initiating Packing...'

cd ./packages/eslint-config
rimraf *.tgz
npm pack
echo "Packed 📦: @nish1896/eslint-config successfully! 🥳🥳🥳"

cd ../eslint-flat-config
rimraf *.tgz
npm pack
echo "Packed 📦: @nish1896/eslint-flat-config successfully! 🥳🥳🥳"

cd ../../examples/vite-eslint-v9
pnpm link @nish1896/eslint-flat-config