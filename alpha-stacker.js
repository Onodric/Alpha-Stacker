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

function stackLetters (theAlphabetArray) {
  for (var i = 0; i < theAlphabetArray.length; i += 1) {
    console.log(theAlphabetArray[i]);
    displayString += theAlphabetArray[i];
    if ( (i + 1) % 3 === 0) {
      displayString += " ";
    }
    document.write(displayString + "</p>");
  }
  displayString += "</p>";
  return displayString;
}

document.write(stackLetters(alphabet));
