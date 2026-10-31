# This script will generate the tgz file for the eslint-flat-config
# package in its directory.

echo '🏁 Initiating Packing...'
echo 'Creating a tarball of the package...'

cd ./packages/eslint-flat-config
npx rimraf *.tgz
npm pack
echo "Packed 📦: @nish1896/eslint-flat-config successfully! 🥳🥳🥳"
