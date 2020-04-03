#!/bin/bash

main() {
  back_if() {
    if [ "$(basename "$(pwd)")" == $1 ]
    then
      cd ../
    fi
  }
  back_if "Linux"
  back_if "easy-use"

  header_print() {
    echo $1
    echo "Tip: you can cancel this operation by pressing CTRL + C"
  }
  EXEC="$(npm bin -g 2> /dev/null)/git-assist"

  # clone repo
  header_print "Cloning a new repository..."
  $EXEC clone
  echo "Done!"
}

export -f main

x-terminal-emulator -e bash -c "main && read -p \"Press Return to exit\""
