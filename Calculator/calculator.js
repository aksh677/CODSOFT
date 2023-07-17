let isParenthesisOpen = false;
function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  function calculateResult() {
    let result = document.getElementById("result").value;
    let calculatedResult = eval(result);
    document.getElementById("result").value = calculatedResult;
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }

  function calculateResult() {
    let result = document.getElementById("result").value;
    result = result.replace(/%/g, '/10');
    let calculatedResult = eval(result);
    document.getElementById("result").value = calculatedResult;
  }

  function toggleSign() {
    let result = document.getElementById("result").value;
    if (result.charAt(0) === '-') {
      result = result.slice(1);
    } else {
      result = '-' + result;
    }
    document.getElementById("result").value = result;
  }

  function toggleParenthesis() {
    if (isParenthesisOpen) {
      appendToResult(")");
      isParenthesisOpen = false;
    } else {
      appendToResult("(");
      isParenthesisOpen = true;
    }
  }