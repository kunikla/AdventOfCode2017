function match(char1, char2) {
  if (char1 !== char2) return 0;
  var result = parseInt(char1, 10);
  return (isNaN(result) ? 0 : result);
}

function captcha2(input) {
  var inputLength = input.length;
  if (inputLength < 2) return 0;
  var solution = 0;
  var curChar = "";
  var offsetChar = "";
  for (var i = 0, offset = inputLength/2; i < (inputLength); i++, offset++) {
    curChar = input.slice(i, i+1);
    offset %= inputLength;
    offsetChar = input.slice(offset, offset+1);
    solution += match(curChar, offsetChar);
    // console.log("i = " + i + ", curChar = " + curChar);
    // console.log("offset = " + offset + ", offsetChar = " + offsetChar);
    // console.log("solution = " + solution);
  }
  return solution;
}

document.getElementById('btn').addEventListener('click', function (event) {
  var aocString = document.getElementById("input-string").value;
  // console.log("aocString = " + aocString);
  document.getElementById("solution-value").innerHTML = captcha2(aocString);
  // console.log("Solution is " + document.getElementById("solution-value").innerHTML)
});
