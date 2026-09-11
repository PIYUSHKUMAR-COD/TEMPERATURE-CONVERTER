let input1=document.querySelector(".input");
let result1=document.querySelector(".result1");
let result2=document.querySelector(".result2");
let result3=document.querySelector(".result3");
let button=document.querySelector("button");
button.addEventListener("click",()=>{
result1.innerHTML="";
result2.innerHTML="";
result3.innerHTML="";
input1.value="";
input1.focus();
});
input1.addEventListener("input",()=>{
        let tem = Number(input1.value);
        let kelvin=tem+273.14;
        result3.innerHTML=kelvin.toFixed(2);
       result1.innerHTML=tem;
       let far=(tem*9/5)+32;
       result2.innerHTML=far.toFixed(2);
        if(input1.value.length>6){
            result1.innerHTML="MAX!";
            result2.innerHTML="MAX!";
            result3.innerHTML="MAX!"; 
             return; 
    }
   
     if(input1.value.length===0){
         result1.innerHTML="";
            result2.innerHTML="";
            result3.innerHTML=""; 
            return;
    }
     
    
    convert();
});


