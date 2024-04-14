let hrs= document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let mil =document.getElementById("milisecs");

setInterval(()=>{

  let currentTime = new Date();

  hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
  
},1000);

setInterval(()=>{
  mil.innerHTML=(now.getMilliseconds()<10?"00":"")+now.getMilliseconds();
},1000);


