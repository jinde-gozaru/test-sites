/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; 
*/

let myImage = document.querySelector('img');
 
myImage.onclick=function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/shiba-inu.jpg'){
        myImage.setAttribute('src', 'images/doge.jpg');
    } else {
        myImage.setAttribute('src', 'images/shiba-inu.jpg');
    }
}

let myButton =document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName() {
    let myName = prompt('Please enter your name.');
    //if myName is nothing, run setUserName()
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Japanese flying squirrel, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.get('name');
    myHeading.textContent = 'Wassup kid' + storedName;
}

myButton.onclick = function() {
    setUserName();
}