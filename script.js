 let hourNeedle = document.querySelector('.hour');
 let minNeedle = document.querySelector('.minute');
 let secNeedle =document.querySelector('.second'); 

 function clock(){
    // formula for rotate deg
    let time = new Date();
    let sec = time.getSeconds()/60;
    let min=(sec+time.getMinutes())/60;
    let hour=(min+time.getHours())/12;
    
    hourNeedle.style.setProperty('--rotation',hour*360)
    minNeedle.style.setProperty('--rotation',min*360)
    secNeedle.style.setProperty('--rotation',sec*360)

 }
 setInterval(clock,1000)

//  let secLin=document.querySelector('.seclin1');

 