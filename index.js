let count=0;
let basescore= document.getElementById("homenum")
let basescoreguest= document.getElementById("guestnum")

function onepoint(){  
   count= count+1;   
   basescore.innerText=count;
}

function twopoint(){
    count= count+2;   
    basescore.innerText=count;
}

function threepoint(){
    count= count+3;   
    basescore.innerText=count;
}

function reset(){
    count=0;
    basescore.innerText=count; 
}

let guestcount=0

function onepointgt(){ 
  guestcount= guestcount+1;   
  basescoreguest.innerText=guestcount;
}

function twopointgt(){
   guestcount= guestcount+2;   
   basescoreguest.innerText=guestcount;
 }

function threepointgt(){
   guestcount= guestcount+2;   
   basescoreguest.innerText=guestcount;
}

function resetguest(){
    guestcount=0;
    basescoreguest.innerText=guestcount; 
}
