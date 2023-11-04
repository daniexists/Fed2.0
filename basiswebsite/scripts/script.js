// JavaScript Document
console.log("hi");



var deCheckbox = document.querySelector("footer form label:nth-of-type(2) input");

var deInput = document.querySelector("footer form  > input");

var deButton = document.querySelector("footer form > button");


deCheckbox.onchange = togglezoekveld; 

function togglezoekveld(){

    if (deInput.disabled == true){
        deInput.disabled = false; 
        deButton.disabled = false; 
    }

    else{
        deInput.disabled = true; 
        deButton.disabled = true; 
    }
}