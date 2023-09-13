// calculator.js
function addToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
  }
  
  function calculateSquareRoot() {
    var result = Math.sqrt(eval(document.getElementById('result').value));
    document.getElementById('result').value = result;
  }
  
  function calculateSquare() {
    var result = Math.pow(eval(document.getElementById('result').value, 2));
    document.getElementById('result').value = result;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }