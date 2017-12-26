function match(char1, char2) {
  if (char1 != char2) return 0;
  var result = parseInt(char1, 10);
  return (isNaN(result) ? 0 : result);
}

function captcha2(input) {
  var inputLength = input.length;
  if (inputLength < 2) return 0;
  var offset = inputLength/2;
  var solution = 0;
  var curChar = "";
  var offsetChar = "";
  for (i = 0; i < (inputLength-1); i++) {
    curChar = input.slice(i, i+1);
    offsetChar = input.slice((i+offset) % inputLength, (i+offset+1) % inputLength);
    solution += match(curChar, offsetChar);
  }
  return solution;
}

document.getElementById('btn').addEventListener('click', function (event) {
  var aocString = document.getElementById("input-string").value;
  console.log("aocString = " + aocString);
  document.getElementById("solution-value").innerHTML = captcha2(aocString);
  console.log("Solution is " + document.getElementById("solution-value").innerHTML)
});
