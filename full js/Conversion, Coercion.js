// Type conversion 
console.log('Welcome to tut5');
let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr));

let i = 75;
// console.log(i.toString())

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

let number = parseFloat('34.098');


console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);



// =====

let bul= Number(true);
console.log(bul);

let bew = new Date();

console.log(bew);

let hoho = String(new Date());
console.log(hoho);

document.write( new Date());


let hg = [1,1,1,1,1,1];
console.log(hg.length);



let jojo = parseInt('524542.242342.6536.4147.e');
console.log(jojo.toFixed(49), (typeof jojo));


let jojo2 = Number('524542.24');
console.log(jojo2, (typeof jojo));



let jatin = parseInt('5353.6284');
console.log(jatin.toExponential(1), (typeof jatin));



