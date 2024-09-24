#!/bin/sh

echo 👋

exit_if_command_failed () {
  if [ $? != 0 ]; then
    echo "💥💥💥"
    echo "BANG!"
    exit $?
  else
    echo "Done!"
    echo ""
  fi
}

# ls -a
echo 'Setting up `git` pre-commit hook...'
cp ./scripts/git/pre-commit ./.git/hooks/pre-commit
exit_if_command_failed

echo 'Getting Node version'
NODE_V=`node -v`
exit_if_command_failed

echo 'Getting .nvmrc version'
NODE_RC=`cat ./.nvmrc`
exit_if_command_failed

if [ $NODE_V != $NODE_RC ]
then
  echo "💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥"
  echo "Wrong version of Node.js found!"
  echo "  $NODE_V - Version found"
  echo "  $NODE_RC - Is needed"
  echo "Please set(up) your node version to '$NODE_RC', you can try"
  echo '	nvm use'
  echo '	nvm install && nvm use'
  echo 'Or anything else you can think of 😁'
  exit 42
fi

echo 'installing npm modules...'
npm i
exit_if_command_failed

echo 'running the test with `npm t`. As the code is perfect, this will not fail 😜'
npm t

if [ $? != 0 ]; then
  echo "Well that is embarrassing! Sorry, something wrent wrong 🫣"
  echo "Its time for you to see if you can figure it out."
  echo "This script can be found in `./scripts/setup.sh`"
  exit $?
else
  echo ""
  echo "Happy Hacking 👋"
  echo "... and please dont bypass the pre-commit hooks 🙌"
fi
