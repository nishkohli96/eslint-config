# This script will generate the tgz file for the each eslint
# package in the packages directory.

echo '🏁 Initiating Packing...'

# cd ./packages/eslint-config
# npx rimraf *.tgz
# npm pack
# echo "Packed 📦: @nish1896/eslint-config successfully! 🥳🥳🥳"

# cd ../eslint-flat-config
cd ./packages/eslint-flat-config
npx rimraf *.tgz
npm pack
echo "Packed 📦: @nish1896/eslint-flat-config successfully! 🥳🥳🥳"

cd ../../examples/next-v9-js
pnpm add -D ../../packages/eslint-flat-config/*.tgz