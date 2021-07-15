// Default parameters
var displayDefaultParms = function (a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 2; }
    return a + b;
};
var defaultCall = function (num1, num2) {
    var num3 = document.getElementById(num1).value;
    var num4 = document.getElementById(num2).value;
    var output = document.getElementById('defaultOutput');
    var callOutput;
    if (num3 && num4) {
        callOutput = displayDefaultParms(Number(num3), Number(num4));
    }
    else if (num3) {
        callOutput = displayDefaultParms(Number(num3));
    }
    else {
        callOutput = displayDefaultParms();
    }
    output.innerHTML = String(callOutput);
};
console.log(displayDefaultParms(5, 10)); // with parameters 
console.log(displayDefaultParms()); // without parameters
