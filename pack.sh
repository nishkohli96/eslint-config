# This script will generate the tgz file for the each eslint
# package in the packages directory.

echo '🏁 Initiating Packing...'

cd ./packages/eslint-config
npm pack
npm link
echo "Packed 📦: @nish1896/eslint-config successfully! 🥳🥳🥳"

cd ../eslint-flat-config
npm pack
npm link
echo "Packed 📦: @nish1896/eslint-flat-config successfully! 🥳🥳🥳"
