// console.log("loops");
//=================================================================================
//for loop //

// let lp = 0
// for (let lp = 0; lp< 4; lp++) {
//        console.log(lp);

// }
// let lp = ["jatin", "rhoi", "jona"]
// for (let index= 0; index < lp.length; index++) {
//     console.log(lp[index]);

// }
// let jp = [ "jatin", "rhoi", "jona"]
// for (let index = 0; index < jp.length; index++) {
//     console.log( "hellow "  + jp[index] +  "  how are you");

// }

// let jp = [ "jatin", "rhoi", "jona"]
// for (let index = 0; index< jp.length; index++) {
//     console.log( jp[index]);

// }
// let nu =["name1", "name2",  "name3"]
// for (let index = 0; index < nu.length; index++) {
//     console.log(nu[index]);

// }

//=======================================================================================
//for each loop//

// let jp = [ "jatin", "rhoi", "jona"]
// jp.forEach( function name(element) {
//     console.log( "hellow "  +element +  "  how are you");
// });

// let ok = [ "jatin", "rhoi", "jona"]
// ok.forEach(function name(smothing) {
//     console.log("hellow "  +smothing +  "  how are you");
//     });

// let ok = [ "jatin", "rhoi", "jona"]
// ok.forEach(function name(something) {
//     console.log("heelow " + something + " how are you");
// });

// let nu =["name1", "name2",  "name3"]
// nu.forEach(function name(element) {
//     console.log("smothing " + element + " smothing");
// });

//============================================================================================
//for in loop//

// let ok = {
//     name:"jation",
//     surname:"whagela"
// }
// for ( key in ok) {
//     console.log(`smo ${key} smo ${ok[key]}`);
// }

// let ob = {
//     name :"jatin",
//     job:"nothing",
//     salary: "smothing",
//     has:"nothing"
// }
// for ( key in ob) {
//     console.log(`hellow ${key} smo ${ob[key]}`);
// }

// let home = {
//     name :"jatin",
//     job:"nothing",
//     salary: "smothing",
//     has:"nothing"
// }
// for ( key in home) {
//    console.log(`${key} ${home[key]}`);
// }
//    let objecta = {
//     name :"jatin",
//     job:"noting"
//    }
//    for ( key in objecta) {
//         console.log( `${key} ${objecta[key]} `);
//     }

//============================================================================================
//for of loop

// let jp = [ "jatin", "rhoi", "jona"]
// for ( element of jp) {
//     console.log("hellow "  + element+  "  how are you");
// }

// let ok = [ "jatin", "rhoi", "jona"]
// for (smothing of ok) {
//     console.log("hellow  " + smothing + "  how are you ")
// }

// let ok = [ "jatin", "rhoi", "jona"]
// for ( element of ok) {
//     console.log("hellow " + element + " how are you ");
// }

// let lop =  [ "jatin", "rhoi", "jona"]
// for ( smothing of lop) {
//     console.log("hellow " + smothing + " how are youn ");
// }
// let  lop =  [ "jatin", "rhoi", "jona"]
// for ( smothing of lop) {
//    console.log("smo" + smothing + "sko");
//  }

//  let ho =  [ "jatin", "rhoi", "jona"]
//  for ( name of ho) {
//     ;console.log("hellow " + name + " how are you");
//  }
//==============================================================================================
//while loop

// let jp = 0
// while (jp<4) {
//     console.log(`hellow number  ${jp} how are you `);
//     jp++;
// }

// let kp = 0
// while (kp<5) {
//     console.log(`${kp} number how are you `);
//     kp++;
// }
// lol = 0
// while (lol<6) {
//     console.log(`${lol} hellow`);
//     lol++;
// }

// let op = 0
// while (op<5) {
//     console.log(`${op}`);
//     op++;
// }

// let oo = 0
// while (oo<5) {
//     console.log(oo);
//     oo++;
// }
//===============================================================================================
//do while loop

// let dwl = 0
// do {
//     console.log(`${dwl} how are you`);
//     dwl++;
// } while (dwl<7);

// let ip = 0
// do {
//     console.log(`${ip}`);
//     ip++;
// }while (ip<6)

// let yp = 0
// do {
//     console.log(`${yp}`);
//     yp++;
// } while (yp<7);

// let ol = 0
// do {
//     console.log(ol + " number");
//     ol++;
// } while (ol<7);
//================================================================================================
///console.log("events");

// events //

