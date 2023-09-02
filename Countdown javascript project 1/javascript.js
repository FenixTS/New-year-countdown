function UpdateTime(){
const currentyear=new Date().getFullYear();
const currentdate=new Date();
const newyear=new Date(`jan 1 ${currentyear+1} 00:00:00`);
const difference=newyear-currentdate;
const days=Math.floor(difference/1000/60/60/24);
const hours=Math.floor(difference/1000/60/60)%24;
const minutes=Math.floor(difference/1000/60)%60;
const seconds=Math.floor(difference/1000)%60;

//console.log(days+" "+hours+" "+minutes+" "+seconds)

const Days= document.querySelector("#days")
const Hours= document.querySelector("#hours")
const Minutes= document.querySelector("#minutes")
const Seconds= document.querySelector("#seconds")

Days.innerHTML=days<10?"0"+days:days;
Hours.innerHTML=hours<10?"0"+hours:hours;
Minutes.innerHTML=minutes<10?"0"+minutes:minutes;
Seconds.innerHTML=seconds<10?"0"+seconds:seconds;
}
setInterval(UpdateTime,1000);