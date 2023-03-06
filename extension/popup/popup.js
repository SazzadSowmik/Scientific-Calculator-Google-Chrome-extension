function calculate() {
    // Get input values from HTML elements
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    
    // Perform calculation based on selected operator
    var operator = document.getElementById("operator").value;
    var result;
    switch (operator) {
      case "+":
        result = input1 + input2;
        break;
      case "-":
        result = input1 - input2;
        break;
      case "*":
        result = input1 * input2;
        break;
      case "/":
        result = input1 / input2;
        break;
      default:
        result = "Invalid operator";
    }
    
    // Update HTML output element with result
    document.getElementById("output").innerHTML = result;
  }