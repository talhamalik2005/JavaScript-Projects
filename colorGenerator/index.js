btn =document.querySelector("button");


btn.addEventListener("click", function(){console.log("color generated   successfully")
let h1 =document.querySelector("h1");
let box =document.querySelector(".color-box");
let randomColor =getRandomcolor();
h1.innerText =`color code is ${randomColor}`;
    console.log("color updated successfully");

    box.style.backgroundColor = randomColor;
    btn.style.backgroundColor = randomColor;
    h1.style.color = randomColor;
    box.style.bordercolor = "white";
    btn.setAttribute("class","btnhover");
});
function getRandomcolor(){
    let red =Math.floor(Math.random() *255); 
    let green =Math.floor(Math.random() *255);
    let blue =Math.floor(Math.random() *255);
    let color = `rgb(${red} , ${green}, ${blue}) `;
     console.log(color);
     return color;

}

