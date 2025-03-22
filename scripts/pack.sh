# This script will generate the tgz file for the each eslint
# package in their respective directory.

echo '🏁 Initiating Packing...'
echo 'Creating a tarball of the packages...'

cd ./packages/eslint-config
npx rimraf *.tgz
npm pack
echo "Packed 📦: @nish1896/eslint-config successfully! 🥳🥳🥳"

cd ../eslint-flat-config
npx rimraf *.tgz
npm pack
echo "Packed 📦: @nish1896/eslint-flat-config successfully! 🥳🥳🥳"
