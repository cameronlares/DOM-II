// Your code goes here

//Key up
//Key Down
//Mouse Enter
//Mouse Leave
//dblclick
//wheel






const hover = document.querySelector(".img-content img");

let scale = 1;

hover.onwheel = zoom;
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    hover.style.transform = `scale(${scale})`;
  }
//

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });



let logo = document.querySelector(".main-navigation")
let footer = document.querySelector("footer")
let btn1 = document.querySelectorAll('.btn')[0];
let btn2 = document.querySelectorAll('.btn')[1];
let btn3 = document.querySelectorAll('.btn')[2];

const btn1_color = function(btnColor){

document.addEventListener('keydown',(e)=>{
    btnColor.style.backgroundColor="yellow"
})

document.addEventListener('keyup',(e)=>{
    btnColor.style.backgroundColor="#17A2B8"
})
}
btn1_color(btn1)
btn1_color(btn2)
btn1_color(btn3)



const nav = function(){

logo.addEventListener("mouseenter",(e)=>{
    logo.style.backgroundColor="lightblue";
})

logo.addEventListener("mouseleave",(e)=>{
    logo.style.backgroundColor="white";
})


}

nav() // Change Nav Color

let imgLogo = document.querySelector(".intro>img")

const mainTitle= function(){

    imgLogo.addEventListener("dblclick", (e)=>{
        imgLogo.classList.toggle('large');
        e.stopPropagation()

    })
}

mainTitle() // Animate Image By Double Clicking



/////////////////


    

  console.log(hover)


