// Your code goes here

//Key up
//Key Down
//Mouse Enter
//Mouse Leave
//dblclick
//wheel
//LOAD
//Mouse Over 
//Mouse Out
//select





//Keys

let btn1 = document.querySelectorAll('.btn')[0];
let btn2 = document.querySelectorAll('.btn')[1];
let btn3 = document.querySelectorAll('.btn')[2];

const btn1_color = function (btnColor) {

    document.addEventListener('keydown', (e) => {
        btnColor.style.backgroundColor = "yellow"
    })

    document.addEventListener('keyup', (e) => {
        btnColor.style.backgroundColor = "#17A2B8"
        e.stopPropagation();
    })

}

btn1_color(btn1)
btn1_color(btn2)
btn1_color(btn3)


//Keys End



// Mouse Enter/ Mouse Leave

let logo = document.querySelector(".main-navigation")
const nav = function () {

    logo.addEventListener("mouseenter", (e) => {
        logo.style.backgroundColor = "lightblue";
    })

    logo.addEventListener("mouseleave", (e) => {
        logo.style.backgroundColor = "white";
    })
}

// Mouse Enter/ Mouse Leave End

nav() // Change Nav Color




//Hover

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
//Hover End

//Page Load

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});
//Page Load End




//dblclick

let footer = document.querySelector("footer")
let imgLogo = document.querySelector(".intro>img")

const mainTitle = function () {

    imgLogo.addEventListener("dblclick", (e) => {
        imgLogo.classList.toggle('large');
        e.stopPropagation()

    })
}

mainTitle() // Animate Image By Double Clicking

//dblclick End

//Mouse Over/Mouse Out

const transformText = document.querySelectorAll('.text-content>h2')[0];

const transform = function () {

    transformText.addEventListener('mouseover', (e) => {

        transformText.textContent = "Gotcha! 😝"

    });

    transformText.addEventListener('mouseout', (e) => {

        transformText.textContent = "Let's Go!"

    });
}
transform()


//Mouse Over/Mouse Out End


//Select

const navLink = document.querySelector('.nav')

document.addEventListener('select', (e) => {

    e.preventDefault()
});

console.log(navLink)

//Select End