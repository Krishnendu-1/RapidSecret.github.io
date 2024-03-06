
gsap.registerPlugin(ScrollTrigger);
var arr=[];
for(let i=0;i<4;i++){
    let a=Math.floor(Math.random()*100);
    console.log(a);
    arr+=[a];
    
    
}
console.log(arr);
var alphabet="KCNWZFmdbri";
var specialchar="@#$%%^*@!_-&&&*";
var specialnum="9204$@)@$175368!#$&%*(@)*!_";
var regenerate=document.querySelector(".regenerate")


var click=document.querySelector(".btn");
var clr=document.querySelector(".output1");//.clr doesnot need to reset
var lnth;
var flag;
var c;
var d;
var preference=document.querySelector("#autoSizingSelect");
var output=document.querySelector(".placeholder");





gsap.to("h3",{
    "clipPath": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease:"power3.inout",
    duration:3,
    delay:0.5,
    
})

//To check any form is empty or not by this below given way⬇️
function checked(lnth){
    var text=document.querySelector("#text2").value.trim();//it is mancdatory and simplest way
// if(text==""){
//     window.alert("Fill the form properly!");
//     document.querySelector('.placeholder').style.display = '☹️';
    
// }
var keyword="@gmail.com";
if(text.search(keyword)==-1 || text==""){//this is very useful
    window.alert("Give your correct email")
}
else{
    window.alert("You may prceed");
    document.querySelector('.placeholder').style.display = 'block';
    lnth=window.prompt("enter the max length of password you want😀");
    lnth=Number(lnth);
     
    return callme_babe(lnth);
}}

function callme_babe(lnth){
    c= Math.floor(Math.random()*10)
    console.log(c)
     d= Math.floor(Math.random()*10)
    console.log(d)
if(c<=12 && d<=12 &&lnth<=32){

 if(preference.value=='2'){
    var l=alphabet.slice(c,d)+specialchar.slice(d)+specialnum.slice(c,d);
   var outcome=l.slice(0,lnth);
   console.log(`your strong password is opt2: ${outcome}`);
   
   document.querySelector(".placeholder").value=outcome;
   }
   else if(preference.value=='3'){
    var l=alphabet.slice(c)+arr;
   var outcome=l.slice(0,lnth);
   console.log(`your strong password is opt3: ${outcome}`);
  
   output.value=outcome;
   }

}
else{
    if(lnth!=Number(lnth)){
        window.alert("oops! try again with valid length to get new and strong password😊");
    }
    else{
    window.alert("oops! try again : you put longer than expected!");
}
}
    
}

click.addEventListener("click",(flag)=>{
    regenerate.style.visibility="visible";
    checked(flag);})
  
regenerate.addEventListener("click",function callback(){

    window.alert("Want more alternatives on your selected option😉 You'll get millions of alternatives🤯 for free")
   var output=Math.floor(Math.random()*20);
   if(output<=5){
   var output1=Math.floor(Math.random()*20)
   console.log(output1);
    return callme_babe(output1);
    
   }
   else{
    return callme_babe(output);}
   
})
   
        
    
    
    



clr.addEventListener("reset",()=>{  // very useful for reseting the form
    window.alert("Are you sure!!");
})









// var h3=document.querySelector("#texth3") 

// var tl = gsap.timeline({
//     paused: true
//   })
//   .to(h3, {
//     opacity: 0,
//     duration: 3,
//     ease: "back",
//     repeat: -1
//   });

// h3.addEventListener("mouseover",()=>{
//     t1.play()
// })
