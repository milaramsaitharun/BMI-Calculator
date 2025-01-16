//functions
let b;
function calc(){
    let w=document.getElementById("we").value;
    let h=document.getElementById("he").value;
    h=h/100;

    
    b=(w / (h*h));
    
    const paragraph=document.getElementById("mypara");
    if(b==NaN){
        mypara.innerText="Enter your weight(in kgs) and height (in cm).";
    }else{

    
        mypara.innerText="Your BMI is :"+b.toFixed(2);
    }
    
    if(b<=18.5){
        let msg=document.getElementById("msg");
        msg.innerText=`You are Under Weight.`;
        msg.style.color="blue";
    }
    else if(b>18.5 && b<=25){
        let msg=document.getElementById("msg");
        msg.innerText=`You are Healthy Weight.`;
        msg.style.color="green";
    }
    else if(b>25 && b<=30){
        let msg=document.getElementById("msg");
        msg.innerText=`You are Over Weight.`;
        msg.style.color="yellow";
    }
    else if(b>30){
        let msg=document.getElementById("msg");
        msg.innerText=`You are Odese.`;
        msg.style.color="red";
    }
}

function reload(){
    document.getElementById("he").value="";
    document.getElementById("we").value="";
    const paragraph=document.getElementById("mypara");
    mypara.innerText="Enter your weight(in kgs) and height (in cm).";
    let msg=document.getElementById("msg");
        msg.innerText="";

}


// const needle = document.getElementById('needle');


// // Function to set needle position and background color based on a value (0-100)
// function setNeedle() {
//  // Minimum angle for the needle
//   const angle = (b/50)*180-0;
//   needle.style.transform = `rotate(${angle}deg)`;

//   // Set background color based on value

// }

