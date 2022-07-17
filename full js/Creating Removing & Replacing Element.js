console.log("Creating Removing & Replacing Element");
/*
let element = document.createElement("li");
let  ul = document.querySelector("ul")
// add a class name 
element.className=("childul");
element.id=("createdli");
element.setAttribute("title", "MyTitile")
element.classList.add("Jatin"); // classList me app extra classes add karskte ho better user classList
element.className=("Lol") // class name sirf aek ho skta hey vo osme koi aur extra class ad nahi karega

 // element.innerHTML=("<b>Hello Jatin</b>") 

 //or

 let text = document.createTextNode(" I am A Text Node");

 element.appendChild(text);

//console.log(element);

ul.appendChild(element);
console.log(ul);


let elem2 = document.createElement("h3")
elem2.id=("elem2") ; 
elem2.classList.add("elem2");
let node = document.createTextNode(" Hey I am Elem2 Nice To Meet You  ")
elem2.appendChild(node);

element.replaceWith(elem2);

let myul = document.getElementById("myul");
//myul.replaceChild(element, document.getElementById("fui"));
 myul.removeChild(document.getElementById("fui"))
 
 //let pr = elem2.getAttribute("class");
 let pr = elem2.hasAttribute("class"); // gives boolean result
elem2.removeAttribute("id")
pr.setAttribute("title", "JAtin")
 console.log(elem2, pr);

*/

 // quick quiz
// create a heading element with text as "Go to CodeWithHarry"
// and create an a tag outside it with href = "https://www.codewithharry.com"


let creat = document.createElement("a");
creat.innerHTML=("<b> Go to CodeWithHarry </b>");
creat.setAttribute("href", "https://www.codewithharry.com");
creat.classList.add("Go");
creat.id=("Harry");
creat.style.border= "2px solid red";
creat.style.display= "block";

let head = document.getElementById("heading");
head.appendChild(creat);

console.log(creat);