#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# clear and re-create the out directory
rm -rf out || exit 0;
mkdir out;

# go to the out directory and clone a ​*new*​ Git repo
cd out
git clone ${GH_REF} out

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git fetch --all
#git checkout master
git merge --ff-only origin/development
git push --force "https://${GH_TOKEN}@${GH_REF}" master > /dev/null 2>&1