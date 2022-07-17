console.log("Children Perent & Treversing The Dom");
let cont = document.querySelector(".no")
cont= document.querySelector(".container");
/*
//console.log(cont.childNodes);  .childNodes also shows (text, comments )
//console.log(cont.children);     //.children does not  shows (text, comments)
let nodeName = cont.childNodes[1].nodeName.
console.log(nodeName); 
*/
let nodetYPE = cont.childNodes[0].nodeType;
 /*
 Node types
 1. Element
 2. Attribute
 3. Text Node
 8. Comment
 9. document
 10. docType 
 */
//console.log(nodetYPE); 


let container = document.querySelector("div.container");

//console.log(container.children[1].children[0].children);
//console.log(container.firstChild);
//console.log(container.firstElementChild);
//console.log(container.lastElementChild);
//console.log(container.childElementCount);  // Count of child elements
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(
    container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
           );
