# alpha-stacker
NSS assignment 1

Create a JavaScript file that writes the alphabet to the screen from an array containing letters.
Add logic that inserts a space in between every third character.

`.bashrc` follows:
```
# Some good standards, which are not used if the user
# creates his/her own .bashrc/.bash_profile

# --show-control-chars: help showing Korean or accented characters
alias ls='ls -F --color=auto --show-control-chars'
alias ll='ls -l'

alias gch='git checkout '
alias gpo='git pull origin '
alias gs='git status'
alias gfa='git fetch --all'
alias st='/c/Program\ Files/Sublime\ Text\ 3/sublime_text.exe'
alias lhs='lr-http-server'
alias work='cd /c/Users/marce/workspace/'
alias python='winpty python.exe'
alias pywork='cd /c/Users/marce/workspace/python/'

work

setmeup()  {
  param=$(echo "$1")
  cp -av ~marce/workspace/copyMeIntoNewProjects/. ./${param}
  cd "${param}"
  touch README.md
  touch index.html 
  touch .gitignore
  git init
  cd lib
  npm install
}

livecode() {
  param=$(echo "$1")
  mkdir ${param}
  cd ${param}
  touch index.html
  touch main.js
  st .
  hs
}

pycode() {
  param=$(echo "$1")
  mkdir ${param}
  cd ${param}
  touch index.html
  touch main.js
  touch main.py
  st .
  hs
}

p () {
if [ -z $1 ]
then
  python p.py noconsole 
else
  python p.py console
fi
}

case "$TERM" in
xterm*)
  # The following programs are known to require a Win32 Console
  # for interactive usage, therefore let's launch them through winpty
  # when run inside `mintty`.
  for name in node ipython php php5 psql python2.7
  do
    case "$(type -p "$name".exe 2>/dev/null)" in
    ''|/usr/bin/*) continue;;
    esac
    alias $name="winpty $name.exe"
  done
  ;;
esac
```															
