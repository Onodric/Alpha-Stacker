var alphabet = [ 'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z' ];
var displayString = '<p>';
var logString = '';

function stackLetters (theAlphabetArray) {
  for (var i = 0; i < theAlphabetArray.length; i += 1) {
    logString += theAlphabetArray[i];
    displayString += theAlphabetArray[i];
    if ( (i + 1) % 3 === 0) {
      displayString += " ";
      logString += " ";
    }
    console.log(logString);
    document.write(displayString + "</p>");
  }
  // displayString += "</p>";
  return displayString;
}

// document.write(stackLetters(alphabet));
stackLetters(alphabet);