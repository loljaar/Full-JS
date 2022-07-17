/*
console.log("Events & Event Object ");

let one = document
  .getElementById("heading")
  .addEventListener("mouseover", function (e) {
    let variable;
    console.log("You have cliked the heading");
    variable = e.target.id;
    variable = Array.from(e.target);
    //variable = e.offsetX;
    //variable = e.offsetY;
    //variable = e.clientY;
    variable = e.clientX;
    //variable = e.target.className;
    console.log(variable);
    //Location.href = '//codewithharry.com';
  });

  */
 /*
  // More on Events :
  // ( e ) in function means element

  console.log("Events & Event Object ");
  let btn = document.getElementById("btn");
  btn.addEventListener(
  /*'click'*//*'dblclick'*//*"mousedown"*//*"mouseenter"*//*"mouseleave"*//*"mouseleave", func
                      );
  function func(e) {
    console.log("th", e);
  }
  
  */
 /*
  let no = document.querySelector("#heading").addEventListener(/*"mouseenter"*//*"mouseleave"*//*"mousemove", fun);
  /*function fun (e) {
      let message = "Mouse Has Now Entered The Area";
      let head = document.querySelector("#heading");
      //head.style.backgroundColor= "red";
      document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX})`;
      console.log(message, e, head);
    };;
    */
        let no = document.querySelector("#heading").addEventListener(
          "mouseover", fun
        )
        function fun(e) {
          document.body.style.backgroundColor="red";
        }
        console.log(no, e);