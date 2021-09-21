 const daysEL=document.getElementById('days');
const hoursEL=document.getElementById('hours');
 const minsEL=document.getElementById('mins');
 const secondsEL=document.getElementById('seconds');

const myHB='28 july 2022';

function  countdown() {
    const  newBdate= new Date(myHB);
    const currentdate= new Date();
  

    const totalseconds=(newBdate - currentdate)/1000;

    const days = Math.floor( totalseconds/3600/24);
    const hours= Math.floor( totalseconds /3600)%24;
    const mins= Math.floor( totalseconds /60)% 60;
    const seconds= Math.floor(totalseconds % 60) ;
   // console.log( days ,hours , minuts ,seconds );
   daysEL.innerHTML=days;
   hoursEL.innerHTML=formattime(hours) ;
   minsEL.innerHTML= formattime(mins);
   secondsEL.innerHTML=formattime(seconds);


}

function formattime(time) {
    return time <10 ? `0${time}` :time;
}


countdown();
setInterval(countdown ,1000)//این قظعه کدباعث میشه فانکشن اصلی ماکارکند یهنی هر1000میلی ثانیه یاهمون 1ثانیه یکبار تابع فراخوانی شود
//تازمانی که تابع clearIntervalفراخوانی شود کارمیکند