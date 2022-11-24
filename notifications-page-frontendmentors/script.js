// Distinguish between "unread" and "read" notifications
// - Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page
const markasread =document.getElementById("markasread");

const notification_value=document.querySelector(".notification-count");
const notification =document.querySelectorAll(".notification");
const n1 =document.getElementById("n1");
const n2 =document.getElementById("n2");
const n3 =document.getElementById("n3");
let value;
let a =true;
let b =true;
let c =true;
markasread.addEventListener("click",()=>{
    // const notification_count =document.querySelector(".notification-count");
    notification_value.innerHTML="0"
    n1.style.backgroundColor = "white";
    n2.style.backgroundColor = "white";
    n3.style.backgroundColor = "white";

})

n1.addEventListener("click",()=>{
    n1.style.backgroundColor = "white";
    const notification_count =document.querySelector(".notification-count").textContent;
 
    if(a===true){
    value=notification_count-1;
    notification_value.innerHTML=value;
}
     return  a=false;
})
n2.addEventListener("click",()=>{
    n2.style.backgroundColor = "white";
    const notification_count =document.querySelector(".notification-count").textContent;
    if(b===true){
        value=notification_count-1;
        notification_value.innerHTML=value;
    }
         return  b=false;
})
n3.addEventListener("click",()=>{
    n3.style.backgroundColor = "white";
    const notification_count =document.querySelector(".notification-count").textContent;
    if(c===true){
        value=notification_count-1;
        notification_value.innerHTML=value;
    }
         return  c=false;
})
