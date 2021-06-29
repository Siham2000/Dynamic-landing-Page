//dom
const time = document.getElementById('time');
const greeting = document.getElementById('greeting')
const name = document.getElementById('name');
const focus = document.getElementById('focus')
const showAmPm = true;


//function showTime

function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

// set am or pm 

const amPm = hour >= 12 ?"PM" :"AM";

//12 format
hour = hour % 12 ||12

//output the time
time.innerHTML = `${hour}<span>:<span>${addZero(min)}<span>:<span>${addZero(sec)}
${showAmPm ? amPm : ""}`

setTimeout(showTime , 1000);

}

function addZero(n){

    return (parseInt(n , 10) < 10 ? "0" :"")+n



}

//set background

function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();

    if(hour <12){
        //morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')" ;
        greeting.textContent = 'Good Morning, ';
   
    }else if(hour < 18){
            //afternoon
            document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')" ;
            greeting.textContent = 'Good Afternoon, ';
        }

        else{
            //evning
            document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')" ;
            greeting.textContent = 'Good Evening, ';
            document.body.style.color = "white"
        }


}


function getNmae(){
    if(localStorage.getItem('name')=== null){
        name.textContent ='[Enter Name]' ;
    }else {
        name.textContent = localStorage.getItem('name');

    }
}


function setName(e){
    if(e.type === "keypress"){
//make sure enter is preesed
if(e.which == 13 || e.keyCode == 13){
    localStorage.setItem('name' , e.target.innerText) 
    name.blur()}
 }else {
       localStorage.setItem('name' , e.target.innerText) 
    }
}

function setFocus(e){
    if(e.type === "keypress"){
//make sure enter is preesed
if(e.which === 13 || e.keyCode == 13){
    localStorage.setItem('focus' , e.target.innerText) 
    focus.blur()}
 }else {
       localStorage.setItem('focus' , e.target.innerText) 
    }
}

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent ='[Enter focus]' ;
    }else {
        focus.textContent = localStorage.getItem('focus');

    }
}

name.addEventListener('keypress' , setName)
name.addEventListener('blur' , setName)

focus.addEventListener('keypress' , setFocus)
focus.addEventListener('blur' , setFocus)








// function getElement(elem){
//     if(localStorage.getItem(`"${elem}"`) === null){
//         elem.textContent =`[Enter ${elem}]`;
//     }else {
//         elem.textContent = localStorage.getItem(`'${elem}'`);

//     }

// }


//run 
showTime()
setBgGreet()
getNmae()
getFocus()

// getElement(name);
// getElement(focus);
