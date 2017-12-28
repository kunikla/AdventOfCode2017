function match(char1, char2) {
  if (char1 !== char2) return 0;
  var result = parseInt(char1, 10);
  return (isNaN(result) ? 0 : result);
}

function captchaD01P1(input) {
  var inputLength = input.length;
  if (inputLength < 2) return 0;
  var solution = 0;
  var firstChar = input.slice(0, 1);
  var curChar = "";
  var nxtChar = firstChar;
  for (i = 0 ; i < (inputLength-1); i++) {
    curChar = nxtChar;
    nxtChar = input.slice(i+1, i+2);
    solution += match(curChar, nxtChar);
  }
  solution += match(nxtChar, firstChar);
  return solution;
}

document.getElementById("solution-btn").addEventListener("click", function (event) {
  var aocString = document.getElementById("input-string").value;
  // console.log("aocString = " + aocString);
  document.getElementById("solution-value").value = captchaD01P1(aocString);
  // console.log("Solution is " + document.getElementById("solution-value").innerHTML)
});

console.log(document.getElementById("solution-btn"));
