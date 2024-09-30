let navclock=document.querySelector("#clo");
let clock=document.querySelector(".clock");
let navalarm=document.querySelector("#ala");
let alarm=document.querySelector(".alarm");
let navstopwatch=document.querySelector("#sto");
let stopwatch=document.querySelector(".stopwatch");
let navtimer=document.querySelector("#tim");
let timer=document.querySelector(".timer");
let navhome=document.querySelector("#home");


navclock.addEventListener("mouseover",()=>{
    clock.style.boxShadow="inset 9px 20px 30px 14px #990000";
    navclock.style.color="#990000";
})
navclock.addEventListener("mouseout",()=>{
    if(navclock.value=="no"){
        navclock.style.color="#808080";
    }
    clock.style.boxShadow="inset 9px 20px 30px 14px black";
})
clock.addEventListener("mouseover",()=>{
    clock.style.boxShadow="inset 9px 20px 30px 14px #990000";
    navclock.style.color="#990000";
})
clock.addEventListener("mouseout",()=>{
    if(navclock.value=="no"){
        navclock.style.color="#808080";
    }
    clock.style.boxShadow="inset 9px 20px 30px 14px black";
})
//---------------clock--------------------------------
navalarm.addEventListener("mouseover",()=>{
    alarm.style.boxShadow="inset 9px 20px 30px 9px #990000";
    navalarm.style.color="#990000";
})
navalarm.addEventListener("mouseout",()=>{
    if(navalarm.value=="no"){
        navalarm.style.color="#808080";
    }
    alarm.style.boxShadow="inset 9px 20px 30px 14px black";
})
alarm.addEventListener("mouseover",()=>{
    alarm.style.boxShadow="inset 9px 20px 30px 9px #990000";
    navalarm.style.color="#990000";
})
alarm.addEventListener("mouseout",()=>{
    if(navalarm.value=="no"){
        navalarm.style.color="#808080";
    }
    alarm.style.boxShadow="inset 9px 20px 30px 14px black";
})
//-----------------alarm------------------------------------
navstopwatch.addEventListener("mouseover",()=>{
    stopwatch.style.boxShadow="inset 9px 20px 30px 14px #990000";
    navstopwatch.style.color="#990000";
})
navstopwatch.addEventListener("mouseout",()=>{
   if(navstopwatch.value=="no"){
    navstopwatch.style.color="#808080";
   }
    stopwatch.style.boxShadow="inset 9px 20px 30px 14px black";
})
stopwatch.addEventListener("mouseover",()=>{
    stopwatch.style.boxShadow="inset 9px 20px 30px 14px #990000";
    navstopwatch.style.color="#990000";
})
stopwatch.addEventListener("mouseout",()=>{
    if(navstopwatch.value=="no"){
        navstopwatch.style.color="#808080";
    }
    stopwatch.style.boxShadow="inset 9px 20px 30px 14px black";
})
//---------------stopwatch------------------------------------
navtimer.addEventListener("mouseover",()=>{
    timer.style.boxShadow="inset 9px 20px 30px 14px #990000";
    navtimer.style.color="#990000";
})
navtimer.addEventListener("mouseout",()=>{
    if(navtimer.value=="no"){
        navtimer.style.color="#808080";
    }
    timer.style.boxShadow="inset 9px 20px 30px 14px black";
})
timer.addEventListener("mouseover",()=>{
    timer.style.boxShadow="inset 9px 20px 30px 14px #990000";
    navtimer.style.color="#990000";
})
timer.addEventListener("mouseout",()=>{
    if(navtimer.value=="no"){
        navtimer.style.color="#808080";
    }
    timer.style.boxShadow="inset 9px 20px 30px 14px black";
})
//----------------timer-----------------------------------------
//------------------------------------------------------------------
navclock.addEventListener("click",()=>{
    if(navclock.value=="no"){
        clock.style.visibility="";
        navclock.value="yes";
        navhome.value="no";
        navalarm.value="no";
        navstopwatch.value="no";
        navtimer.value="no";
        navhome.style.color="#808080";
        navalarm.style.color="#808080";
        navstopwatch.style.color="#808080";
        navtimer.style.color="#808080";
        navclock.style.color="#990000";
        clock.classList.add("full");
        clock.classList.remove("clock");
        alarm.classList.remove("full");
        alarm.classList.add("alarm");
        stopwatch.classList.remove("full");
        stopwatch.classList.add("stopwatch");
        timer.classList.remove("full");
        timer.classList.add("timer");
        alarm.style.visibility="hidden";
        stopwatch.style.visibility="hidden";
        timer.style.visibility="hidden";
        aladis();
        hideswb();
        thide();

    }
    else{
        navclock.value="no";
        navhome.value="yes";
        navhome.style.color="#990000";
        clock.classList.add("clock");
        clock.classList.remove("full");
        alarm.style.visibility="";
        stopwatch.style.visibility="";
        timer.style.visibility="";
    }
})
navstopwatch.addEventListener("click",()=>{
    if(navstopwatch.value=="no"){
        stopwatch.style.visibility="";
        navstopwatch.value="yes";
        navhome.value="no";
        navalarm.value="no";
        navclock.value="no";
        navtimer.value="no";
        navhome.style.color="#808080";
        navalarm.style.color="#808080";
        navclock.style.color="#808080";
        navtimer.style.color="#808080";
        navstopwatch.style.color="#990000";
        stopwatch.classList.add("full");
        stopwatch.classList.remove("stopwatch");
        alarm.classList.remove("full");
        alarm.classList.add("alarm");
        clock.classList.remove("full");
        clock.classList.add("clock");
        timer.classList.remove("full");
        timer.classList.add("timer");
        alarm.style.visibility="hidden";
        clock.style.visibility="hidden";
        timer.style.visibility="hidden";
        aladis();
        swstart();
        thide();

    }
    else{
        navstopwatch.value="no";
        navhome.value="yes";
        navhome.style.color="#990000";
        stopwatch.classList.add("stopwatch");
        stopwatch.classList.remove("full");
        alarm.style.visibility="";
        clock.style.visibility="";
        timer.style.visibility="";
        hideswb();
    }
})
navalarm.addEventListener("click",()=>{
    if(navalarm.value=="no"){
        alarm.style.visibility="";
        navalarm.value="yes";
        navhome.value="no";
        navclock.value="no";
        navstopwatch.value="no";
        navtimer.value="no";
        navhome.style.color="#808080";
        navclock.style.color="#808080";
        navstopwatch.style.color="#808080";
        navtimer.style.color="#808080";
        navalarm.style.color="#990000";
        alarm.classList.add("full");
        alarm.classList.remove("alarm");
        clock.classList.remove("full");
        clock.classList.add("clock");
        stopwatch.classList.remove("full");
        stopwatch.classList.add("stopwatch");
        timer.classList.remove("full");
        timer.classList.add("timer");
        clock.style.visibility="hidden";
        stopwatch.style.visibility="hidden";
        timer.style.visibility="hidden";
        alarmset();
        hideswb();
        thide();

    }
    else{
        navalarm.value="no";
        navhome.value="yes";
        navhome.style.color="#990000";
        alarm.classList.add("alarm");
        alarm.classList.remove("full");
        clock.style.visibility="";
        stopwatch.style.visibility="";
        timer.style.visibility="";
        aladis();
    }
})
navtimer.addEventListener("click",()=>{
    if(navtimer.value=="no"){
        timer.style.visibility="";
        navtimer.value="yes";
        navhome.value="no";
        navalarm.value="no";
        navstopwatch.value="no";
        navclock.value="no";
        navhome.style.color="#808080";
        navalarm.style.color="#808080";
        navstopwatch.style.color="#808080";
        navclock.style.color="#808080";
        navtimer.style.color="#990000";
        timer.classList.add("full");
        timer.classList.remove("timer");
        alarm.classList.remove("full");
        alarm.classList.add("alarm");
        stopwatch.classList.remove("full");
        stopwatch.classList.add("stopwatch");
        clock.classList.remove("full");
        clock.classList.add("clock");
        alarm.style.visibility="hidden";
        stopwatch.style.visibility="hidden";
        clock.style.visibility="hidden";
        aladis();
        hideswb();
        timfunc();

    }
    else{
        navtimer.value="no";
        navhome.value="yes";
        navhome.style.color="#990000";
        timer.classList.add("timer");
        timer.classList.remove("full");
        alarm.style.visibility="";
        stopwatch.style.visibility="";
        clock.style.visibility="";
        thide();
    }
})
navhome.addEventListener("mouseover",()=>{
    navhome.style.color="#990000";
})
navhome.addEventListener("mouseout",()=>{
    if(navhome.value=="no"){
        navhome.style.color="#808080";
    }
})