// browser events":
// click
// contextmenue
// mouse over / mouse out
// mouse down / mouse up
// mouse move

// submit
// focus

// dom content loeaded

// transtitiond

//show hide :=

//     let para = document.getElementById('para');
//         para.addEventListener('mouseover', function run() {
//            alert('mouseinside')
//     });

//    para = document.getElementById('para');
//         para.addEventListener('mouseout', function run() {
//             alert('mouse oustside')
//     });

//    function toggleHide() {
//     let btn = document.getElementById("btn");
//      let para = document.getElementById("para");
//         if ( para.style.display  != "none") {

//          para.style.display = "none";
//      }
//      else {
//        para.style.display = "block";
//      }
//    }

// function toggleHide() {

//     if (para.style.display !='none') {
//         para.style.display ='none'
//     } else {
//         para.style.display ='block'
//     }
// }

// function toggleHide() {
//   if (para.style.display != "none") {
//     para.style.backgroundcolor = "red";
//   } else {
//     para.style.display = "block";
//   }
// }

// function toggleHide() {
//     if (para.style.display !="none") {
//         para.style.display = "none "
//     } else {
//         para.style.display="block"
//     }
// }

//change body backgroundcolor to black

// function changebackgroundcolor() {
//   let somthing = document.body;
//   somthing.classList.toggle("darkmode");
// }

// function toggleHide() {
//     if (para.style.display !="none") {
//         para.style.display ="none"
//     } else {
//         para.style.display ="block"
//     }
// }

// function changebackgroundcolor() {
//     let smothing = document.body;
//     smothing.classList.toggle("darkmode")
// }

// function toggleHide() {
//     if (para.style.display !="none") {
//         para.style.display ="none"
//     } else {
//         para.style.display ="block"
//     }
// }

// function changebackgroundcolor ( ) {
//    let something=document.body;
//    something.classList.toggle("darkmode")
// }

// function toggleHide( ) {
//     if (para.style.display !="none") {
//         para.style.display ="none"
//     } else {
//         para.style.display ="block"
//     }
// }
// function changebackgroundcolor() {
//     let smoting = document.body;
//     smoting.classList.toggle("darkmode")
// }

// function toggleHide() {
//    if (para.style.display !="none") {
//     para.style.display ="none"
//    } else {
//     para.style.display ="block"
//    }
// }

// function changebackgroundcolor() {
//     let something = document.body;
//     something.classList.toggle("darkmode")
// }

// function changebackgroundcolor() {
//     let smothuing = document.body;
//     smothuing.classList.toggle("darkmode")
// }

// function toggleHide() {
//     if (para.style.display !="none") {
//         para.style.display ="none"
//     } else {
//         para.style.display ="block"
//     }
// }

//========================================================================================================

//set interval & set time out & display time//

//setTimeout --> allouse us to run the function once after the interval of time
// clearTimeout --> allouse us to run the function repetedly after the interval of time

// console.log("set interval & set time out" );

// set time out//

// function greet(name,greettext) {
//     console.log(name + "hellow " + greettext);
// }

// let lol = greet("jatin" , "loljaar") // not this

// setTimeout(greet, 3000, "jatin", );// not this eather
// setTimeout(greet, 5000, "jatin", "loljaar");//this one is right

// function test(name,text) {
//         console.log("helo" + name + " how are you " + text);
// }
// setTimeout(test , 3000, " jatin ", "?" );

//set time out with clear time out //

// function test(name,text) {
//     console.log(name + text);
// }
// time=setTimeout(test, 3000 , "jatin " , " loljar");
// console.log(time);
//  clearTimeout(time);

// function test(name,text) {
//     console.log(name + " say hellow to " + text);

// }
// let time = setTimeout(test, 3000, "jatin", " loljaar");

//  console.log(time);
//  clearTimeout(time)

// function test(name,text) {
//     console.log(name + " hellow " + text);
// }
// let time = setTimeout(test, 2000, "jatin ", " loljaar");
//clearTimeout(time)

//  function test(name,text) {
//     console.log(name+" hellow "+text);
//  }
//  let time = setTimeout(test, 3000, "jatin ", " loljaar");
//  console.log(time);
//clearTimeout(time)

// set interval and set interval with time out  //

// function test(name,text) {
//     console.log(name + " hellow " + text);

// }
// let interval = setInterval(test, 1000, "jatin", "loljar");
// console.log(interval);

// function test(name,text) {
//     console.log(name+" helloe" + text);
// }
// let interval = setInterval(test, 2000, "jatin", " loljaar");
// console.log(interval);

