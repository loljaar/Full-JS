console.log("We are at tutorial 9");
// console.log(1)
// console.log(2)
// console.log(3)

// General Loops: for, while, do-while
// let a =34;
// a +=1;
// a++;
// console.log(a);
// for(let i=0; i<100;i++){
//     console.log(i);
// }

// let j = 110;
// while (j < 10) {
//   console.log(j + 1);
//   j += 1;
// }

// let k = 0;
// do {
//     if(k===5){
//         k +=1;
//         continue;
//     }
//   console.log(k + 1);
//   k +=1;
// } while (k < 10);

let arr = [2,5,6,4,2,3];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

arr.forEach(function(element, index, array){
    console.log(element, index, array);
});

// let obj = {
//     name: "Rohan Das",
//     age: 78,
//     type: "Dangerous Programmer",
//     os: "Ubuntu"
// }
// for(let key in obj){
//     console.log(`The ${key} of object is ${obj[key]}`)
// }

console.log('done');     



//====================
// for (let index = 0; index <= 100 ; index++) {
//       console.log(index);
    
// }



// let Jatin=1;
// while (Jatin < 100) {
//     console.log(Jatin);
//     Jatin++;
// }

//  let L= 1
//  do {
    
//     console.log(L + ' lolJaar');
//      L +=1;
//      if (L===30) {
//           break;
//      }
//  } while (L<= 100);

// let g = 0
// do {
//     if (g===5) {
//          g++;
//          continue;
//     }
//     console.log(g+ 1);

//     g++
// } while (g<10);

let ary = [2,4,6,7,8,9];
ary.forEach(jatin => {
    console.log(jatin);
});

let  ob = {name:'jatin', age:44, typ:'dgpo', os:'ifome'}
for (let  key in ob) {
    console.log(`${key} of the objects is ${ob[key]}`);
}

let hum =[2,4,,6,78];
// hum.forEach(function(index) {
//     console.log(index);
// });

//and 

// hum.forEach(function(array) {
//     console.log(array);
// });

//and

// hum.forEach(function(element)  {
//     console.log(element);
// });

// and 

 hum.forEach(function(element, array, index) {
     console.log(element, array, index);
 });