navhome.addEventListener("click",()=>{
    if(navhome.value=="no"){
        navhome.value="yes"
        navclock.value="no";
        navalarm.value="no";
        navstopwatch.value="no";
        navtimer.value="no";
        clock.classList.add("clock");
        alarm.classList.add("alarm");
        stopwatch.classList.add("stopwatch");
        timer.classList.add("timer");
        clock.classList.remove("full");
        alarm.classList.remove("full");
        stopwatch.classList.remove("full");
        timer.classList.remove("full");
        clock.style.visibility="";
        alarm.style.visibility="";
        stopwatch.style.visibility="";
        timer.style.visibility="";
        aladis();
        hideswb();
        thide();

    }
})
//---------------------------------------------------------------------------
let cHrs=document.querySelector("#chrs");
let cMin=document.querySelector("#cmin");
let cSec=document.querySelector("#csec");
setInterval(() => {
    let d= new Date();
    cHrs.innerHTML=d.getHours();
    cMin.innerHTML=d.getMinutes();
    cSec.innerHTML=d.getSeconds();
}, 1000);
//---------------clock------------------------------------------
let setala=document.querySelector("#setala");
let amin=document.querySelector("#amin");
let ahrs=document.querySelector("#ahrs");

function alarmset(){
    setala.style.visibility="visible";
    ahrs.removeAttribute("readonly");
    amin.removeAttribute("readonly");
    let buzhr=0;
    let bumin=0;
    let aud= new Audio("alarm2.mp3");
    setala.addEventListener("click",()=>{
        let buzhr=ahrs.value;
        let bumin=amin.value;
        console.log("alarm set ",buzhr,":",bumin);
        setInterval(() => {
            if(buzhr==cHrs.innerHTML && bumin==cMin.innerHTML && cSec.innerHTML==0){
                aud.play();
                ahrs.value="";
                amin.value="";
                ahrs.style.color="#808080";
                amin.style.color="#808080";
                //-------------
            }
        }, 1000);
        setala.style.visibility="hidden";
        ahrs.setAttribute("readonly",true);
        amin.setAttribute("readonly",true);
        ahrs.style.color="#990000";
        amin.style.color="#990000";
    })
    
}
function aladis(){
    ahrs.setAttribute("readonly",true);
    amin.setAttribute("readonly",true);
    setala.style.visibility="hidden";

}
//---------------------alarm-----------------------------------
let swbut=document.querySelector("#setsw");
let swhrs=document.querySelector("#shrs");
let swmin=document.querySelector("#smin");
let swsec=document.querySelector("#ssec");
let stpsw=document.querySelector("#stpsw");
let swreset=document.querySelector("#swreset");
let setsec;
let setmin;
let sethrs;
function swstart(){
    if(swbut.name=="start"){
        swreset.style.visibility="visible";
        swbut.style.visibility="visible";
    }
    else{
        stpsw.style.visibility="visible";
    } 
}
swbut.addEventListener("click",()=>{
    swbut.name="stop";
        setsec= setInterval(() => {
            if(swsec.innerHTML==60){
                swsec.innerHTML=0;
            }
            swsec.innerHTML++;
        },1000);
        setmin= setInterval(async() => {
            if(swmin.innerHTML==60){
                swmin.innerHTML=0;
            }
            swmin.innerHTML++;
        },60000);
        sethrs= setInterval(() => {
            swhrs.innerHTML++;
        },3600000);
        swbut.style.visibility="hidden";
        swreset.style.visibility="hidden";
        stpsw.style.visibility="visible"; 
})
stpsw.addEventListener("click",()=>{
    swbut.name="start";
    stpsw.style.visibility="hidden";
    swbut.style.visibility="visible";
    swreset.style.visibility="visible";
    clearInterval(setsec);
    clearInterval(setmin);
    clearInterval(sethrs);
},setsec,setmin,sethrs,swbut,swreset)
swreset.addEventListener("click",()=>{
    swhrs.innerHTML="00";
    swmin.innerHTML="00";
    swsec.innerHTML="00";
    swbut.name="start";
})
function hideswb(){
    swreset.style.visibility="hidden";
    swbut.style.visibility="hidden";
    stpsw.style.visibility="hidden";
}
//--------------------------------------------------------------------------------------
let thrs=document.querySelector("#thrs");
let tmin=document.querySelector("#tmin");
let tsec=document.querySelector("#tsec");
let timbut=document.querySelector("#timbut");
let timpos=document.querySelector("#timpos");
let treset=document.querySelector("#treset");
let hrsint;
let minint;
let secint;
function timfunc(){
    if(thrs.value==tmin.value && tmin.value==tsec.value){
        thrs.removeAttribute("readonly");
        tmin.removeAttribute("readonly");
        tsec.removeAttribute("readonly");
    }
    if(timbut.name=="start"){
        timbut.style.visibility="visible";
        treset.style.visibility="visible";
    }
    else{
        timpos.style.visibility="visible";
    }
    
}
timbut.addEventListener("click",()=>{
    timbut.name="pause";
    let check;
    timbut.style.visibility="hidden";
    treset.style.visibility="hidden";
    timpos.style.visibility="visible";
    timaud=new Audio("alarmsound.mp3");
    check=setInterval(() => {
        if(thrs.value==0 && tmin.value==0 && tsec.value==0){
            timaud.play();
            timpos.click();
            treset.click();
            navtimer.click();
            clearInterval(check);
        }
    }, 100);
    
    hrsint=setInterval(() => {
        thrs.value--;
    }, 3600000);
    minint=setInterval(() => {
        if(tmin.value==0){
            tmin.value=60;
        }
        tmin.value--;
    }, 60000);
    secint=setInterval(() => {
        if(tsec.value==0){
            tsec.value=60;
        }
        tsec.value--;
    }, 1000);

    thrs.setAttribute("readonly",true);
    tmin.setAttribute("readonly",true);
    tsec.setAttribute("readonly",true);

})
timpos.addEventListener("click",()=>{
    timbut.name="start";
    timbut.style.visibility="visible";
    treset.style.visibility="visible";
    timpos.style.visibility="hidden";
    clearInterval(hrsint);
    clearInterval(minint);
    clearInterval(secint);
})
treset.addEventListener("click",()=>{
    thrs.removeAttribute("readonly");
    tmin.removeAttribute("readonly");
    tsec.removeAttribute("readonly");
    thrs.value="";
    tmin.value="";
    tsec.value="";
})
function thide(){
    timbut.style.visibility="hidden";
    treset.style.visibility="hidden";
    timpos.style.visibility="hidden";
}