// function test(name,text) {
//     console.log(name + " hellow " + text);
// }

// let interval = setInterval(test, 2000, "jatin ", "loljaar");
// let clear = clearInterval(interval)
// console.log(clear);

// function test(name,text) {
//     console.log(name+" hello "+text);
// }
// let interval = setInterval(test, 3000," jatin "," loljaar");
// console.log(interval);
//clearInterval(interval)

// function test(name,text) {
//     console.log(name + " nice " + text);
// }
// let interval = setInterval(test, 2000 , "jatin " , " loljaar");
// console.log(interval);
// clearInterval(interval)

//display time//

//  function displaytime() {
//      let time = new Date()
//      console.log(time);
//   document.getElementById('time').innerText = time

//  }
//  setInterval(displaytime, 1000);

// function displaytime() {
//      let date = new Date()
//      console.log(date);
//      document.getElementById("time").innerHTML=time
// }
// let interval = setInterval(displaytime, 2000);
// console.log(interval);

//  function test() {
//      let date = new Date()
//      console.log(date);
//      document.getElementById('time').innerText=time
//  }
// setInterval(test, 3000);

// function displaytime() {
//     let date =new Date()
//     console.log(date);
//     document.getElementById('time').innerText= time;

// }
// let interval = setInterval(displaytime, 1000);
// let clear = clearInterval(interval);
// console.log(clear);

// function displaytime() {
//     let date = new Date()
//     console.log(date);
//     document.getElementById('time').innerHTML= date;
// }
// let interval = setInterval(displaytime, 1000);

//clearInterval(interval)

//=======================================================================================================

//=======================================================================================================

// clock //

// function test() {
//     let date = new Date()
//     let hh = date.getHours()
//     let mm = date.getMinutes()
//     let ss= date.getSeconds()
//     let session = "AM"

//     if (hh==0) {
//         hh= 12
//     }
//     if (hh>12) {
//         hh= hh-12;
//         session="PM"
//     }

//     hh= (hh<10)? "0"+hh : hh;
//     mm= (mm<10)? "0"+mm : mm;
//     ss= (ss<10)? "0"+ss : ss;

//     let time = hh + ":"+ mm + ":" + ss + " " + session;

//    document.getElementById("time").innerText=time;

// }
// let interval = setInterval(test, 0000);

//=======================================================================================================
//again//
// function test() {
//     let date= new Date()
//     let hh =  date.getHours()
//     let mm =  date.getMinutes()
//     let ss =  date.getSeconds()
//     let session = "AM"

//     if (hh==0) {
//         hh = 12;
//     }
//     if (hh>12) {
//         hh=hh-12
//     }

//     hh= (hh<10) ? "0"+hh : hh;
//     mm= (mm<10) ? "0"+mm : mm;
//     ss= (ss<10) ? "0"+ss : ss;

//     let time = hh+":"+mm+":"+ss +" "+ session;

//     document.getElementById("time").innerText=time;
// }
// let iterval  = setInterval(test, 0000);



// function watch() {
//     let date = new Date()
//     let hh= date.getHours()
//     let mm= date.getMinutes()
//     let ss= date.getSeconds()
//     let session ="AM"

//     if (hh == 0) {
//         hh = 12;
//     }
//     if (hh> 12) {
//         hh = hh-12;
//         session="PM"
//     }

//     hh = (hh<10) ? "0"+hh : hh;
//     mm = (mm<10) ? "0"+mm : mm;
//     ss = (ss<10) ? "0"+ss : ss;
    
//     let timer =  hh + ":" +mm + ":"+ss+" "+session
//     document.getElementById("time").innerText=timer
    
// }
// let interval = setInterval(watch, 0000);
//clearInterval(1);
//=======================================================================================================
//=======================================================================================================

//date & time //


// function clock() {
//     let date = new Date()
    
//     console.log(date);
//     document.getElementById("DATE").innerText=date
// }
// let interval = setInterval(clock, 4000);

//function clock() {
    //let date = new Date(year , mothes, days, housr, minits,seconds , mili-seconds)
    //let date = new Date("2030", "11", "12", "5", "30" ,"30", "30")
    //let date = new Date("2030", "11", "12", "5")

    //or

    // let date = new  Date()
    // let hh = date.getHours()
    // let mm = date.getMinutes()
    // let ss = date.getSeconds()
    // let session = "AM"

    // if (hh==0) {
    //     hh=12;
    // }
    // if (hh>12) {
    //     hh=hh-12
    // }

    // hh =(hh<10)? "0"+hh:hh;
    // mm =(mm<10)? "0"+mm:mm;
    // ss =(ss<10)? "0"+ss:ss;

    // let time = hh+":"+ mm+":"+ss+ " " +session

    //document.getElementById("DATE").innerText="time :- "+  yy + " " + hh + " " + mm + " " + ss  ;

