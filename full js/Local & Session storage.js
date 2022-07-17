console.log("Local & Session storage");
/*
// add a value in local storage                        
localStorage.setItem("name", "Jatin")
localStorage.setItem("name2", "Jatin2")
*/

/*
window.localStorage
//Anser =  Storage{name: 'Jatin', name2: 'Jatin2', length: 2}
typeof window.localStorage
//Anser = 'object'
window.localStorage.name
//Anser = 'Jatin'
window.localStorage.name2
//Anser = 'Jatin2'
*/

/*
let name = localStorage.getItem("name");
console.log(name);
let name2 = localStorage.getItem("name2");
console.log(name2);
*/

/*
localStorage.clear(); // clears the entier local storeg 
localStorage.removeItem("name2"); // clears the spacific value in local storeg  
*/

/*
// how to add Arrays in LocalStorage
let impArray = ["adrask", "poyaz", "bhinfi"]

//localStorage.setItem("Sabzi", impArray);
// Anser = Stringify karega Array ko = adrask,poyaz,bhinfi;


localStorage.setItem("Sabzi", JSON.stringify(impArray));
// Anser = Stringify karega Array ko = ["adrask","poyaz","bhinfi"]


localStorage.getItem("name", "Jatin");  // in stroge name="Jatin"
let name = localStorage.getItem("name") //now we say give us the name that is in the storage
name = JSON.parse(localStorage.getItem("Sabzi")); // we say that parse use the array in the storage using name 
// {
// Anser = Array = (3) ['adrask', 'poyaz', 'bhinfi']
                       //0: "adrask"
                       //1: "poyaz"
                       //2: "bhinfi"
                       //length: 3
                       //[[Prototype]]: Array(0) 
  // }                     
console.log(name); // we log the name 
// how to add Objects in LocalStorage
*/

//Session Storage

console.log("Session & Local  storage");     

// add a value in local storage                        
sessionStorage.setItem("session=name", "Jatin")
sessionStorage.setItem("session=name2", "Jatin2")