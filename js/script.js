function myFunction() {
                
    //creating two inputs for numbers
    var firstInput = document.getElementById("first").value;
    var secondInput = document.getElementById("second").value;
    
    var select = document.getElementById("select");
    //answer
    var answer = document.getElementById("answer");
    
    
    if (select.value == "sum") {
         answer.innerHTML = Number(firstInput) + Number(secondInput);
    } else if (select.value == "subtraction") {
         answer.innerHTML = Number(firstInput) - Number(secondInput);
    } else if (select.value == "multiplication") {
         answer.innerHTML = Number(firstInput) * Number(secondInput);
    } else if (select.value == "division") {
         answer.innerHTML = Number(firstInput) / Number(secondInput);
    } else {
        answer.innerHTML = "No Input";
    }
    ;
};