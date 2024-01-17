#!/bin/bash

# run this script from the project root using `./scripts/build_docs.sh`

usage() {
  echo "Usage: $0 [-b] [-o]"
  echo ""
  echo "Build DevToolKit documentation. Must be executed from root of the repository."
  echo ""
  echo "  -b   Build static version of documentation (otherwise start server)."
  echo "  -o   Only Docusaurus (skip Sphinx, tutorials). Useful when just make change to Docusaurus settings."
  echo ""
  exit 1
}

echo "-----------------------------------"
echo "Checking environment "
echo "-----------------------------------"

os=$(uname -s)
echo "Operating System: $os"

check_command() {
    command=$1
    if ! command -v "$command" >/dev/null 2>&1; then
        echo "Error: $command is not installed."
        exit 1
    fi
}

check_command node
check_command yarn

echo "node version: $(node --version)"
echo "yarn version: $(yarn --version)"

echo "-----------------------------------"
echo "Getting Docusaurus deps" 
echo "-----------------------------------"
yarn

echo "-----------------------------------"
echo "Building static site"
echo "-----------------------------------"
yarn build || npm run build