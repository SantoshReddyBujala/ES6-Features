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
// Template Literal
var tempLit = document.getElementById('tempLit');
tempLit.innerHTML = "Testing Santosh";
var tempLiterals = function () {
    var temp = 10, add1 = 28, add2 = 30;
    document.getElementById('withNum').innerHTML = "Template with Number " + temp;
    document.getElementById('arthOpera').innerHTML = "Arithmetic Operation: " + (add1 + add2);
};
tempLiterals();
//let and const differences
var constLetDiff = function () {
    document.getElementById('letconst').innerHTML = "<div>Dynamic html rendering with template literals </div>";
    document.getElementById('letVar').innerHTML = "<div>Let Example: it's a block scope</div>";
    if (true) {
        var one1 = 123;
        document.getElementById('output').innerHTML = "<div>Let Scope: " + one1 + "</div>";
    }
    // console.log(one1) We can not access one1 out of the block
    document.getElementById('constVar').innerHTML = "<div>Const Example: it's a block scope and we can't change once assigned value</div>";
    if (true) {
        var canAssign = 'Testing Const';
        document.getElementById('constoutput').innerHTML = "<div>Const Output: " + canAssign + "</div>";
        //canAssign = 'Re Assign' not possible
    }
    // console.log(canAssign) //We can not access one1 out of the block
};
constLetDiff();
