// // var rightNow = new Date();
// // console.log(rightNow);

// //day

// var rightNow = new Date();
// var theDay = rightNow.getDay();
// console.log(theDay);


//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  console.log(nameOfToday);
 

//  console.log(new Date().getDay());
//  console.log(new Date().getMonth());
//  console.log(new Date().getDate());
//  console.log(new Date().getFullYear());
//  console.log(new Date().getHours());
//  console.log(new Date().getMinutes());
//  console.log(new Date().getMilliseconds());
//  console.log(new Date().getTime());

//  var birthday = new Date ("May 24, 1987")
//  console.log(birthday.getFullYear());
 
 
// ASSIGNMENT 12

//Q1

// document.write(new Date())

//q2
// var currentMonth = new Date().getMonth();
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//   ];
//   alert("Current Month :" + months[currentMonth])


  //q3

// var currentDay = new Date().getDay();
// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'];
//   alert("Today is " + days[currentDay])


  //q4

//   var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   var today = new Date().getDay();
  
//   if (today === 0 || today === 6) { 
//       alert("It's funday");
//   } else {
//       document.write(days[today]); 
//   }
  

  //q5


//   var today = new Date().getDate();
// //   document.write(today)
//   if (today<16) {
//     alert("First fifteen Days")
    
//   } else {
//     alert("Last fifteen days")
//   }


  //q6
//   var today = new Date();
// var mS = new Date().getTime()
// var min = mS/1000/60
// document.write("Current Date: " + today + "<br>")
// document.write("Elapsed milliseconds since January1, 1970: " + mS + "<br>")
// document.write("Elapsed minutes since January 1, 1970: " + min + "<br>")


//q7

// var time = new Date().getHours()
// document.write(time)

// if (time<12) {

//     alert("It's AM")
    
// } else {
//     alert ("It's PM ")
// }


//q8


// var laterDate = new Date("Dec 31, 2020")

// document.write("Later Date :"+laterDate)


//q9

// var ramadan = new Date("June 18, 2015")
// // document.write(ramadan)
// var today = new Date();

// var daysPassed = (today-ramadan)/ (1000*60*60*24)


// alert(daysPassed.toFixed(0) + " days have passed since 1st Ramadan, 2015")

//q10

// var d = new Date();
// var dBeg = new Date("Jan 1,2015")

// var secondsPassed = (d-dBeg)/(1000)
// document.write("On reference date "+ d + ", <br> "+secondsPassed.toFixed(0)+" seconds had passed since begining of 2015")


//q11


//  var now = new Date();
 
// var d = new Date(now);
//  var hours = d.getHours();
//  d.setHours(hours - 1);
//  document.write("Current date: " + now + "<br>"+" 1 hour ago, it was: " + d);

//q12

// var now = new Date();
 
// var d = new Date(now);
//  var years = d.getFullYear();
//  d.setFullYear(years - 100);
//  document.write("Current date: " + now + "<br>"+" 100 years back it was: " + d);


//q13

// var age = +prompt("Please Enter your Age")

// var now = new Date();
// var d = now.getFullYear();

// var birthYear = d-age
// document.write("Your Age is" + age + '<br>' + " Your birth year is" + birthYear)