//}

//let interval = setInterval(clock, 2000);

//=======================================================================================================

// function clock() {
//     let date = new Date()
   
//      let hh = date.getHours()
//      let mm = date.getMinutes()
//      let ss = date.getSeconds()
//      let session = "AM"

//      if (hh==0) {
//         hh=12
//      }
//      if (hh>12) {
//         hh=hh-12
//         session="PM"
//      }

//      hh = (hh<10) ? "0" + hh : hh;
//      mm = (hh<10) ? "0" + mm : mm;
//      ss = (hh<10) ? "0" + ss : ss;

//      let timer = hh+":"+mm+":"+ss+" "+session
//      document.getElementById("DATE").innerText="TIME:- "+ timer;
// }
// let interval = setInterval(clock, 1000);
//clearInterval(interval)

//======================================================================================================

// function clock() {
//     let date = new Date()
//     let hh= date.getHours()
//     let mm = date.getMinutes()
//     let ss = date.getSeconds()
//     let session ="AM"
//     if (hh==0) {
//         hh = 12;
        
//     }
//    if (hh>12){
//         hh=hh-12
//         session ="PM"
//     }    

//     hh = (hh<10)? "0"+hh : hh ;
//     mm = (mm<10)? "0"+mm : mm ;
//     ss = (ss<10)? "0"+ss : ss ;

//     let timer = hh+":"+mm+":"+ss+" "+ session
//     document.getElementById("DATE").innerText="TIME:- " + timer
    
// }
// let interval = setInterval(clock, 1000);
 //clearInterval(interval)
//======================================================================================================

//Arrow functions=

// greet = ()=> {
//       console.log("hellow in arrow functione");
// }


// setTimeout(() => {
//     console.log("we are in side greet in set time out ");
// }, 3000);

// let sum = (a,b) => {
     
//       return a+b
// }
// let count = sum(20,30);
// console.log(count);

//or//

// let sum = (a,b)=> a+b ; 
// let count = sum (10,10)
// console.log(count);

// let half= a => a/2;
// let count = half(50)
// console.log(count);

//============================================================//

// obj1 = {
//     greet : "good-morning",
//     names : ["jatin", "lol", "jaar", "rahul"],
//          speak(){
//            this.names.forEach((student) => {
//             console.log(this.greet+" hellow " + student);
//            });
//          }   
// }
// obj1.speak();

// obj1 = {
//     greet:"good-morning",
//     names:["jatin", "lol", "jaar", "rahul"],
    
//     speak(){
//         this.names.forEach((smothing) => {
//             console.log(this.greet+" hellow " + smothing );
//         });
//     }
// }
// obj1.speak()


// obj1 = {
//     greet:"good- morning ",
//     names:["jatin", "jatin2", "jatin3", "jatin4"],
// speak(){this.names.forEach((some) => console.log(this.greet+" hellow "+some) ); }
//      }; obj1.speak();

// obj1 = {
//      greet: " good morning",
//      names: ["jatin","jatin2","jatin3","jatin4"],
//  speak(){this.names.forEach((some) => console.log(this.greet+" helow " + some)); }
//         }; obj1.speak();
 
// obj1 = {
//     greet : " good-morning",
//     names:["jatin", "jatin2", "jatin3", "jatin4"],
// speak(){
//      this.names.forEach((some) => console.log(this.greet+" hellow " + some) );
//        }
//    };

// obj1.speak();

//======================================================================================================

//Math Object //

console.log("math objects");

// let m = Math;
// console.log(m);

// let a = 53.43280465
// let b = 76.61830543
// console.log(Math.round(a) ,  Math.round(b)); 

// genrationg a rendom number//
//this gives use rendom number bettwin 0 and 1 //
// let r = Math.random()
// console.log("the rendom number is :=", r);

// genrationg a rendom number//
//this gives use rendom number bettwin 1 and 100 //
let a= 1;
let b = 100;
let a_b= a + (b-a)*Math.random();
console.log("the rendom number bettwin 1 to 100 is  :=", a_b);
