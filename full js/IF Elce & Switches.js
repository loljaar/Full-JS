console.log('This is tutorial 8');
const age = 128;
const doesDrive = false;
// const vari = 34;

// if (age!=19){
//     console.log('Age is not 19')
// }

// if(age !== 65){
//     console.log('Age is not 65')
// }

// else{
//     console.log('Age is not 19')
// }

// if (typeof vari !== 'undefined'){
//     console.log('Vari is defined');
// }

// else{
//     console.log('Vari is not defined');
// }

// if (doesDrive || age>18){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

// console.log(age==45? 'Age is 45': 'Age is not 45');

switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}         


//------------===================


const ager = 19;
if (typeof ager !== 'undefined') {
    console.log('ager is defined');
} else {
    console.log('ager is not defined');
}


const driver = true;
if (driver || ager>=19) {
     console.log('you can be drivcer');    
} else {
    console.log('you can not be a drivcer');    
}


one = true ;
two = 20;
three =  'poilet';


if (one && two>18 && three) {
    console.log(' nice you are true and you are a poilet and your age is higher then 18 nice ');
} 
else if( one || two==19 || three  ) {
   console.log( ' nice ');

}
else {
    console.log('you cant  join fuq off');
}


 //ternari oprater

four = 30;
four = 19;
// console.log(four>20? 'if': 'else');
console.log(four>20? 'four is greater then 20 ': ' four is not greater then 20');



// swichCase
// you ccan write as many case as you wont 
five = (15, 20);
switch (five) {
    case five>16:
        console.log('you are greater then 15');
        break;

     
    case five=15:
         console.log('you are == to  15');
         break;

    case five=20:
        console.log('you are == to 20');
         // break ko  nahi lagay kuy ki muje isske baad vala bhi chaiye tha 
        
    case five=15:
        console.log('you are == to  15');
        break;    
    default:
        console.log('you are not greater then 15');
        break;
}