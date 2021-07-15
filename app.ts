// Default parameters
let displayDefaultParms = (a: number = 0, b: number = 2) => a + b;

let defaultCall = (num1, num2) => {
    let num3 = (<HTMLInputElement>document.getElementById(num1)).value;
    let num4 = (<HTMLInputElement>document.getElementById(num2)).value;
    let output = document.getElementById('defaultOutput');
    let callOutput;
    if (num3 || num4) {
        callOutput = displayDefaultParms(Number(num3), Number(num4))
    } else {
        callOutput = displayDefaultParms();
    }
    output.innerHTML = String(callOutput);
}
console.log(displayDefaultParms(5, 10)) // with parameters 
console.log(displayDefaultParms()) // without parameters
