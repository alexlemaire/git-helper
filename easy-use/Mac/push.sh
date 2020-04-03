#!/bin/bash

header_print() {
  echo $1
  echo "Tip: you can cancel this operation by pressing CTRL + C"
}

EXEC="$(npm bin -g)/git-assist"

# Staging, commiting and pushing
header_print "Staging, commiting and pushing your changes..."
$EXEC push

printf "\nScript ran. You may now close this window if you're done working with it!"
