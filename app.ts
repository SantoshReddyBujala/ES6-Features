// Default parameters
let displayDefaultParms = (a: number = 0, b: number = 2) => a + b;

let defaultCall = (num1, num2) => {
    let num3 = (<HTMLInputElement>document.getElementById(num1)).value;
    let num4 = (<HTMLInputElement>document.getElementById(num2)).value;
    let output = document.getElementById('defaultOutput');
    let callOutput;
    if(num3 && num4){
        callOutput = displayDefaultParms(Number(num3), Number(num4))
    } else if (num3) {
        callOutput = displayDefaultParms(Number(num3))
    } else {
        callOutput = displayDefaultParms();
    }
    output.innerHTML = String(callOutput);
}


// Template Literal
var tempLit = document.getElementById('tempLit');
tempLit.innerHTML = `Testing Santosh`;
let tempLiterals = ():void => {
let temp:number =10, add1:number =28, add2:number =30;
document.getElementById('withNum').innerHTML = `Template with Number ${temp}`;
document.getElementById('arthOpera').innerHTML = `Arithmetic Operation: ${add1 + add2}`;
}

tempLiterals();

//let and const differences

let constLetDiff =():void=> {
    document.getElementById('letconst').innerHTML = `<div>Dynamic html rendering with template literals </div>`;
    document.getElementById('letVar').innerHTML = `<div>Let Example: it's a block scope</div>`;
    if(true) {
        let one1 = 123;
        document.getElementById('output').innerHTML = `<div>Let Scope: ${one1}</div>`;
    }
   // console.log(one1) We can not access one1 out of the block

   document.getElementById('constVar').innerHTML = `<div>Const Example: it's a block scope and we can't change once assigned value</div>`
   if(true){
       const canAssign = 'Testing Const';
       document.getElementById('constoutput').innerHTML = `<div>Const Output: ${canAssign}</div>`;
       //canAssign = 'Re Assign' not possible
   }
   // console.log(canAssign) //We can not access one1 out of the block
}

constLetDiff();

//Arrow functions 

// Default/ No parameters function

let displayArrow = ():string => `Default/ No parameters function`;

document.getElementById('defaultAw').innerHTML= displayArrow();

// Single parameters Arrow function

let singleArrow = param => param;

document.getElementById('singleAw').innerHTML= singleArrow(`Single Parameter: $${25.5}`);

// Multiple parameters Arrow function

let multiArrow = (param1:number, param2:number):number => param1+param2;

document.getElementById('multiAw').innerHTML= String(`Output ${multiArrow(10,29)}`); // innerHTML assign String only and calling method using Template literals
